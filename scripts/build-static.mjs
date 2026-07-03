import { cp, rename, rm, writeFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, ".output/public");
const dist = resolve(root, "dist");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(source))) {
  console.error(
    `[build-static] Expected "${source}" to exist. Run the Vite build first.`,
  );
  process.exit(1);
}

// Fresh copy of the client-only output into an upload-ready folder.
await rm(dist, { recursive: true, force: true });
await cp(source, dist, { recursive: true });

// Shared PHP/Apache hosting serves index.html by default, so rename the SPA shell.
const shell = resolve(dist, "_shell.html");
if (await exists(shell)) {
  await rename(shell, resolve(dist, "index.html"));
}

if (!(await exists(resolve(dist, "index.html")))) {
  console.error("[build-static] No index.html was produced by the build.");
  process.exit(1);
}

// Apache rewrite so client-side routes (e.g. /login) fall back to the SPA shell.
const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Serve real files and directories directly.
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Everything else is handled by the SPA.
  RewriteRule . /index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
`;
await writeFile(resolve(dist, ".htaccess"), htaccess, "utf8");

console.log(`[build-static] Static site ready in ${dist}`);
console.log("[build-static] Upload the contents of dist/ to your web root (e.g. public_html).");

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout, Field, inputClass, primaryBtn } from "@/components/AuthLayout";
import { Lock, Eye, EyeOff, Check } from "lucide-react";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset password | EnergyOne" },
      { name: "description", content: "Set a new password for your EnergyOne account." },
    ],
  }),
  component: ResetPage,
});

function ResetPage() {
  const [show, setShow] = useState(false);
  const [pwd, setPwd] = useState("");

  const rules = [
    { ok: pwd.length >= 8, label: "At least 8 characters" },
    { ok: /[A-Z]/.test(pwd), label: "One uppercase letter" },
    { ok: /[0-9]/.test(pwd), label: "One number" },
    { ok: /[^A-Za-z0-9]/.test(pwd), label: "One symbol" },
  ];

  return (
    <AuthLayout
      eyebrow="Almost done"
      title="Set a new password"
      subtitle="Choose a strong password you haven't used before."
      footer={
        <Link to="/login" className="text-[#35d6ff] hover:underline font-semibold">
          ← Back to login
        </Link>
      }
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Field label="New password">
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type={show ? "text" : "password"}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="••••••••"
              className={inputClass + " pl-10 pr-10"}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </Field>
        <Field label="Confirm new password">
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input type="password" placeholder="••••••••" className={inputClass + " pl-10"} />
          </div>
        </Field>

        <ul className="grid grid-cols-2 gap-2 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
          {rules.map((r) => (
            <li key={r.label} className="flex items-center gap-2 text-xs">
              <div
                className={`grid h-4 w-4 place-items-center rounded-full ${r.ok ? "bg-emerald-400/20 text-emerald-300" : "bg-white/10 text-white/30"}`}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </div>
              <span className={r.ok ? "text-white/90" : "text-white/50"}>{r.label}</span>
            </li>
          ))}
        </ul>

        <button type="submit" className={primaryBtn}>
          Update password
        </button>
      </form>
    </AuthLayout>
  );
}

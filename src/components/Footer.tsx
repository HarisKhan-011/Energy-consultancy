import { Logo } from "./Logo";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 pb-10">
      <div className="container-90">
        <div className="glass rounded-3xl p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <Logo />
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                A modern command center for gas and electrical services, with booking, emergency,
                and maintenance in one place.
              </p>
              <div className="mt-5 flex items-center gap-2">
                {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-[#35d6ff]/50 hover:bg-[#35d6ff]/10 transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <FooterCol
              title="Quick Links"
              items={["Home", "About", "Pricing", "Careers", "Blog"]}
            />
            <FooterCol
              title="Services"
              items={[
                "Gas Installation",
                "Electrical Repairs",
                "Emergency Callouts",
                "Safety Inspections",
                "Maintenance Plans",
              ]}
            />
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2.5 text-sm text-white/60">
                <li>help@energyone.io</li>
                <li>
                  <a href="tel:+18886129878" className="hover:text-white transition-colors">
                    +1 (888) 612-9878
                  </a>
                </li>
                <li>24/7 Emergency Line</li>
                <li> New York</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-white/50">
            Calls may be recorded for quality and assurance purposes
          </p>
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
              <span>© {new Date().getFullYear()} EnergyOne. All rights reserved.</span>
              <div className="flex gap-5">
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
                <a href="#" className="hover:text-white">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm text-white/60">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-white transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

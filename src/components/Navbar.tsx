import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/#services", label: "Services" },
  { to: "/#emergency", label: "Emergency" },
  { to: "/#maintenance", label: "Maintenance" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-4 z-50">
      <div className="container-90">
        <nav className="glass-strong flex items-center justify-between gap-4 px-4 py-3 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] animate-slide-down">
          <Logo />
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                className="px-3.5 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 hover:scale-105"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              Login
            </Link>
            <a
              href="#services"
              className="btn-shine relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2f80ed] to-[#35d6ff] text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(47,128,237,0.8)] hover:shadow-[0_16px_40px_-10px_rgba(53,214,255,0.9)] hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              Book Service
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link
                to="/login"
                className="px-3 py-2.5 text-sm text-white/80 rounded-lg hover:bg-white/5"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="mt-1 px-3 py-2.5 rounded-lg bg-gradient-to-r from-[#2f80ed] to-[#35d6ff] text-white text-sm font-semibold text-center"
              >
                Book Service
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

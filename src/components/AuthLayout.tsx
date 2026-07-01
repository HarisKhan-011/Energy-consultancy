import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ShieldCheck, Zap, Clock, Wrench } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    desc: "Fully vetted gas & electrical experts.",
  },
  { icon: Zap, title: "24/7 Emergency", desc: "Rapid response for critical issues." },
  { icon: Clock, title: "Smart Tracking", desc: "Real-time technician ETA & job updates." },
  { icon: Wrench, title: "Full Service Suite", desc: "Install, repair, inspect, and maintain." },
];

export function AuthLayout({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="min-h-screen py-6 md:py-10">
      <div className="container-90">
        <div className="mb-8">
          <Logo />
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] items-stretch">
          {/* Brand panel */}
          <div className="relative hidden lg:flex glass-strong rounded-3xl p-10 overflow-hidden flex-col justify-between min-h-[640px]">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#2f80ed]/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#35d6ff]/20 blur-3xl" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#35d6ff] animate-pulse-glow" />
                {eyebrow}
              </span>
              <h2 className="mt-6 font-display text-4xl xl:text-5xl font-bold leading-[1.05] text-white">
                Your utility <span className="text-gradient-tech">command center</span>, always on.
              </h2>
              <p className="mt-5 text-white/70 text-base leading-relaxed max-w-md">
                Book trusted gas & electrical experts, track maintenance, and stay ahead of
                emergencies from one modern dashboard.
              </p>
            </div>
            <div className="relative grid grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b.title} className="glass rounded-2xl p-4">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#2f80ed] to-[#35d6ff]">
                    <b.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">{b.title}</div>
                  <div className="mt-1 text-xs text-white/60">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="glass-strong rounded-3xl p-6 sm:p-10 flex flex-col justify-center min-h-[640px]">
            <div className="max-w-md w-full mx-auto">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                {title}
              </h1>
              <p className="mt-2 text-sm text-white/60">{subtitle}</p>
              <div className="mt-8">{children}</div>
              {footer && <div className="mt-6 text-center text-sm text-white/60">{footer}</div>}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <Link to="/" className="text-xs text-white/50 hover:text-white">
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium text-white/80">{label}</span>
        {hint}
      </div>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-[#35d6ff]/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-[#35d6ff]/10 transition-all";

export const primaryBtn =
  "btn-shine relative w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#2f80ed] to-[#35d6ff] text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(47,128,237,0.7)] hover:shadow-[0_16px_40px_-10px_rgba(53,214,255,0.9)] transition-shadow";

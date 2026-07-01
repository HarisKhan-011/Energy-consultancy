import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "@tanstack/react-router";
import {
  Zap,
  Flame,
  ShieldCheck,
  Wrench,
  Gauge,
  PhoneCall,
  Sparkles,
  ArrowRight,
  Activity,
  Clock,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Cable,
  Lightbulb,
  Cpu,
  TrendingUp,
  ArrowUpRight,
  Battery,
  Radio,
  type LucideIcon,
} from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tint: "amber" | "blue";
};

type StatusTint = "emerald" | "cyan";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Emergency />
        <Maintenance />
        <WhyUs />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#2f80ed]/25 blur-[120px]" />
        <div className="absolute top-40 right-10 h-[400px] w-[400px] rounded-full bg-[#35d6ff]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 h-[380px] w-[380px] rounded-full bg-[#ffb020]/10 blur-[120px]" />
      </div>
      <div className="container-90">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#35d6ff] animate-pulse-glow" />
              Live 24/7 · Certified experts across your city
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white">
              Smarter Gas & Electricity Services,{" "}
              <span className="text-gradient-tech">Managed With Precision.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              Book trusted utility experts, request emergency support, track maintenance, and manage
              your gas and electrical services from one modern command center.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="btn-shine relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2f80ed] to-[#35d6ff] text-white font-semibold shadow-[0_16px_50px_-15px_rgba(47,128,237,0.9)]"
              >
                Book a Service <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#emergency"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass border-[#ffb020]/30 text-white font-semibold hover:border-[#ffb020]/60 hover:bg-[#ffb020]/5 transition-all"
              >
                <PhoneCall className="h-4 w-4 text-[#ffb020]" />
                Request Emergency Help
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#35d6ff]" /> No hidden fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#35d6ff]" /> Rated 4.9 · 12k+ jobs
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#35d6ff]" /> Fully insured
              </div>
            </div>
          </div>
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative animate-fade-up">
      <div className="absolute -inset-6 bg-gradient-to-br from-[#2f80ed]/30 via-transparent to-[#35d6ff]/20 blur-3xl -z-10" />

      {/* Main dashboard card */}
      <div className="glass-strong rounded-3xl p-5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#2f80ed] to-[#35d6ff]">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-xs text-white/60">Service Command</div>
              <div className="text-sm font-semibold text-white">Live Overview</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-[10px] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            All systems normal
          </div>
        </div>

        {/* Priority alert */}
        <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-[#ffb020]/15 to-transparent border border-[#ffb020]/30">
          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#ffb020]/20">
              <AlertTriangle className="h-4 w-4 text-[#ffb020]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold text-white">Priority · Gas Leak Check</div>
                <span className="text-[10px] text-[#ffb020] font-semibold">P1</span>
              </div>
              <div className="mt-0.5 text-xs text-white/60">Technician Aisha J. · ETA 12 min</div>
              <div className="mt-2.5 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#ffb020] to-[#ff6b3d] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <MiniCard icon={ShieldCheck} label="Gas Safety" value="Passed" tint="emerald" />
          <MiniCard icon={Zap} label="Electrical" value="82%" tint="cyan" sub="Maintenance" />
        </div>

        <div className="mt-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/60">Energy usage · 7d</div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-300">
              <TrendingUp className="h-3 w-3" /> −12%
            </div>
          </div>
          <div className="mt-3 flex items-end gap-1.5 h-16">
            {[40, 55, 35, 70, 50, 65, 45].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t bg-gradient-to-t from-[#2f80ed] to-[#35d6ff] opacity-80"
              />
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-[#35d6ff]" />
            <div className="text-xs text-white/70">Tech en route · 0.8 mi</div>
          </div>
          <div className="text-xs font-semibold text-white">12:42</div>
        </div>
      </div>

      {/* Floating card - top right */}
      <div className="hidden md:block absolute -top-8 -right-6 animate-float">
        <div className="glass-strong rounded-2xl p-4 w-56 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#35d6ff]/20">
              <Radio className="h-4 w-4 text-[#35d6ff]" />
            </div>
            <div className="text-xs font-semibold text-white">Smart Meter</div>
          </div>
          <div className="mt-3 text-2xl font-display font-bold text-white">
            4.82<span className="text-sm text-white/50 font-normal ml-1">kWh</span>
          </div>
          <div className="mt-1 text-[10px] text-white/50">Last hour · optimized</div>
        </div>
      </div>

      {/* Floating card - bottom left */}
      <div
        className="hidden md:block absolute -bottom-6 -left-6 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="glass-strong rounded-2xl p-4 w-52 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/60">Next Inspection</div>
            <Sparkles className="h-3.5 w-3.5 text-[#ffb020]" />
          </div>
          <div className="mt-2 text-sm font-semibold text-white">Boiler service</div>
          <div className="mt-0.5 text-[10px] text-white/50">Aug 12 · 10:00 AM</div>
        </div>
      </div>
    </div>
  );
}

function MiniCard({
  icon: Icon,
  label,
  value,
  sub,
  tint,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  sub?: string;
  tint: StatusTint;
}) {
  const tints = {
    emerald: "bg-emerald-400/15 text-emerald-300",
    cyan: "bg-[#35d6ff]/15 text-[#35d6ff]",
  };
  return (
    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
      <div className={`grid h-8 w-8 place-items-center rounded-lg ${tints[tint]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="mt-3 text-xs text-white/60">{label}</div>
      <div className="mt-0.5 text-lg font-display font-bold text-white">{value}</div>
      {sub && <div className="text-[10px] text-white/50">{sub}</div>}
    </div>
  );
}

function StatsBar() {
  const items = [
    { icon: Clock, label: "24/7 Emergency Support", value: "Always on" },
    { icon: ShieldCheck, label: "Certified Technicians", value: "Fully vetted" },
    { icon: Activity, label: "Smart Service Tracking", value: "Real-time" },
    { icon: Flame, label: "Gas & Electrical Safety", value: "Compliant" },
  ];
  return (
    <section className="pb-10">
      <div className="container-90">
        <div className="glass rounded-3xl px-6 py-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {items.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center gap-4 ${i > 0 ? "md:pl-6 md:border-l md:border-white/10" : ""}`}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                  <s.icon className="h-5 w-5 text-[#35d6ff]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-white/50">{s.label}</div>
                  <div className="text-sm font-semibold text-white truncate">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Flame,
    title: "Gas Installation",
    desc: "Certified installation of boilers, meters, cookers, and pipework.",
    tint: "amber",
  },
  {
    icon: Cable,
    title: "Electrical Repairs",
    desc: "From flickering circuits to full rewires, safely and quickly.",
    tint: "blue",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Callouts",
    desc: "24/7 rapid response for leaks, outages, and hazards.",
    tint: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspections",
    desc: "Regulatory-grade gas and electrical safety audits.",
    tint: "blue",
  },
  {
    icon: Wrench,
    title: "Maintenance Plans",
    desc: "Scheduled upkeep to prevent costly failures.",
    tint: "blue",
  },
  {
    icon: Lightbulb,
    title: "Energy Consultation",
    desc: "Cut waste with expert audits and smart recommendations.",
    tint: "amber",
  },
] satisfies ServiceCardProps[];

function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-90">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Everything utility, <span className="text-gradient-tech">under one roof.</span>
            </>
          }
          subtitle="From routine checks to complex installs, our certified crews handle every service with precision, transparency, and safety-first standards."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, tint }: ServiceCardProps) {
  const isAmber = tint === "amber";
  return (
    <div className="group relative glass rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
      <div
        className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
        style={{
          background: isAmber
            ? "linear-gradient(135deg, rgba(255,176,32,0.15), transparent 60%)"
            : "linear-gradient(135deg, rgba(47,128,237,0.18), rgba(53,214,255,0.10) 60%, transparent)",
        }}
      />
      <div className="relative">
        <div
          className="grid h-12 w-12 place-items-center rounded-xl border transition-shadow"
          style={{
            background: isAmber
              ? "linear-gradient(135deg, rgba(255,176,32,0.25), rgba(255,107,61,0.15))"
              : "linear-gradient(135deg, rgba(47,128,237,0.3), rgba(53,214,255,0.15))",
            borderColor: isAmber ? "rgba(255,176,32,0.3)" : "rgba(53,214,255,0.3)",
          }}
        >
          <Icon className={`h-5 w-5 ${isAmber ? "text-[#ffb020]" : "text-[#35d6ff]"}`} />
        </div>
        <h3 className="mt-5 text-lg font-display font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{desc}</p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 group-hover:text-white transition-colors">
          Learn more{" "}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}

function Emergency() {
  const steps = [
    { icon: AlertTriangle, label: "Issue Reported", desc: "Describe the problem in seconds." },
    { icon: Gauge, label: "Priority Assigned", desc: "Smart triage ranks urgency P1-P4." },
    { icon: PhoneCall, label: "Technician Dispatched", desc: "Nearest certified expert routed." },
    { icon: Activity, label: "Service Tracked", desc: "Live ETA, updates, and completion." },
  ];
  return (
    <section id="emergency" className="py-20">
      <div className="container-90">
        <div className="relative glass-strong rounded-3xl p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#ffb020]/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#2f80ed]/15 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb020]/10 border border-[#ffb020]/30 text-xs text-[#ffb020]">
              <AlertTriangle className="h-3 w-3" /> Emergency Triage
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold text-white leading-[1.05]">
              Emergency Support That Knows{" "}
              <span className="text-gradient-amber">What Matters First.</span>
            </h2>
            <p className="mt-5 text-white/70 text-base leading-relaxed">
              Report gas leaks, power failures, wiring issues, appliance faults, or urgent
              inspections. Our triage engine prioritizes safety-critical jobs and dispatches the
              closest certified technician instantly.
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.label} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px -translate-x-1/2 bg-gradient-to-r from-[#35d6ff]/40 to-transparent" />
                )}
                <div className="glass rounded-2xl p-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#2f80ed]/30 to-[#35d6ff]/20 border border-[#35d6ff]/30">
                      <s.icon className="h-5 w-5 text-[#35d6ff]" />
                    </div>
                    <div className="text-xs text-white/50 font-semibold">Step {i + 1}</div>
                  </div>
                  <div className="mt-4 text-base font-display font-semibold text-white">
                    {s.label}
                  </div>
                  <div className="mt-1.5 text-sm text-white/60 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Maintenance() {
  return (
    <section id="maintenance" className="py-20">
      <div className="container-90">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/80">
              <Wrench className="h-3 w-3 text-[#35d6ff]" /> Maintenance
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold text-white leading-[1.05]">
              Track every service, <span className="text-gradient-tech">never miss a check.</span>
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              A single dashboard for upcoming inspections, technician assignments, safety status,
              and completion history. Set it and forget it. We'll remind you before anything
              expires.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Automated inspection reminders",
                "Complete service history & receipts",
                "Multi-property portfolio view",
                "Compliance-ready reports on demand",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="grid h-6 w-6 place-items-center rounded-md bg-[#35d6ff]/15 border border-[#35d6ff]/30">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#35d6ff]" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-strong rounded-3xl p-6 md:p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-white/50">Property · 42 Oak Lane</div>
                <div className="mt-1 text-lg font-display font-semibold text-white">
                  Maintenance Overview
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-[10px] text-emerald-300 font-semibold">
                HEALTHY
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <MaintRow
                icon={Flame}
                title="Gas Boiler Service"
                meta="Aug 12 · Tech: Marco V."
                status="Upcoming"
                statusTint="cyan"
              />
              <MaintRow
                icon={Zap}
                title="Electrical Panel Check"
                meta="Completed Jul 03"
                status="Passed"
                statusTint="emerald"
              />
              <MaintRow
                icon={ShieldCheck}
                title="Safety Inspection"
                meta="Certificate valid · 11 mo"
                status="Compliant"
                statusTint="emerald"
              />
            </div>

            <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/60">Annual plan completion</span>
                <span className="text-white font-semibold">82%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#2f80ed] to-[#35d6ff]" />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-white/50">
                <span>Started Jan 1</span>
                <span>Renews Dec 31</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MaintRow({
  icon: Icon,
  title,
  meta,
  status,
  statusTint,
}: {
  icon: LucideIcon;
  title: string;
  meta: string;
  status: string;
  statusTint: StatusTint;
}) {
  const tints: Record<StatusTint, string> = {
    emerald: "bg-emerald-400/10 border-emerald-400/30 text-emerald-300",
    cyan: "bg-[#35d6ff]/10 border-[#35d6ff]/30 text-[#35d6ff]",
  };
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
        <Icon className="h-4.5 w-4.5 text-white/80" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold text-white truncate">{title}</div>
        <div className="text-xs text-white/50 truncate">{meta}</div>
      </div>
      <span
        className={`shrink-0 px-2.5 py-1 rounded-full border text-[10px] font-semibold ${tints[statusTint]}`}
      >
        {status}
      </span>
    </div>
  );
}

function WhyUs() {
  return (
    <section id="about" className="py-20">
      <div className="container-90">
        <SectionHeader
          eyebrow="Why EnergyOne"
          title={
            <>
              Built for reliability, <span className="text-gradient-tech">designed for today.</span>
            </>
          }
          subtitle="Not another utility company. A modern service platform where trust, speed, and transparency come standard."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <div className="lg:row-span-2 lg:col-span-1 relative glass-strong rounded-3xl p-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#2f80ed]/20 blur-3xl" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#2f80ed] to-[#35d6ff]">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <div className="mt-6 text-xs text-[#35d6ff] font-semibold tracking-wider uppercase">
                Featured
              </div>
              <h3 className="mt-2 text-2xl font-display font-bold text-white leading-tight">
                A modern customer dashboard that actually helps.
              </h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Track every job, technician, invoice, and safety certificate in one place. See ETAs,
                chat with your crew, and export reports in a click.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { v: "4.9", l: "Rating" },
                  { v: "12k+", l: "Jobs done" },
                  { v: "18m", l: "Avg response" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"
                  >
                    <div className="text-lg font-display font-bold text-white">{s.v}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <FeatureCard
            icon={Clock}
            title="Fast response times"
            desc="18-minute average dispatch for emergencies across the city."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Certified team"
            desc="Every technician is licensed, background-checked, and rated."
          />
          <div className="lg:col-span-2 glass rounded-3xl p-6 flex items-center gap-6">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#ffb020]/30 to-[#ff6b3d]/20 border border-[#ffb020]/30">
              <Battery className="h-6 w-6 text-[#ffb020]" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-display font-semibold text-white">
                Transparent booking, real-time updates.
              </h3>
              <p className="mt-1.5 text-sm text-white/60">
                Fixed pricing before you book. Live tracking after. No surprise fees, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="glass rounded-3xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
        <Icon className="h-5 w-5 text-[#35d6ff]" />
      </div>
      <h3 className="mt-5 text-lg font-display font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Choose your service",
      desc: "Pick from installations, repairs, inspections, or plans.",
    },
    {
      n: "02",
      title: "Share issue details",
      desc: "Snap a photo, describe the problem, set your window.",
    },
    {
      n: "03",
      title: "Get matched",
      desc: "The nearest certified technician is dispatched to you.",
    },
    {
      n: "04",
      title: "Track & complete",
      desc: "Live ETA, digital sign-off, and your report in-app.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container-90">
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              Four steps, <span className="text-gradient-tech">zero friction.</span>
            </>
          }
          subtitle="From tap to technician in minutes."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative glass rounded-2xl p-6 hover:border-white/20 transition-all"
            >
              <div className="text-5xl font-display font-bold text-gradient-tech opacity-90">
                {s.n}
              </div>
              <div className="mt-4 text-lg font-display font-semibold text-white">{s.title}</div>
              <div className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="py-20">
      <div className="container-90">
        <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden text-center">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-[#2f80ed]/25 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-[#ffb020]/15 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#35d6ff] animate-pulse-glow" />
              Available in your area now
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold text-white leading-[1.02] max-w-3xl mx-auto">
              Need Gas or Electrical Help <span className="text-gradient-tech">Today?</span>
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto">
              Book a professional service or request urgent support in just a few clicks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="#services"
                className="btn-shine relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2f80ed] to-[#35d6ff] text-white font-semibold shadow-[0_20px_50px_-15px_rgba(47,128,237,0.9)]"
              >
                Book Now <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/80">
        <Sparkles className="h-3 w-3 text-[#35d6ff]" /> {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold text-white leading-[1.05]">
        {title}
      </h2>
      <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">{subtitle}</p>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout, Field, inputClass, primaryBtn } from "@/components/AuthLayout";
import { Mail, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot password | EnergyOne" },
      { name: "description", content: "Reset your EnergyOne account password securely." },
    ],
  }),
  component: ForgotPage,
});

function ForgotPage() {
  return (
    <AuthLayout
      eyebrow="Account recovery"
      title="Forgot your password?"
      subtitle="Enter the email on your account and we'll send a secure reset link."
      footer={
        <Link to="/login" className="text-[#35d6ff] hover:underline font-semibold">
          ← Back to login
        </Link>
      }
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Field label="Email address">
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input type="email" placeholder="you@example.com" className={inputClass + " pl-10"} />
          </div>
        </Field>
        <button type="submit" className={primaryBtn}>
          Send reset link
        </button>
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#35d6ff]/5 border border-[#35d6ff]/20">
          <ShieldCheck className="h-5 w-5 shrink-0 text-[#35d6ff]" />
          <div className="text-xs text-white/70 leading-relaxed">
            For your security, reset links expire in 30 minutes and can only be used once. We'll
            never ask for your password by email.
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

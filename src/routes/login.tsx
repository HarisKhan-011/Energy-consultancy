import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout, Field, inputClass, primaryBtn } from "@/components/AuthLayout";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login | EnergyOne" },
      { name: "description", content: "Sign in to manage your gas and electrical services." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to EnergyOne"
      subtitle="Manage bookings, track technicians, and stay on top of every service."
      footer={
        <>
          New here?{" "}
          <Link to="/register" className="text-[#35d6ff] hover:underline font-semibold">
            Create an account
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Field label="Email address">
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input type="email" placeholder="you@example.com" className={inputClass + " pl-10"} />
          </div>
        </Field>
        <Field
          label="Password"
          hint={
            <Link to="/forgot-password" className="text-xs text-[#35d6ff] hover:underline">
              Forgot?
            </Link>
          }
        >
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type={show ? "text" : "password"}
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
        <label className="flex items-center gap-2 text-xs text-white/70 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-white/20 bg-white/5 accent-[#35d6ff]"
          />
          Remember me on this device
        </label>
        <button type="submit" className={primaryBtn + " mt-2"}>
          Sign in
        </button>
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
            <span className="px-3 bg-transparent text-white/40">or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="px-4 py-2.5 rounded-xl glass text-sm text-white/80 hover:bg-white/5 hover:border-white/20 transition-all"
          >
            Google
          </button>
          <button
            type="button"
            className="px-4 py-2.5 rounded-xl glass text-sm text-white/80 hover:bg-white/5 hover:border-white/20 transition-all"
          >
            Apple
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

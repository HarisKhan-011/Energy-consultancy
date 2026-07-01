import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout, Field, inputClass, primaryBtn } from "@/components/AuthLayout";
import { Eye, EyeOff, Mail, Lock, User, Phone, Briefcase, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account | EnergyOne" },
      { name: "description", content: "Sign up to book gas and electrical services in minutes." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [show, setShow] = useState(false);
  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your account"
      subtitle="Book, track, and manage your utility services from one dashboard."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-[#35d6ff] hover:underline font-semibold">
            Sign in
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Field label="Full name">
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input type="text" placeholder="Alex Morgan" className={inputClass + " pl-10"} />
          </div>
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email">
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input type="email" placeholder="you@example.com" className={inputClass + " pl-10"} />
            </div>
          </Field>
          <Field label="Phone">
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input type="tel" placeholder="+1 555 000 0000" className={inputClass + " pl-10"} />
            </div>
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Password">
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
          <Field label="Confirm password">
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input type="password" placeholder="••••••••" className={inputClass + " pl-10"} />
            </div>
          </Field>
        </div>
        <Field label="Account type">
          <div className="relative">
            <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
            <select
              className={inputClass + " pl-10 pr-10 appearance-none"}
              defaultValue="homeowner"
            >
              <option className="bg-[#101827]" value="homeowner">
                Homeowner
              </option>
              <option className="bg-[#101827]" value="business">
                Business
              </option>
              <option className="bg-[#101827]" value="facility">
                Facility Manager
              </option>
            </select>
          </div>
        </Field>
        <label className="flex items-start gap-2 text-xs text-white/60 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-[#35d6ff]"
          />
          I agree to the{" "}
          <a href="#" className="text-[#35d6ff] hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#35d6ff] hover:underline">
            Privacy Policy
          </a>
          .
        </label>
        <button type="submit" className={primaryBtn + " mt-2"}>
          Create account
        </button>
      </form>
    </AuthLayout>
  );
}

import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#2f80ed] to-[#35d6ff] shadow-[0_8px_24px_-8px_rgba(47,128,237,0.7)]">
        <Zap className="h-4.5 w-4.5 text-white" strokeWidth={2.5} fill="white" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2f80ed] to-[#35d6ff] opacity-0 blur-md group-hover:opacity-60 transition-opacity" />
      </div>
      {!compact && (
        <span className="font-display text-lg font-bold tracking-tight text-white">
          Energy<span className="text-[#35d6ff]">One</span>
        </span>
      )}
    </Link>
  );
}

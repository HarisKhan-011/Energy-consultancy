import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import type { ReactNode } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
};

const hiddenOffset = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
} as const;

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 650,
}: AnimateInProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] ease-out will-change-[opacity,transform]",
        "motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:transition-none",
        !inView && ["opacity-0", hiddenOffset[direction]],
        inView && "opacity-100 translate-x-0 translate-y-0",
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

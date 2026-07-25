import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cyan";
  className?: string;
}

export default function Chip({ children, variant = "default", className }: ChipProps) {
  const variants: Record<string, string> = {
    default: "border-white/10 bg-white/[0.03] text-[#9aa4b2]",
    accent: "border-[rgba(63,133,98,0.35)] bg-[rgba(63,133,98,0.12)] text-[#6fbf94]",
    cyan: "border-[rgba(90,169,201,0.3)] bg-[rgba(90,169,201,0.1)] text-[#7ec3e0]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] leading-none whitespace-nowrap transition-colors duration-150 hover:border-white/20 hover:text-[#eef1f5]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

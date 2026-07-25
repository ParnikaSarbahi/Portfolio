import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.07] bg-[#10151d]/70 backdrop-blur-sm",
        hover &&
          "transition-all duration-300 hover:border-[rgba(63,133,98,0.35)] hover:bg-[#131a23]/80",
        className
      )}
    >
      {children}
    </div>
  );
}

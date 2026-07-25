import { cn } from "@/lib/utils";

export default function SectionHeading({
  children,
  action,
  className,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 flex items-end justify-between", className)}>
      <h2 className="font-display text-3xl italic text-[#eef1f5] sm:text-4xl">{children}</h2>
      {action && (
        <span className="font-mono text-xs text-[#9aa4b2] transition-colors hover:text-[#6fbf94]">
          {action}
        </span>
      )}
    </div>
  );
}

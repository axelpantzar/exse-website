export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-xl font-semibold tracking-tight text-foreground">
          EXSE
        </span>
        <span className="font-display text-xl font-semibold tracking-tight text-copper">
          AB
        </span>
      </div>
      <span
        className="inline-block h-3 w-3 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.75 0.14 45), oklch(0.35 0.1 35))",
        }}
        aria-hidden
      />
      <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
        Sport · Miljö
      </span>
    </div>
  );
}

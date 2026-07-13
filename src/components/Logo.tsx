export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/exse-logo.png"
      alt="EXSE AB — Sport · Miljö"
      width={140}
      height={32}
      className={`h-6 w-auto sm:h-7 md:h-8 ${className}`}
    />
  );
}

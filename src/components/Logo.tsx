import logoAsset from "../assets/exse-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="EXSE AB — Sport · Miljö"
      width={140}
      height={32}
      className={`h-8 w-auto ${className}`}
    />
  );
}

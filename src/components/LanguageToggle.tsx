import { useLang, type Lang } from "../i18n/LanguageContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const options: { code: Lang; label: string }[] = [
    { code: "sv", label: "SV" },
    { code: "en", label: "EN" },
  ];
  return (
    <div
      className={`inline-flex items-center rounded-full border border-border/70 bg-background/60 p-0.5 text-xs ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
            lang === o.code
              ? "bg-foreground text-background"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

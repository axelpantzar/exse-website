import { useEffect, useRef, useState, type ReactElement } from "react";
import { ChevronDown } from "lucide-react";
import { useLang, type Lang } from "../i18n/LanguageContext";

// Inline SVG flags so they render crisply and don't depend on emoji fonts.
function FlagSE({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 10" className={className} aria-hidden="true">
      <rect width="16" height="10" fill="#006aa7" />
      <rect x="5" width="2" height="10" fill="#fecc00" />
      <rect y="4" width="16" height="2" fill="#fecc00" />
    </svg>
  );
}

function FlagGB({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <clipPath id="gb-c">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="gb-t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#gb-c)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#gb-t)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const options: { code: Lang; label: string; Flag: (p: { className?: string }) => ReactElement }[] = [
  { code: "sv", label: "SV", Flag: FlagSE },
  { code: "en", label: "EN", Flag: FlagGB },
];

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.code === lang) ?? options[0];

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-2.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
      >
        <current.Flag className="h-3.5 w-5 rounded-[2px]" />
        <span>{current.label}</span>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[7rem] overflow-hidden rounded-2xl border border-border/70 bg-background shadow-lg"
        >
          {options.map((o) => (
            <li key={o.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang === o.code}
                onClick={() => {
                  setLang(o.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors hover:bg-accent ${
                  lang === o.code ? "font-medium text-foreground" : "text-foreground/70"
                }`}
              >
                <o.Flag className="h-3.5 w-5 rounded-[2px]" />
                <span>{o.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

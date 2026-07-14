import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from "react";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

/**
 * Fades and slides children into view when they intersect the viewport.
 * Uses IntersectionObserver + Tailwind's animate-fade-in keyframe.
 * Respects prefers-reduced-motion.
 */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = shown
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`transition-all duration-700 ease-out ${base} ${className}`}
    >
      {children}
    </Tag>
  );
}

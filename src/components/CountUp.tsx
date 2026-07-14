import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  /** 0-1 scroll progress through the parent section. When provided, counting is scroll-driven. */
  progress?: number;
  /** Index of this item within the section. */
  index?: number;
  /** Total number of items in the section. */
  total?: number;
}

/**
 * Animates numbers counting up.
 *
 * - When `progress`, `index` and `total` are provided, the value fills
 *   continuously as the scroll progress reaches this item's segment, mirroring
 *   the timeline progress line behaviour.
 * - Otherwise it triggers once when scrolled into view.
 *
 * Preserves any non-numeric characters (e.g. "40+", "100%").
 */
export function CountUp({ value, duration = 1600, progress, index, total }: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(match ? 0 : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!match) return;

    // Scroll-driven mode: fill value based on segment progress.
    if (
      progress !== undefined &&
      index !== undefined &&
      total !== undefined &&
      total > 0
    ) {
      const segment = 1 / total;
      const local = Math.max(0, Math.min(1, (progress - index * segment) / segment));
      // easeOutCubic
      const eased = 1 - Math.pow(1 - local, 3);
      setDisplay(Math.round(target * eased));
      return;
    }

    // Fallback: trigger once on intersection.
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, match, progress, index, total]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

import { useEffect, useRef, useState } from 'react';

interface AnimatedPercentProps {
  target: number;
  durationMs?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function AnimatedPercent({ target, durationMs = 1400, style, className }: AnimatedPercentProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          let start: number | null = null;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return (
    <div ref={ref} className={className} style={style}>
      {value}%
    </div>
  );
}

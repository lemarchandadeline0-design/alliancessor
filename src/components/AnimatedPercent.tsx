import { useEffect, useState } from 'react';
import { useInViewOnce } from '../hooks/useInViewOnce';

interface AnimatedPercentProps {
  target: number;
  durationMs?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function AnimatedPercent({ target, durationMs = 1400, style, className }: AnimatedPercentProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.35);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, durationMs]);

  return (
    <div ref={ref} className={className} style={style}>
      {value}%
    </div>
  );
}

import { useInViewOnce } from '../hooks/useInViewOnce';

interface ScoreBarProps {
  label: string;
  target: number;
}

export default function ScoreBar({ label, target }: ScoreBarProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.35);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
        <span>{label}</span>
        <span style={{ color: '#E8431F' }}>{target}%</span>
      </div>
      <div ref={ref} style={{ height: 10, borderRadius: 100, background: '#F0E7DC', overflow: 'hidden' }}>
        <div
          style={{
            width: inView ? `${target}%` : '0%',
            height: '100%',
            borderRadius: 100,
            background: '#FF5A36',
            transition: 'width 1.15s cubic-bezier(.22,1,.36,1)',
          }}
        />
      </div>
    </div>
  );
}

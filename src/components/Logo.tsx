interface LogoProps {
  blend?: 'multiply' | 'screen';
  essorColor?: string;
  textColor?: string;
}

export default function Logo({ blend = 'multiply', essorColor = '#E8431F', textColor = '#1B1830' }: LogoProps) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 12, color: textColor }}>
      <span style={{ position: 'relative', width: 34, height: 26, display: 'inline-block' }}>
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 2,
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: '#FF5A36',
            mixBlendMode: blend,
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: 12,
            top: 2,
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: '#5B3DF5',
            mixBlendMode: blend,
          }}
        />
      </span>
      <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }}>
        Allianc<span style={{ color: essorColor }}>Essor</span>
      </span>
    </span>
  );
}

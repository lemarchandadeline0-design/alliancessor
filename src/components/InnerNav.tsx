import Logo from './Logo';

interface InnerNavProps {
  active: 'entreprises' | 'associations';
  ctaBg: string;
}

export default function InnerNav({ active, ctaBg }: InnerNavProps) {
  const entColor = active === 'entreprises' ? '#E8431F' : '#1B1830';
  const assoColor = active === 'associations' ? '#5B3DF5' : '#1B1830';

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '18px clamp(20px,5vw,64px)',
        background: 'rgba(250,244,236,0.82)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(27,24,48,0.08)',
      }}
    >
      <a href="/">
        <Logo />
      </a>
      <div className="navlinks" style={{ display: 'none', alignItems: 'center', gap: 30, fontSize: 15, fontWeight: 500 }}>
        <a href="/" style={{ color: '#1B1830' }}>
          Accueil
        </a>
        <a href="/entreprises/" style={{ color: entColor, fontWeight: active === 'entreprises' ? 700 : 500 }}>
          Entreprises
        </a>
        <a href="/associations/" style={{ color: assoColor, fontWeight: active === 'associations' ? 700 : 500 }}>
          Associations
        </a>
        <a href="/#confiance" style={{ color: '#1B1830' }}>
          Qui sommes-nous
        </a>
      </div>
      <a
        href="https://zcal.co/alliancessor/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-lift"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: ctaBg,
          color: '#FAF4EC',
          fontWeight: 600,
          fontSize: 15,
          padding: '11px 22px',
          borderRadius: 100,
        }}
      >
        Prendre RDV →
      </a>
    </nav>
  );
}

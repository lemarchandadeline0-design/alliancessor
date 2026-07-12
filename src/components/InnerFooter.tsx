import Logo from './Logo';

export default function InnerFooter() {
  return (
    <footer style={{ background: '#1B1830', color: '#FAF4EC', padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,64px) 40px' }}>
      <div className="footgrid" style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
        <div>
          <Logo blend="screen" essorColor="#FF7A5C" textColor="#FAF4EC" />
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(250,244,236,0.6)', marginTop: 16, maxWidth: 300 }}>
            Le premier matching de co-mécénat durable entre entreprises &amp; associations engagées.
          </p>
          <p style={{ fontSize: 13.5, color: 'rgba(250,244,236,0.5)', marginTop: 14 }}>alliancessor@gmail.com · Alliancessor.com</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          <FooterColumn
            title="L'agence"
            links={[
              { label: 'Accueil', href: '/' },
              { label: 'Qui sommes-nous', href: '/#agence' },
            ]}
          />
          <FooterColumn
            title="Espaces"
            links={[
              { label: 'Espace entreprises', href: '/entreprises/' },
              { label: 'Espace association', href: '/associations/' },
            ]}
          />
          <FooterColumn
            title="Informations"
            links={[
              { label: 'Contact', href: '/rendez-vous/' },
              { label: 'Mentions légales', href: '/' },
            ]}
          />
        </div>
      </div>
      <div style={{ maxWidth: 1240, margin: '36px auto 0', paddingTop: 22, borderTop: '1px solid rgba(250,244,236,0.14)', fontSize: 13, color: 'rgba(250,244,236,0.5)' }}>
        © AlliancEssor — 2026 · Ne financez plus seul. Financez mieux, ensemble.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,244,236,0.5)', marginBottom: 14 }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14.5 }}>
        {links.map((link) => (
          <a key={link.label} href={link.href} style={{ color: 'rgba(250,244,236,0.85)' }}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

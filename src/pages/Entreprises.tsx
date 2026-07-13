import InnerNav from '../components/InnerNav';
import InnerFooter from '../components/InnerFooter';
import ScoreBar from '../components/ScoreBar';
import AnimatedPercent from '../components/AnimatedPercent';

export default function Entreprises() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <InnerNav active="entreprises" ctaBg="#1B1830" />
      <Hero />
      <WhatItEnables />
      <HowItWorks />
      <ScoringVisual />
      <WhatMakesUsUnique />
      <BeforeAfter />
      <Cta />
      <InnerFooter />
    </div>
  );
}

function Hero() {
  return (
    <header style={{ position: 'relative', padding: 'clamp(44px,7vw,90px) clamp(20px,5vw,64px)', overflow: 'hidden' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -70,
          right: '4%',
          width: 380,
          height: 380,
          background: '#FFE1D4',
          borderRadius: '47% 53% 62% 38% / 55% 42% 58% 45%',
          filter: 'blur(2px)',
          animation: 'floatyEnt 15s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1240, margin: '0 auto' }}>
        <a href="/" style={{ fontSize: 14, fontWeight: 600, color: 'rgba(27,24,48,0.55)' }}>
          ← Retour à l'accueil
        </a>
        <div className="heroent" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center', marginTop: 16 }}>
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: '#FFFDF9',
                border: '1px solid rgba(27,24,48,0.12)',
                padding: '8px 16px',
                borderRadius: 100,
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1B1830',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5A36' }} />
              Espace entreprises
            </span>
            <h1
              style={{
                fontFamily: "'Bricolage Grotesque'",
                fontWeight: 800,
                fontSize: 'clamp(38px,5.6vw,68px)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                margin: '22px 0 0',
                textWrap: 'balance',
              }}
            >
              Transformez l'engagement RSE en <span style={{ color: '#E8431F' }}>impact collectif</span>.
            </h1>
            <p style={{ fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.55, maxWidth: 540, marginTop: 22, color: 'rgba(27,24,48,0.75)' }}>
              Grâce à votre score RSE, identifiez les projets associatifs les plus alignés avec vos engagements et
              financez-les collectivement avec d'autres entreprises engagées.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
              <a
                href="/rendez-vous/"
                className="btn-lift"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  background: '#FF5A36',
                  color: '#FFFDF9',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '15px 28px',
                  borderRadius: 100,
                  boxShadow: '0 12px 28px -10px rgba(255,90,54,0.7)',
                }}
              >
                Prendre rendez-vous →
              </a>
              <a
                href="#methode"
                className="btn-lift"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  background: '#FFFDF9',
                  color: '#1B1830',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '15px 28px',
                  borderRadius: 100,
                  border: '1px solid rgba(27,24,48,0.14)',
                }}
              >
                Comment ça marche
              </a>
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              borderRadius: 26,
              overflow: 'hidden',
              aspectRatio: '5/4',
              boxShadow: '0 40px 70px -40px rgba(27,24,48,0.4)',
              border: '6px solid #FFFDF9',
            }}
          >
            <img src="/images/hands-tree.jpg" alt="Photo dirigeants / équipe RSE" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div style={{ marginTop: 52 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(27,24,48,0.45)', marginBottom: 16 }}>
            Le mécénat durable entre entreprises labellisées
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {['B Corp', 'EcoVadis', 'Lucie', 'Autres démarches RSE'].map((label) => (
              <span key={label} style={{ background: '#FFFDF9', border: '1px solid rgba(27,24,48,0.12)', padding: '11px 22px', borderRadius: 100, fontWeight: 700, fontSize: 15 }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

const ENABLES = [
  { bg: '#FFE1D4', dark: false, title: 'Identifier les bons projets', text: 'Cibler les projets associatifs les plus cohérents avec vos engagements RSE.' },
  { bg: '#E7E0FF', dark: false, title: 'Mutualiser le financement', text: 'Réunir les capacités de financement de plusieurs entreprises engagées.' },
  { bg: '#FFF0CE', dark: false, title: "Suivre l'impact", text: "Piloter les résultats et les indicateurs d'impact des projets soutenus." },
  { bg: '#FF5A36', dark: true, title: 'Valoriser la démarche', text: 'Rendre l\'engagement concret auprès de vos collaborateurs, clients et partenaires.' },
];

function WhatItEnables() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ maxWidth: 680 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8431F' }}>
            Notre méthodologie
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 700,
              fontSize: 'clamp(30px,4.6vw,52px)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              margin: '16px 0 0',
              textWrap: 'balance',
            }}
          >
            Grâce au scoring &amp; au matching, AlliancEssor vous permet de…
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 44 }}>
          {ENABLES.map((item) => (
            <div
              key={item.title}
              style={{
                background: item.dark ? '#1B1830' : '#FFFDF9',
                color: item.dark ? '#FAF4EC' : undefined,
                border: item.dark ? undefined : '1px solid rgba(27,24,48,0.1)',
                borderRadius: 24,
                padding: 30,
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: item.dark ? '#FF5A36' : item.bg, marginBottom: 18 }} />
              <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: item.dark ? 'rgba(250,244,236,0.82)' : 'rgba(27,24,48,0.7)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { num: '01', color: '#FF5A36', title: 'Analyse du profil', text: "Nous analysons le profil d'engagement de votre entreprise labellisée." },
  { num: '02', color: '#FF5A36', title: 'Matching des projets', text: 'Mise en relation avec des projets associatifs accompagnés par AlliancEssor dans la mesure de leur impact.' },
  { num: '03', color: '#5B3DF5', title: 'Coalitions de mécènes', text: "Création de coalitions d'entreprises engagées, mécènes d'un même projet ambitieux." },
];

function HowItWorks() {
  return (
    <section id="methode" style={{ padding: 'clamp(50px,7vw,90px) clamp(20px,5vw,64px)', background: '#F3EBE0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8431F' }}>
          Comment ça fonctionne
        </span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque'",
            fontWeight: 700,
            fontSize: 'clamp(28px,4.2vw,46px)',
            lineHeight: 1.03,
            letterSpacing: '-0.02em',
            margin: '16px 0 0',
            maxWidth: 720,
            textWrap: 'balance',
          }}
        >
          Faites émerger une nouvelle génération de mécénat.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 44 }}>
          {STEPS.map((step) => (
            <div key={step.num} style={{ background: '#FFFDF9', border: '1px solid rgba(27,24,48,0.1)', borderRadius: 24, padding: 32 }}>
              <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 38, color: step.color, letterSpacing: '-0.02em' }}>{step.num}</div>
              <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 21, margin: '12px 0 8px' }}>{step.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(27,24,48,0.7)' }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScoringVisual() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5B3DF5' }}>
            Le scoring de compatibilité RSE
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 700,
              fontSize: 'clamp(28px,4.2vw,46px)',
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              margin: '16px 0 0',
              textWrap: 'balance',
            }}
          >
            Un match fondé sur l'alignement, pas sur l'affect.
          </h2>
        </div>
        <div className="matchgrid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 22, alignItems: 'center', marginTop: 46 }}>
          <div style={{ background: '#FFFDF9', border: '1px solid rgba(27,24,48,0.1)', borderRadius: 26, padding: 30, boxShadow: '0 30px 60px -34px rgba(255,90,54,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5A36' }} />
              <span style={{ fontWeight: 700, fontSize: 14, color: '#E8431F' }}>ENTREPRISE ENGAGÉE #1</span>
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(27,24,48,0.4)', marginBottom: 18 }}>
              Ma priorisation RSE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <ScoreBar label="Respect de l'environnement" target={75} />
              <ScoreBar label="Ancrage local" target={50} />
              <ScoreBar label="Innovation durable" target={45} />
              <ScoreBar label="Éthique" target={25} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#1B1830',
                color: '#FAF4EC',
                padding: '14px 26px',
                borderRadius: 100,
                fontFamily: "'Bricolage Grotesque'",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: '0 16px 30px -14px rgba(27,24,48,0.6)',
              }}
            >
              <span style={{ width: 20, height: 20, position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, width: 14, height: 14, borderRadius: '50%', background: '#FF5A36', mixBlendMode: 'screen' }} />
                <span style={{ position: 'absolute', right: 0, top: 0, width: 14, height: 14, borderRadius: '50%', background: '#5B3DF5', mixBlendMode: 'screen' }} />
              </span>
              MATCH
            </div>
            <AnimatedPercent target={53} durationMs={1300} style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 34, color: '#5B3DF5' }} />
            <div style={{ fontSize: 13, color: 'rgba(27,24,48,0.55)' }}>de compatibilité RSE</div>
          </div>

          <div style={{ background: '#5B3DF5', color: '#FAF4EC', borderRadius: 26, padding: 30, boxShadow: '0 30px 60px -34px rgba(91,61,245,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFC24B' }} />
              <span style={{ fontWeight: 700, fontSize: 14, color: '#FFC24B' }}>PROJET ASSOCIATIF #1</span>
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,244,236,0.6)', marginBottom: 18 }}>
              Mission &amp; impact
            </div>
            <div style={{ position: 'relative', height: 150, borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
              <img src="/images/fieldwork-wetland.jpg" alt="Photo projet associatif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(250,244,236,0.85)' }}>
              Un projet à fort ancrage environnemental et local, accompagné dans la mesure de son impact parfaitement
              aligné avec vos priorités.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatMakesUsUnique() {
  return (
    <section style={{ padding: 'clamp(50px,7vw,90px) clamp(20px,5vw,64px)', background: '#1B1830', color: '#FAF4EC' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC24B' }}>
            Ce qui nous rend uniques
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 700,
              fontSize: 'clamp(28px,4.2vw,46px)',
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              margin: '16px 0 0',
              textWrap: 'balance',
            }}
          >
            Une innovation inspirée du monde de l'investissement.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.9vw,18px)', lineHeight: 1.6, marginTop: 20, color: 'rgba(250,244,236,0.72)' }}>
            Les investisseurs mutualisent leurs ressources pour financer des entreprises prometteuses. Pourquoi les
            entreprises engagées ne feraient-elles pas de même pour soutenir les associations les plus impactantes&nbsp;?
          </p>
        </div>
        <div className="uniqgrid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, marginTop: 44 }}>
          <div style={{ background: 'rgba(250,244,236,0.06)', border: '1px solid rgba(250,244,236,0.14)', borderRadius: 24, padding: 30 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(250,244,236,0.5)', marginBottom: 12 }}>
              Plateformes classiques
            </div>
            <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 24, lineHeight: 1.2, color: 'rgba(250,244,236,0.85)' }}>
              « Choisissez une association. »
            </div>
          </div>
          <div style={{ background: '#FF5A36', borderRadius: 24, padding: 30 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,253,249,0.8)', marginBottom: 12 }}>
              Chez AlliancEssor
            </div>
            <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 24, lineHeight: 1.2, color: '#FFFDF9' }}>
              « Rejoignez une coalition d'entreprises qui partagent vos valeurs et financez ensemble des projets capables
              de changer d'échelle. »
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BEFORE = [
  'Une entreprise finance seule',
  "Choix d'association souvent basé sur l'affect",
  'Impact limité par le budget individuel',
  'Peu de coopération entre mécènes',
  'Reporting hétérogène, soutien ponctuel',
];

const AFTER = [
  "Sélection fondée sur l'alignement RSE (entreprise & association)",
  'Impact amplifié par la mutualisation',
  'Relations durables et partenariats de long terme entre entreprises',
  'Des résultats mesurables et valorisants',
  'Une visibilité renforcée par une communication collective',
];

function BeforeAfter() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8431F' }}>
            Voyez la différence
          </span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 'clamp(28px,4.2vw,46px)', lineHeight: 1.03, letterSpacing: '-0.02em', margin: '16px 0 0' }}>
            Avant / Après AlliancEssor
          </h2>
        </div>
        <div className="vsgrid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, marginTop: 44 }}>
          <div style={{ background: '#FFFDF9', border: '1px solid rgba(27,24,48,0.1)', borderRadius: 24, padding: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(27,24,48,0.45)', marginBottom: 20 }}>
              Avant — l'entreprise agit seule
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {BEFORE.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ flex: 'none', color: 'rgba(27,24,48,0.35)', fontWeight: 800 }}>—</span>
                  <span style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(27,24,48,0.72)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#1B1830', color: '#FAF4EC', borderRadius: 24, padding: 32, border: '2px solid #FF5A36' }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFC24B', marginBottom: 20 }}>
              Après — plusieurs entreprises financent ensemble
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {AFTER.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ flex: 'none', color: '#FF7A5C', fontWeight: 800 }}>✓</span>
                  <span style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(250,244,236,0.9)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="rdv" style={{ padding: 'clamp(50px,7vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', background: '#FF5A36', borderRadius: 36, padding: 'clamp(40px,6vw,72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -90, left: -60, width: 280, height: 280, background: 'rgba(255,194,75,0.5)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: -70, right: -40, width: 200, height: 200, background: 'rgba(91,61,245,0.35)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1, color: '#FFFDF9' }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,253,249,0.85)' }}>
            Avec AlliancEssor, changeons les règles du mécénat
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 800,
              fontSize: 'clamp(30px,5vw,56px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: '18px auto 0',
              maxWidth: 680,
              textWrap: 'balance',
            }}
          >
            Chaque engagement compte. Le vôtre fait déjà la différence.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.55, maxWidth: 540, margin: '20px auto 0', color: 'rgba(255,253,249,0.9)' }}>
            Analysons gratuitement votre profil d'engagement et identifions vos premières coalitions.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 32 }}>
            <a
              href="/rendez-vous/"
              className="btn-lift"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B1830', color: '#FAF4EC', fontWeight: 700, fontSize: 16, padding: '16px 32px', borderRadius: 100 }}
            >
              Prendre rendez-vous →
            </a>
            <a
              href="/associations/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: 'rgba(255,253,249,0.16)',
                color: '#FFFDF9',
                fontWeight: 700,
                fontSize: 16,
                padding: '16px 32px',
                borderRadius: 100,
                border: '1px solid rgba(255,253,249,0.4)',
              }}
            >
              Vous êtes une association ?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

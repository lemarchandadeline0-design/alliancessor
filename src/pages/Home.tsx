import Logo from '../components/Logo';
import AnimatedPercent from '../components/AnimatedPercent';

interface HomeProps {
  showBlobs?: boolean;
}

export default function Home({ showBlobs = true }: HomeProps) {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Nav />
      <Hero showBlobs={showBlobs} />
      <PourquoiSection />
      <MoteurSection />
      <PortefeuilleSection />
      <MutualisationSection />
      <CycleSection />
      <BenefitsSection />
      <EntreprisesSection />
      <ConfianceSection />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ============ NAV ============ */
function Nav() {
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
      <a href="#top">
        <Logo />
      </a>
      <div
        className="navlinks"
        style={{ display: 'none', alignItems: 'center', gap: 30, fontSize: 15, fontWeight: 500 }}
      >
        <a href="#moteur" style={{ color: '#1B1830' }}>
          Le moteur de décision
        </a>
        <a href="/entreprises/" style={{ color: '#1B1830' }}>
          Entreprises
        </a>
        <a href="/associations/" style={{ color: '#1B1830' }}>
          Associations
        </a>
        <a href="#confiance" style={{ color: '#1B1830' }}>
          Qui sommes-nous
        </a>
      </div>
      <a
        href="/rendez-vous/"
        className="btn-lift"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#1B1830',
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

/* ============ HERO ============ */
function Hero({ showBlobs }: { showBlobs: boolean }) {
  return (
    <header
      id="top"
      style={{ position: 'relative', padding: 'clamp(40px,7vw,90px) clamp(20px,5vw,64px) clamp(60px,7vw,100px)' }}
    >
      {showBlobs && (
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div
            style={{
              position: 'absolute',
              top: -80,
              right: '6%',
              width: 420,
              height: 420,
              background: '#FFE1D4',
              borderRadius: '47% 53% 62% 38% / 55% 42% 58% 45%',
              filter: 'blur(2px)',
              animation: 'floaty 14s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -120,
              left: -60,
              width: 360,
              height: 360,
              background: '#E7E0FF',
              borderRadius: '63% 37% 41% 59% / 44% 62% 38% 56%',
              animation: 'floaty2 17s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '38%',
              left: '44%',
              width: 90,
              height: 90,
              background: '#FFC24B',
              borderRadius: '50%',
              opacity: 0.5,
              animation: 'floaty 11s ease-in-out infinite',
            }}
          />
        </div>
      )}

      <div
        className="herogrid"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1240,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
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
            1er moteur de décision pour le mécénat d'entreprise
          </span>

          <h1
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 800,
              fontSize: 'clamp(40px,6.4vw,76px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: '26px 0 0',
              textWrap: 'balance',
            }}
          >
            Ne financez plus seul.
            <br />
            <span style={{ color: '#E8431F' }}>Financez mieux,</span>{' '}
            <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
              ensemble
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 2,
                  width: '100%',
                  height: 12,
                  background: '#FFC24B',
                  zIndex: -1,
                  borderRadius: 4,
                }}
              />
            </span>
            .
          </h1>

          <div style={{ margin: '28px 0 30px' }}>
            <p style={{ fontSize: 'clamp(18px,2.1vw,21px)', lineHeight: 1.5, maxWidth: 560, color: '#1B1830', fontWeight: 600 }}>
              Transformez vos engagements RSE en décisions de mécénat à impact.
            </p>
            <p style={{ fontSize: 'clamp(16px,1.9vw,18px)', lineHeight: 1.6, maxWidth: 560, marginTop: 12, color: 'rgba(27,24,48,0.72)' }}>
              À partir de vos référentiels RSE, AlliancEssor identifie les projets associatifs les plus alignés avec vos
              priorités, mutualise leur financement avec d'autres entreprises engagées et accompagne la mesure de leur
              impact.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
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
                boxShadow: '0 12px 28px -10px rgba(255,90,54,0.6)',
              }}
            >
              Prendre rendez-vous →
            </a>
            <a
              href="#moteur"
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
              Voir le moteur de décision
            </a>
          </div>
        </div>

        {/* Matching visual */}
        <div style={{ position: 'relative', minHeight: 440 }}>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 440, margin: '0 auto' }}>
            <div
              style={{
                background: '#FFFDF9',
                border: '1px solid rgba(27,24,48,0.1)',
                borderRadius: 26,
                padding: 18,
                boxShadow: '0 30px 60px -30px rgba(27,24,48,0.35)',
                transform: 'rotate(-2deg)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 13, color: '#E8431F' }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5A36' }} />
                  VOS RÉFÉRENTIELS RSE
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: 'rgba(27,24,48,0.4)' }}>EcoVadis · B Corp · ISO · CSRD</span>
              </div>
              <div style={{ position: 'relative', height: 120, borderRadius: 16, overflow: 'hidden' }}>
                <img
                  src="/images/team-office-1.webp"
                  alt="Photo équipe entreprise"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div
              style={{
                alignSelf: 'center',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: '#1B1830',
                color: '#FAF4EC',
                padding: '11px 22px',
                borderRadius: 100,
                fontFamily: "'Bricolage Grotesque'",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: '0.04em',
                boxShadow: '0 16px 30px -14px rgba(27,24,48,0.6)',
                zIndex: 2,
              }}
            >
              <span style={{ width: 20, height: 20, position: 'relative', display: 'inline-block' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: '#FF5A36',
                    mixBlendMode: 'screen',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: '#5B3DF5',
                    mixBlendMode: 'screen',
                  }}
                />
              </span>
              ANALYSE
            </div>

            <div style={{ alignSelf: 'center', textAlign: 'center', marginTop: -14 }}>
              <AnimatedPercent
                target={92}
                style={{
                  fontFamily: "'Bricolage Grotesque'",
                  fontWeight: 800,
                  fontSize: 32,
                  color: '#5B3DF5',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              />
              <div style={{ fontSize: 12.5, color: 'rgba(27,24,48,0.55)', marginTop: 4 }}>d'alignement stratégique</div>
            </div>

            <div
              style={{
                background: '#FFFDF9',
                border: '1px solid rgba(27,24,48,0.1)',
                borderRadius: 26,
                padding: 18,
                boxShadow: '0 30px 60px -30px rgba(91,61,245,0.4)',
                transform: 'rotate(2deg)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 13, color: '#5B3DF5' }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#5B3DF5' }} />
                  PROJET RECOMMANDÉ
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: 'rgba(27,24,48,0.4)' }}>Impact mesuré</span>
              </div>
              <div style={{ position: 'relative', height: 120, borderRadius: 16, overflow: 'hidden' }}>
                <img
                  src="/images/team-association.webp"
                  alt="Photo action associative"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div
        className="statgrid"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1240,
          margin: '56px auto 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 1,
          background: 'rgba(27,24,48,0.1)',
          border: '1px solid rgba(27,24,48,0.1)',
          borderRadius: 22,
          overflow: 'hidden',
        }}
      >
        <StatCell num="0 €" txt="analyse de vos référentiels RSE, sans engagement" color="#E8431F" />
        <StatCell num="48 h" txt="pour recevoir un premier portefeuille de projets priorisé" color="#5B3DF5" />
        <StatCell num="100%" txt="des décisions de mécénat adossées à vos référentiels RSE" color="#1B1830" />
      </div>
    </header>
  );
}

function StatCell({ num, txt, color }: { num: string; txt: string; color: string }) {
  return (
    <div style={{ background: '#FFFDF9', padding: '26px 28px' }}>
      <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 38, color, letterSpacing: '-0.02em' }}>{num}</div>
      <div style={{ fontSize: 14, color: 'rgba(27,24,48,0.7)', marginTop: 4 }}>{txt}</div>
    </div>
  );
}

/* ============ POURQUOI ============ */
function PourquoiSection() {
  return (
    <section
      id="pourquoi"
      style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)', background: '#1B1830', color: '#FAF4EC' }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC24B' }}>
          Pourquoi repenser le mécénat
        </span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque'",
            fontWeight: 700,
            fontSize: 'clamp(28px,4.4vw,48px)',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            margin: '20px 0 0',
            textWrap: 'balance',
          }}
        >
          Vous mesurez déjà vos engagements. Vous pouvez désormais les <span style={{ color: '#FF7A5C' }}>transformer en décisions.</span>
        </h2>
        <p
          style={{
            fontSize: 'clamp(16px,1.9vw,19px)',
            lineHeight: 1.6,
            maxWidth: 700,
            margin: '26px auto 0',
            color: 'rgba(250,244,236,0.72)',
          }}
        >
          Normes, labels et certifications : votre entreprise dispose d'un patrimoine de données considérable.
          Aujourd'hui, il sert à rendre compte de vos engagements. Il peut désormais orienter chacune de vos décisions
          de mécénat.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 34 }}>
          <Pill>EcoVadis</Pill>
          <Pill>B Corp</Pill>
          <Pill>Breeam</Pill>
          <Pill>Well Building Institute</Pill>
          <Pill>Imprim'Vert</Pill>
          <Pill>Wired Certified</Pill>
          <Pill highlight highlightBg="#FFC24B" highlightColor="#1B1830">
            → Des décisions 🤝
          </Pill>
        </div>
      </div>
    </section>
  );
}

function Pill({
  children,
  highlight,
  highlightBg,
  highlightColor,
}: {
  children: React.ReactNode;
  highlight?: boolean;
  highlightBg?: string;
  highlightColor?: string;
}) {
  return (
    <span
      style={{
        background: highlight ? highlightBg : 'rgba(250,244,236,0.08)',
        border: highlight ? 'none' : '1px solid rgba(250,244,236,0.16)',
        color: highlight ? highlightColor : undefined,
        padding: '10px 20px',
        borderRadius: 100,
        fontWeight: highlight ? 700 : 600,
        fontSize: 15,
      }}
    >
      {children}
    </span>
  );
}

/* ============ MOTEUR DE DÉCISION (6-step flow) ============ */
interface FlowStepData {
  num: string;
  title: string;
  text: string;
  borderColor?: string;
  textColor?: string;
  shadow?: string;
  dark?: boolean;
}

const FLOW_STEPS: FlowStepData[] = [
  { num: '01', title: 'Référentiel', text: 'Nous partons de vos référentiels, notations et politiques RSE existants.', borderColor: '#FF5A36', textColor: '#FF5A36', shadow: 'rgba(255,90,54,0.55)' },
  { num: '02', title: 'Analyse', text: 'Notre moteur identifie vos axes prioritaires et vos critères de décision.', borderColor: '#FF5A36', textColor: '#FF5A36', shadow: 'rgba(255,90,54,0.55)' },
  { num: '03', title: 'Priorisation', text: 'Chaque opportunité est notée selon son alignement avec votre stratégie RSE.', borderColor: '#E8431F', textColor: '#E8431F', shadow: 'rgba(232,67,31,0.5)' },
  { num: '04', title: 'Sélection', text: "Vous recevez un portefeuille de projets associatifs cohérents et renforcés sur leur démarche RSE.", borderColor: '#5B3DF5', textColor: '#5B3DF5', shadow: 'rgba(91,61,245,0.5)' },
  { num: '05', title: 'Financement', text: "Vous mutualisez le financement avec d'autres entreprises engagées, en gardant votre autonomie.", borderColor: '#5B3DF5', textColor: '#5B3DF5', shadow: 'rgba(91,61,245,0.5)' },
  { num: '06', title: 'Mesure', text: "Vous suivez l'impact obtenu via leurs indicateurs d'impact (KPIs).", dark: true },
];

function MoteurSection() {
  return (
    <section id="moteur" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ maxWidth: 760 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8431F' }}>
            Notre moteur de décision
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 700,
              fontSize: 'clamp(30px,4.6vw,52px)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              margin: '18px 0 0',
              textWrap: 'balance',
            }}
          >
            Vos référentiels RSE deviennent des recommandations.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, marginTop: 22, color: 'rgba(27,24,48,0.72)', maxWidth: 640 }}>
            AlliancEssor analyse vos données d'engagement et les traduit en un portefeuille de projets priorisé, aligné
            avec votre stratégie. Le mécénat n'est plus une intuition, c'est une décision documentée.
          </p>
        </div>

        <div className="flowwrap" style={{ position: 'relative', marginTop: 64 }}>
          <div
            aria-hidden="true"
            className="flowline"
            style={{
              position: 'absolute',
              top: 29,
              left: '8.3%',
              right: '8.3%',
              height: 2,
              background: 'linear-gradient(90deg,#FF5A36 0%,#E8431F 45%,#5B3DF5 100%)',
              opacity: 0.35,
            }}
          />
          <div className="flowgrid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr', gap: 28 }}>
            {FLOW_STEPS.map((step) => (
              <FlowStep key={step.num} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({ num, title, text, borderColor, textColor, shadow, dark }: FlowStepData) {
  const nodeStyle = dark
    ? { background: '#1B1830', border: '2px solid #1B1830', boxShadow: '0 10px 24px -12px rgba(27,24,48,0.55)', color: '#FFC24B' }
    : { background: '#FFFDF9', border: `2px solid ${borderColor}`, boxShadow: `0 10px 24px -12px ${shadow}`, color: textColor };

  return (
    <div className="flowstep" style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 18, alignItems: 'start' }}>
      <span
        className="flownode"
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          fontFamily: "'Bricolage Grotesque'",
          fontWeight: 800,
          fontSize: 20,
          ...nodeStyle,
        }}
      >
        {num}
      </span>
      <div className="flowtxt">
        <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 20, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.5, color: 'rgba(27,24,48,0.68)' }}>{text}</p>
      </div>
    </div>
  );
}

/* ============ PORTEFEUILLE DE PROJETS ============ */
function PortefeuilleSection() {
  return (
    <section id="portefeuille" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)', background: '#F3EBE0' }}>
      <div className="assogrid" style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8431F' }}>
            Un portefeuille de projets
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 700,
              fontSize: 'clamp(28px,4.2vw,46px)',
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              margin: '18px 0 0',
              textWrap: 'balance',
            }}
          >
            Non pas un projet. Un portefeuille priorisé.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.8vw,18px)', lineHeight: 1.6, marginTop: 20, color: 'rgba(27,24,48,0.72)' }}>
            AlliancEssor ne vous présente pas une association à soutenir. Il vous présente une allocation&nbsp;: plusieurs
            projets, classés par compatibilité avec votre stratégie RSE. À vous de décider où va votre impact.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            <Bullet bg="#FFE1D4" color="#E8431F">
              Un <strong>score de compatibilité</strong> pour chaque projet, adossé à vos référentiels.
            </Bullet>
            <Bullet bg="#FFE1D4" color="#E8431F">
              Une <strong>allocation lisible</strong>, arbitrable et défendable en interne.
            </Bullet>
            <Bullet bg="#FFE1D4" color="#E8431F">
              Un portefeuille <strong>réévalué en continu</strong> à mesure que votre stratégie évolue.
            </Bullet>
          </div>
        </div>
        <PortfolioCard />
      </div>
    </section>
  );
}

function Bullet({ bg, color, children }: { bg: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span
        style={{
          flex: 'none',
          marginTop: 3,
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: bg,
          color,
          display: 'grid',
          placeItems: 'center',
          fontWeight: 800,
          fontSize: 13,
        }}
      >
        ✓
      </span>
      <span style={{ fontSize: 15.5, lineHeight: 1.5, color: 'rgba(27,24,48,0.85)' }}>{children}</span>
    </div>
  );
}

const PORTFOLIO_ROWS = [
  { label: "Insertion par l'emploi — Projet A", pct: 96, pctColor: '#E8431F', barColor: '#FF5A36' },
  { label: 'Transition écologique — Projet B', pct: 91, pctColor: '#7A5CF0', barColor: '#5B3DF5' },
  { label: 'Éducation & jeunesse — Projet C', pct: 88, pctColor: '#C9A227', barColor: '#FFC24B' },
];

function PortfolioCard() {
  return (
    <div style={{ background: '#FFFDF9', border: '1px solid rgba(27,24,48,0.1)', borderRadius: 28, padding: 'clamp(22px,3vw,32px)', boxShadow: '0 40px 70px -44px rgba(27,24,48,0.4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>Recommandations · T2 2026</span>
        <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(27,24,48,0.45)' }}>Priorisé</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {PORTFOLIO_ROWS.map((row) => (
          <div key={row.label}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontWeight: 600, fontSize: 15.5 }}>{row.label}</span>
              <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 17, color: row.pctColor }}>{row.pct}%</span>
            </div>
            <div style={{ height: 9, borderRadius: 100, background: 'rgba(27,24,48,0.08)', overflow: 'hidden' }}>
              <div style={{ width: `${row.pct}%`, height: '100%', borderRadius: 100, background: row.barColor }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(27,24,48,0.1)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, color: 'rgba(27,24,48,0.6)' }}>
        <span style={{ width: 18, height: 14, position: 'relative', display: 'inline-block', flex: 'none' }}>
          <span style={{ position: 'absolute', left: 0, top: 0, width: 14, height: 14, borderRadius: '50%', background: '#FF5A36', mixBlendMode: 'multiply' }} />
          <span style={{ position: 'absolute', left: 4, top: 0, width: 14, height: 14, borderRadius: '50%', background: '#5B3DF5', mixBlendMode: 'multiply' }} />
        </span>
        Compatibilité calculée à partir de vos référentiels RSE.
      </div>
    </div>
  );
}

/* ============ MUTUALISATION ============ */
const MUTUAL_CARDS = [
  { title: 'Autonomie préservée', text: 'Aucune mise en relation entre entreprises. Chacune décide seule de son allocation.' },
  { title: 'Financement collectif', text: 'Plusieurs financeurs alignés sur un même projet, pour une capacité démultipliée.' },
  { title: "Projets à l'échelle", text: 'Des projets plus ambitieux deviennent finançables et donc réalisables.' },
];

function MutualisationSection() {
  return (
    <section id="mutualisation" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)', background: '#1B1830', color: '#FAF4EC', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: -90, left: -70, width: 320, height: 320, background: 'rgba(255,90,54,0.16)', borderRadius: '50%', filter: 'blur(30px)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: -110, right: -60, width: 300, height: 300, background: 'rgba(91,61,245,0.2)', borderRadius: '50%', filter: 'blur(30px)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC24B' }}>
          Mutualisation
        </span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque'",
            fontWeight: 700,
            fontSize: 'clamp(30px,4.8vw,54px)',
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
            margin: '20px 0 0',
            textWrap: 'balance',
          }}
        >
          Seul, vous financez un projet.
          <br />
          <span style={{ color: '#FF7A5C' }}>À plusieurs, vous en changez l'échelle.</span>
        </h2>
        <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, maxWidth: 680, margin: '24px auto 0', color: 'rgba(250,244,236,0.72)' }}>
          La mutualisation n'est pas une fonctionnalité&nbsp;: c'est notre innovation. Plusieurs entreprises, chacune
          autonome dans sa décision, financent ensemble un même projet lorsqu'il sert la stratégie de chacune. Vous
          gardez la main&nbsp;: le projet gagne en ambition.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18, marginTop: 44, textAlign: 'left' }}>
          {MUTUAL_CARDS.map((card) => (
            <div key={card.title} style={{ background: 'rgba(250,244,236,0.06)', border: '1px solid rgba(250,244,236,0.14)', borderRadius: 22, padding: 26 }}>
              <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 19, marginBottom: 8 }}>{card.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(250,244,236,0.7)' }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CYCLE / PROGRÈS CONTINU ============ */
const CYCLE_STEPS = [
  { num: '01', color: '#FF5A36', title: 'Évaluer', text: 'Partir de vos référentiels RSE.' },
  { num: '02', color: '#E8431F', title: 'Décider', text: 'Arbitrer votre portefeuille priorisé.' },
  { num: '03', color: '#7A5CF0', title: 'Financer', text: "Mutualiser avec d'autres entreprises." },
  { num: '04', color: '#5B3DF5', title: 'Mesurer', text: "Suivre l'impact obtenu." },
  { num: '05', color: '#7A5CF0', title: 'Améliorer', text: 'Affiner vos critères, recommencer.' },
];

function CycleSection() {
  return (
    <section id="cycle" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ maxWidth: 720 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5B3DF5' }}>
            Une stratégie de progrès continu
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 700,
              fontSize: 'clamp(30px,4.6vw,52px)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              margin: '18px 0 0',
              textWrap: 'balance',
            }}
          >
            Le mécénat devient un cycle, pas un événement.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, marginTop: 22, color: 'rgba(27,24,48,0.72)', maxWidth: 640 }}>
            Chaque décision nourrit la suivante. La mesure d'impact devient la matière première de vos prochains
            arbitrages, votre stratégie de mécénat s'améliore à chaque tour.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 44, alignItems: 'stretch' }}>
          {CYCLE_STEPS.map((step) => (
            <div key={step.num} className="cyclecard" style={{ flex: 1, minWidth: 150, background: '#FFFDF9', border: '1px solid rgba(27,24,48,0.1)', borderRadius: 20, padding: '24px 22px' }}>
              <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 14, color: step.color }}>{step.num}</div>
              <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 19, marginTop: 8 }}>{step.title}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.5, color: 'rgba(27,24,48,0.65)', marginTop: 6 }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ BENEFITS ============ */
const BENEFITS = [
  { title: 'Des décisions défendables', text: "Chaque euro alloué s'appuie sur vos référentiels RSE. Vos choix se justifient en interne comme auprès de vos parties prenantes." },
  { title: 'Une capacité démultipliée', text: 'La mutualisation vous donne accès à des projets plus ambitieux, sans augmenter votre effort de financement.' },
  { title: 'Un impact mesuré', text: "Indicateurs de suivi et rapports d'impact, avec les avantages fiscaux associés au mécénat." },
];

function BenefitsSection() {
  return (
    <section style={{ padding: 'clamp(50px,7vw,90px) clamp(20px,5vw,64px)', background: '#F3EBE0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 700,
              fontSize: 'clamp(28px,4vw,44px)',
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              maxWidth: 640,
              textWrap: 'balance',
            }}
          >
            Quels bénéfices allez-vous obtenir&nbsp;?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 36 }}>
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="whycard-ent"
              style={{
                background: '#FFFDF9',
                border: '1px solid rgba(27,24,48,0.1)',
                borderRadius: 24,
                padding: 30,
                borderTop: '4px solid #FF5A36',
              }}
            >
              <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(27,24,48,0.72)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROFIL : ENTREPRISES ============ */
function EntreprisesSection() {
  return (
    <section id="entreprises" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div className="assogrid" style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 40px 70px -40px rgba(232,67,31,0.45)' }}>
            <img src="/images/hands-tree.jpg" alt="Photo équipe entreprise" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: -22,
              left: -18,
              background: '#FF5A36',
              color: '#FFFDF9',
              padding: '18px 24px',
              borderRadius: 20,
              maxWidth: 230,
              boxShadow: '0 20px 40px -18px rgba(232,67,31,0.6)',
            }}
          >
            <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 15, letterSpacing: '0.04em' }}>ESPACE ENTREPRISE</div>
            <div style={{ fontSize: 13.5, marginTop: 5, color: 'rgba(255,253,249,0.9)' }}>Votre engagement RSE, enfin tangible et mesurable.</div>
          </div>
        </div>
        <div>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8431F' }}>
            Pour les entreprises
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 700,
              fontSize: 'clamp(28px,4.2vw,46px)',
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              margin: '18px 0 0',
              textWrap: 'balance',
            }}
          >
            le 1er moteur de décision pour votre mécénat.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.8vw,18px)', lineHeight: 1.6, marginTop: 20, color: 'rgba(27,24,48,0.72)' }}>
            À partir de votre score de compatibilité RSE, AlliancEssor priorise les projets associatifs les plus alignés
            avec votre stratégie, mutualise leur financement avec d'autres entreprises engagées et vous donne les
            moyens d'en mesurer l'impact.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            <Bullet bg="#FFE1D4" color="#E8431F">
              <strong>Identifier les bons projets</strong> grâce au scoring de compatibilité RSE.
            </Bullet>
            <Bullet bg="#FFE1D4" color="#E8431F">
              <strong>Mutualiser le financement</strong> avec d'autres entreprises pour changer d'échelle.
            </Bullet>
            <Bullet bg="#FFE1D4" color="#E8431F">
              <strong>Valoriser la démarche</strong> auprès de vos collaborateurs, clients et partenaires avec les
              avantages fiscaux associés.
            </Bullet>
          </div>
          <a
            href="/entreprises/"
            className="btn-lift"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              marginTop: 30,
              background: '#FF5A36',
              color: '#FFFDF9',
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 26px',
              borderRadius: 100,
              boxShadow: '0 12px 28px -12px rgba(232,67,31,0.6)',
            }}
          >
            Découvrir l'espace entreprises →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ CONFIANCE ============ */
const TRUST_CARDS = [
  { color: '#FF5A36', title: 'Rigueur', text: 'Des recommandations adossées à vos référentiels, pas à des intuitions.' },
  { color: '#FFC24B', title: 'Transparence', text: 'Une méthode de scoring explicite : vous savez pourquoi un projet vous est recommandé.' },
  { color: '#5B3DF5', title: 'Autonomie', text: 'La décision reste la vôtre. Nous éclairons vos choix, nous ne les remplaçons pas.' },
];

function ConfianceSection() {
  return (
    <section id="confiance" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)', background: '#1B1830', color: '#FAF4EC', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -80, width: 340, height: 340, background: 'rgba(255,90,54,0.16)', borderRadius: '50%', filter: 'blur(30px)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC24B' }}>Pourquoi avoir confiance</span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque'",
            fontWeight: 700,
            fontSize: 'clamp(30px,5vw,58px)',
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
            margin: '20px 0 0',
            textWrap: 'balance',
          }}
        >
          Une technologie d'aide à la décision, <span style={{ color: '#FF7A5C' }}>pas une simple intermédiation.</span>
        </h2>
        <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, maxWidth: 700, margin: '24px auto 0', color: 'rgba(250,244,236,0.72)' }}>
          AlliancEssor s'appuie sur des référentiels reconnus et une méthode transparente. Vous gardez la main sur
          chaque décision, nous fournissons l'analyse et la priorisation. Après le financement, nous assurons
          également le suivi et la mesure de l'impact afin de transformer vos engagements en résultats concrets et
          mesurables.
        </p>
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '44px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
        {TRUST_CARDS.map((card) => (
          <div key={card.title} style={{ background: 'rgba(250,244,236,0.06)', border: '1px solid rgba(250,244,236,0.14)', borderRadius: 22, padding: 28 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: card.color, marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{card.title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(250,244,236,0.7)' }}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ FINAL CTA ============ */
function FinalCta() {
  return (
    <section id="rdv" style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', background: '#FF5A36', borderRadius: 36, padding: 'clamp(40px,6vw,72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -90, left: -60, width: 280, height: 280, background: 'rgba(255,194,75,0.5)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: -70, right: -40, width: 200, height: 200, background: 'rgba(91,61,245,0.35)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1, color: '#FFFDF9' }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,253,249,0.85)' }}>
            Votre démarche RSE mérite un impact à sa hauteur
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 800,
              fontSize: 'clamp(32px,5.4vw,60px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: '18px auto 0',
              maxWidth: 720,
              textWrap: 'balance',
            }}
          >
            Ne financez plus seul. Financez mieux, ensemble.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.55, maxWidth: 560, margin: '22px auto 0', color: 'rgba(255,253,249,0.9)' }}>
            Prenons 30 minutes pour analyser vos référentiels RSE et construire votre premier portefeuille de projets
            priorisé.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 34 }}>
            <a
              href="/rendez-vous/"
              className="btn-lift"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B1830', color: '#FAF4EC', fontWeight: 700, fontSize: 16, padding: '16px 32px', borderRadius: 100 }}
            >
              Prendre rendez-vous →
            </a>
            <a
              href="/rendez-vous/"
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
              Devenir partenaire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer style={{ background: '#1B1830', color: '#FAF4EC', padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,64px) 40px' }}>
      <div className="footgrid" style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
        <div>
          <Logo blend="screen" essorColor="#FF7A5C" textColor="#FAF4EC" />
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(250,244,236,0.6)', marginTop: 16, maxWidth: 300 }}>
            Le 1er moteur de décision pour le mécénat d'entreprise
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 28 }}>
          <FooterColumn
            title="L'agence"
            links={[
              { label: 'Accueil', href: '#top' },
              { label: 'Qui sommes-nous', href: '#confiance' },
              { label: 'Le moteur de décision', href: '#moteur' },
              { label: 'Contact', href: '/rendez-vous/' },
            ]}
          />
          <FooterColumn
            title="Espaces"
            links={[
              { label: 'Espace entreprises', href: '/entreprises/' },
              { label: 'Espace association', href: '/associations/' },
              { label: 'Devenir partenaire', href: '/rendez-vous/' },
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

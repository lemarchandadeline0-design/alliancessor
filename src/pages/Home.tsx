import { useState } from 'react';
import Logo from '../components/Logo';
import AnimatedPercent from '../components/AnimatedPercent';

type Audience = 'ent' | 'asso';

interface HomeProps {
  defaultAudience?: Audience;
  showBlobs?: boolean;
}

const CHECK_ICON = '✓';

export default function Home({ defaultAudience = 'ent', showBlobs = true }: HomeProps) {
  const [audience, setAudience] = useState<Audience>(defaultAudience);
  const isEnt = audience === 'ent';
  const isAsso = !isEnt;

  const indicatorBg = isEnt ? '#FF5A36' : '#5B3DF5';
  const indicatorX = isEnt ? '0%' : '100%';
  const ctaBg = isEnt ? '#FF5A36' : '#5B3DF5';
  const ctaGlow = isEnt ? 'rgba(255,90,54,0.6)' : 'rgba(91,61,245,0.6)';
  const entColor = isEnt ? '#FFFDF9' : '#1B1830';
  const assoColor = isEnt ? '#1B1830' : '#FFFDF9';

  const stat1Num = isEnt ? '0 €' : '6 mois';
  const stat1Txt = isEnt
    ? 'analyse de votre profil RSE offerte, sans engagement'
    : "durée d'accompagnement minimum, orientée résultats concrets";
  const stat2Num = '−80%';
  const stat2Txt = isEnt
    ? 'de temps passé à chercher des associations partenaires'
    : 'de temps passé à chercher des financements privés';
  const stat3Num = '100%';
  const stat3Txt = isEnt
    ? "des projets accompagnés font l'objet d'un reporting d'impact détaillé"
    : 'de vos initiatives bénéficient d\'un accompagnement pour améliorer leur impact environnemental.';

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Nav />
      <Hero
        showBlobs={showBlobs}
        isEnt={isEnt}
        isAsso={isAsso}
        indicatorBg={indicatorBg}
        indicatorX={indicatorX}
        entColor={entColor}
        assoColor={assoColor}
        ctaBg={ctaBg}
        ctaGlow={ctaGlow}
        onSetEnt={() => setAudience('ent')}
        onSetAsso={() => setAudience('asso')}
        stat1Num={stat1Num}
        stat1Txt={stat1Txt}
        stat2Num={stat2Num}
        stat2Txt={stat2Txt}
        stat3Num={stat3Num}
        stat3Txt={stat3Txt}
      />
      <ConceptSection isEnt={isEnt} />
      <SolutionSection indicatorBg={indicatorBg} />
      <BenefitsSection isEnt={isEnt} />
      {isEnt ? <EntreprisesSection /> : <AssociationsSection />}
      <AgenceSection />
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
        <a href="#solution" style={{ color: '#1B1830' }}>
          Le concept
        </a>
        <a href="/entreprises" style={{ color: '#1B1830' }}>
          Entreprises
        </a>
        <a href="/associations" style={{ color: '#1B1830' }}>
          Associations
        </a>
        <a href="#agence" style={{ color: '#1B1830' }}>
          Qui sommes-nous
        </a>
      </div>
      <a
        href="/rendez-vous"
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
interface HeroProps {
  showBlobs: boolean;
  isEnt: boolean;
  isAsso: boolean;
  indicatorBg: string;
  indicatorX: string;
  entColor: string;
  assoColor: string;
  ctaBg: string;
  ctaGlow: string;
  onSetEnt: () => void;
  onSetAsso: () => void;
  stat1Num: string;
  stat1Txt: string;
  stat2Num: string;
  stat2Txt: string;
  stat3Num: string;
  stat3Txt: string;
}

function Hero({
  showBlobs,
  isEnt,
  isAsso,
  indicatorBg,
  indicatorX,
  entColor,
  assoColor,
  ctaBg,
  ctaGlow,
  onSetEnt,
  onSetAsso,
  stat1Num,
  stat1Txt,
  stat2Num,
  stat2Txt,
  stat3Num,
  stat3Txt,
}: HeroProps) {
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
            Premier matching de co-mécénat durable
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
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(27,24,48,0.5)',
              }}
            >
              Je suis…
            </span>
            <div
              style={{
                position: 'relative',
                display: 'inline-flex',
                marginTop: 10,
                marginLeft: 12,
                background: '#FFFDF9',
                border: '1px solid rgba(27,24,48,0.14)',
                borderRadius: 100,
                padding: 5,
                verticalAlign: 'middle',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 5,
                  left: 5,
                  bottom: 5,
                  width: 'calc(50% - 5px)',
                  borderRadius: 100,
                  background: indicatorBg,
                  transition: 'transform .35s cubic-bezier(.34,1.56,.64,1), background .35s ease',
                  transform: `translateX(${indicatorX})`,
                }}
              />
              <button
                onClick={onSetEnt}
                className="audience-toggle-btn"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 14.5,
                  padding: '9px 22px',
                  borderRadius: 100,
                  color: entColor,
                }}
              >
                Une entreprise
              </button>
              <button
                onClick={onSetAsso}
                className="audience-toggle-btn"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 14.5,
                  padding: '9px 22px',
                  borderRadius: 100,
                  color: assoColor,
                }}
              >
                Une association
              </button>
            </div>
          </div>

          {isEnt && (
            <p style={{ fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.55, maxWidth: 540, color: 'rgba(27,24,48,0.78)' }}>
              Transformez vos engagements RSE en impact concret. Rejoignez d'autres entreprises engagées pour{' '}
              <strong style={{ color: '#1B1830' }}>co-financer</strong> des projets associatifs alignés avec vos valeurs — et
              bénéficiez des avantages fiscaux associés.
            </p>
          )}
          {isAsso && (
            <p style={{ fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.55, maxWidth: 540, color: 'rgba(27,24,48,0.78)' }}>
              Votre cause inspire. Donnons-lui des moyens durables. Nous connectons votre association à des{' '}
              <strong style={{ color: '#1B1830' }}>entreprises privées engagées</strong> et structurons votre financement,
              avec un assistant fundraising mutualisé à temps partagé.
            </p>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <a
              href="/rendez-vous"
              className="btn-lift"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: ctaBg,
                color: '#FFFDF9',
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 28px',
                borderRadius: 100,
                boxShadow: `0 12px 28px -10px ${ctaGlow}`,
              }}
            >
              Prendre rendez-vous →
            </a>
            <a
              href="#concept"
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
              Découvrir le concept
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
                  ENTREPRISE ENGAGÉE
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: 'rgba(27,24,48,0.4)' }}>Normes · Labels · RSE</span>
              </div>
              <div style={{ position: 'relative', height: 120, borderRadius: 16, overflow: 'hidden' }}>
                <img
                  src="/images/28.png"
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
              MATCH
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
              <div style={{ fontSize: 12.5, color: 'rgba(27,24,48,0.55)', marginTop: 4 }}>de compatibilité RSE</div>
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
                  ASSOCIATION ENGAGÉE
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: 'rgba(27,24,48,0.4)' }}>Impact terrain</span>
              </div>
              <div style={{ position: 'relative', height: 120, borderRadius: 16, overflow: 'hidden' }}>
                <img
                  src="/images/22.png"
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
        <StatCell num={stat1Num} txt={stat1Txt} color="#E8431F" />
        <StatCell num={stat2Num} txt={stat2Txt} color="#5B3DF5" />
        <StatCell num={stat3Num} txt={stat3Txt} color="#1B1830" />
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

/* ============ PROBLEM / CONCEPT ============ */
function ConceptSection({ isEnt }: { isEnt: boolean }) {
  return (
    <section
      id="concept"
      style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)', background: '#1B1830', color: '#FAF4EC' }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        {isEnt ? (
          <>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC24B' }}>
              Votre entreprise est engagée. Et après ?
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
              Comment transformer concrètement ces engagements en impact{' '}
              <span style={{ color: '#FF7A5C' }}>mesurable sur le terrain</span> ?
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px,1.9vw,19px)',
                lineHeight: 1.6,
                maxWidth: 680,
                margin: '26px auto 0',
                color: 'rgba(250,244,236,0.72)',
              }}
            >
              Aujourd'hui, beaucoup d'entreprises soutiennent des associations. Mais elles agissent souvent seules, avec une
              capacité de financement limitée et une visibilité partielle sur l'impact généré.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 34 }}>
              <Pill>Normes</Pill>
              <Pill>Labels</Pill>
              <Pill>Certifications</Pill>
              <Pill highlight highlightBg="#FFC24B" highlightColor="#1B1830">
                → Impact réel
              </Pill>
            </div>
          </>
        ) : (
          <>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC24B' }}>
              Votre cause a de l'impact. Et les moyens ?
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
              Comment sécuriser un financement <span style={{ color: '#9D8BFF' }}>durable, à la hauteur de votre terrain</span> ?
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px,1.9vw,19px)',
                lineHeight: 1.6,
                maxWidth: 680,
                margin: '26px auto 0',
                color: 'rgba(250,244,236,0.72)',
              }}
            >
              Trop d'associations à fort impact avancent au rythme des subventions ponctuelles et des dons dispersés. Résultat
              : une énergie considérable absorbée par la recherche de fonds, au détriment de l'action sur le terrain.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 34 }}>
              <Pill>Subventions</Pill>
              <Pill>Dons ponctuels</Pill>
              <Pill>Appels à projets</Pill>
              <Pill highlight highlightBg="#5B3DF5" highlightColor="#FAF4EC">
                → Co-mécénat durable
              </Pill>
            </div>
          </>
        )}
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

/* ============ SOLUTION / 4 STEPS ============ */
const STEPS = [
  { num: '01', title: 'Identifier', color: '#FF5A36', text: "Nous analysons gratuitement vos engagements, priorités et valeurs pour cerner les projets associatifs les plus alignés." },
  { num: '02', title: 'Matcher', color: '#FF5A36', text: "Nous vous mettons en relation avec des projets accompagnés par AlliancEssor dans la mesure de leur impact." },
  { num: '03', title: 'Mutualiser', color: '#5B3DF5', text: "Plusieurs entreprises réunissent leurs financements pour soutenir des projets plus ambitieux, capables de changer d'échelle." },
  { num: '04', title: 'Mesurer', color: '#5B3DF5', text: "Indicateurs de suivi, rapports d'impact et outils de communication pour valoriser l'impact des projets financés." },
];

function SolutionSection({ indicatorBg }: { indicatorBg: string }) {
  return (
    <section id="solution" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ maxWidth: 720 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: indicatorBg }}>
            Notre solution
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
            Un matching entre entreprises & associations, inspiré de l'investissement.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, marginTop: 22, color: 'rgba(27,24,48,0.72)', maxWidth: 620 }}>
            Les investisseurs mutualisent leurs ressources pour financer les entreprises prometteuses. Pourquoi les
            entreprises engagées ne feraient-elles pas de même pour les associations les plus impactantes ?
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 20, marginTop: 48 }}>
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="solcard"
              style={{ background: '#FFFDF9', border: '1px solid rgba(27,24,48,0.1)', borderRadius: 24, padding: 28, position: 'relative', overflow: 'hidden' }}
            >
              <div className="solnum" style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 15, color: step.color, letterSpacing: '0.06em' }}>
                {step.num}
              </div>
              <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 22, margin: '14px 0 8px', letterSpacing: '-0.01em' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(27,24,48,0.7)' }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ BENEFITS (audience switch) ============ */
const BENEFITS_ENT = [
  { title: 'Financer plus ambitieux', text: "En mutualisant les ressources de plusieurs entreprises, vous contribuez à des projets capables de changer d'échelle." },
  { title: 'Cohérence RSE renforcée', text: 'Chaque projet soutenu est sélectionné selon son alignement avec vos engagements et vos valeurs.' },
  { title: 'Un impact mesuré', text: 'Indicateurs de suivi, rapports d\'impact et avantages fiscaux : votre mécénat, là où il compte le plus.' },
];

const BENEFITS_ASSO = [
  { title: 'Assistant fundraising mutualisé', text: "Une équipe à temps partagé qui audite l'existant et prospecte les entreprises prêtes à s'engager sur votre projet." },
  { title: 'Partenaires alignés', text: 'Une connexion à des partenaires privés qui partagent vos valeurs, autour de soutenances de projets.' },
  { title: 'Projets restructurés', text: "Intégration de l'éco-responsabilité et de critères RSE pour rendre vos projets durables et attractifs." },
];

function BenefitsSection({ isEnt }: { isEnt: boolean }) {
  const items = isEnt ? BENEFITS_ENT : BENEFITS_ASSO;
  const cardClass = isEnt ? 'whycard-ent' : 'whycard-asso';
  const accent = isEnt ? '#FF5A36' : '#5B3DF5';

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
            Pourquoi vous joindre à notre aventure&nbsp;?
          </h2>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(27,24,48,0.55)' }}>Affichage selon votre profil ↑</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 36 }}>
          {items.map((item) => (
            <div
              key={item.title}
              className={cardClass}
              style={{
                background: '#FFFDF9',
                border: '1px solid rgba(27,24,48,0.1)',
                borderRadius: 24,
                padding: 30,
                borderTop: `4px solid ${accent}`,
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
    <>
      <section id="entreprises" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
        <div className="assogrid" style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 40px 70px -40px rgba(232,67,31,0.45)' }}>
              <img src="/images/28.png" alt="Photo équipe entreprise" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              Transformez l'engagement RSE en impact concret.
            </h2>
            <p style={{ fontSize: 'clamp(16px,1.8vw,18px)', lineHeight: 1.6, marginTop: 20, color: 'rgba(27,24,48,0.72)' }}>
              Grâce à votre score de compatibilité RSE, identifiez les projets associatifs les plus alignés avec vos valeurs,
              mutualisez le financement avec d'autres entreprises engagées et pilotez un impact que vous pouvez mesurer.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
              <Checklist bg="#FFE1D4" color="#E8431F" strong="Identifier les bons projets" rest="grâce au scoring de compatibilité RSE." />
              <Checklist bg="#FFE1D4" color="#E8431F" strong="Mutualiser le financement" rest="avec d'autres entreprises pour changer d'échelle." />
              <Checklist bg="#FFE1D4" color="#E8431F" strong="Valoriser la démarche" rest="auprès de vos collaborateurs, clients et partenaires — avec les avantages fiscaux associés." />
            </div>
            <a
              href="/entreprises"
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
    </>
  );
}

/* ============ PROFIL : ASSOCIATIONS ============ */
function AssociationsSection() {
  return (
    <section id="associations" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div className="assogrid" style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 40px 70px -40px rgba(91,61,245,0.5)' }}>
            <img src="/images/4.png" alt="Photo terrain / association" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: -22,
              left: -18,
              background: '#5B3DF5',
              color: '#FAF4EC',
              padding: '18px 24px',
              borderRadius: 20,
              maxWidth: 230,
              boxShadow: '0 20px 40px -18px rgba(91,61,245,0.7)',
            }}
          >
            <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 15, letterSpacing: '0.04em' }}>ESPACE ASSOCIATION</div>
            <div style={{ fontSize: 13.5, marginTop: 5, color: 'rgba(250,244,236,0.85)' }}>Votre cause inspire — donnons-lui des moyens durables.</div>
          </div>
        </div>
        <div>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5B3DF5' }}>
            Pour les associations
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
            Financement, impact social… et respect de la planète.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.8vw,18px)', lineHeight: 1.6, marginTop: 20, color: 'rgba(27,24,48,0.72)' }}>
            Trop souvent, la croissance des organisations à but non lucratif est freinée par le manque de financements. Nous
            ouvrons les portes du financement privé de manière stratégique, humaine et responsable.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            <Checklist bg="#EDE9FF" color="#5B3DF5" strong="Intégrer l'éco-responsabilité" rest="dans vos projets associatifs." />
            <Checklist bg="#EDE9FF" color="#5B3DF5" strong="Créer des synergies" rest="avec des entreprises privées engagées." />
            <Checklist
              bg="#EDE9FF"
              color="#5B3DF5"
              strong="Développer des collaborations durables"
              rest="un accompagnement 100% orienté résultats sur 6 mois minimum."
            />
          </div>
          <a
            href="/associations"
            className="btn-lift"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              marginTop: 30,
              background: '#5B3DF5',
              color: '#FAF4EC',
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 26px',
              borderRadius: 100,
              boxShadow: '0 12px 28px -12px rgba(91,61,245,0.7)',
            }}
          >
            Découvrir l'espace associations →
          </a>
        </div>
      </div>
    </section>
  );
}

function Checklist({ bg, color, strong, rest }: { bg: string; color: string; strong: string; rest: string }) {
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
        {CHECK_ICON}
      </span>
      <span style={{ fontSize: 15.5, lineHeight: 1.5, color: 'rgba(27,24,48,0.85)' }}>
        <strong>{strong}</strong> {rest}
      </span>
    </div>
  );
}

/* ============ AGENCE / VALEURS ============ */
const VALUES = [
  { color: '#FF5A36', title: 'Impact positif', text: 'Chaque action doit générer du sens.' },
  { color: '#FFC24B', title: 'Durabilité', text: 'Penser long terme, agir maintenant.' },
  { color: '#5B3DF5', title: 'Éthique', text: 'Toujours privilégier la cohérence et le respect des valeurs.' },
];

function AgenceSection() {
  return (
    <section id="agence" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)', background: '#1B1830', color: '#FAF4EC', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -80, width: 340, height: 340, background: 'rgba(255,90,54,0.16)', borderRadius: '50%', filter: 'blur(30px)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC24B' }}>Qui sommes-nous</span>
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
          Nous créons des ponts <span style={{ color: '#FF7A5C' }}>solides</span> entre organisations.
        </h2>
        <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, maxWidth: 680, margin: '24px auto 0', color: 'rgba(250,244,236,0.72)' }}>
          Un réseau d'agents commerciaux & RSE indépendants et expérimentés, dédiés à favoriser la transition vers une
          société plus responsable.
        </p>
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '44px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
        {VALUES.map((v) => (
          <div key={v.title} style={{ background: 'rgba(250,244,236,0.06)', border: '1px solid rgba(250,244,236,0.14)', borderRadius: 22, padding: 28 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: v.color, marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{v.title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(250,244,236,0.7)' }}>{v.text}</p>
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
            Prenons 30 minutes pour analyser gratuitement vos engagements et identifier vos premiers matchs.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 34 }}>
            <a
              href="/rendez-vous"
              className="btn-lift"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B1830', color: '#FAF4EC', fontWeight: 700, fontSize: 16, padding: '16px 32px', borderRadius: 100 }}
            >
              Prendre rendez-vous →
            </a>
            <a
              href="/rendez-vous"
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
            Activateurs d'engagement, catalyseurs de croissance durable entre entreprises & associations.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          <FooterColumn
            title="L'agence"
            links={[
              { label: 'Accueil', href: '#top' },
              { label: 'Qui sommes-nous', href: '#agence' },
              { label: 'Notre solution', href: '#solution' },
              { label: 'Système de marque', href: '/systeme-de-marque' },
            ]}
          />
          <FooterColumn
            title="Espaces"
            links={[
              { label: 'Espace entreprises', href: '/entreprises' },
              { label: 'Espace association', href: '/associations' },
              { label: 'Devenir partenaire', href: '/rendez-vous' },
            ]}
          />
          <FooterColumn
            title="Informations"
            links={[
              { label: 'Contact', href: '/rendez-vous' },
              { label: 'Mentions légales', href: '#top' },
              { label: "Modalités d'inscription", href: '#top' },
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

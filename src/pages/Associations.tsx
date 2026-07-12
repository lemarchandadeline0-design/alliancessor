import InnerNav from '../components/InnerNav';
import InnerFooter from '../components/InnerFooter';

export default function Associations() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <InnerNav active="associations" ctaBg="#5B3DF5" />
      <Hero />
      <Mission />
      <ThreeApproaches />
      <MutualizedService />
      <ConcreteActions />
      <WhyUs />
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
          top: -60,
          left: -40,
          width: 380,
          height: 380,
          background: '#E7E0FF',
          borderRadius: '63% 37% 41% 59% / 44% 62% 38% 56%',
          filter: 'blur(2px)',
          animation: 'floatyAsso 16s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1240, margin: '0 auto' }}>
        <a href="/" style={{ fontSize: 14, fontWeight: 600, color: 'rgba(27,24,48,0.55)' }}>
          ← Retour à l'accueil
        </a>
        <div className="heroasso" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center', marginTop: 16 }}>
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
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#5B3DF5' }} />
              Espace associations
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
              Votre cause inspire. Donnons-lui des <span style={{ color: '#5B3DF5' }}>moyens durables</span>.
            </h1>
            <p style={{ fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.55, maxWidth: 540, marginTop: 22, color: 'rgba(27,24,48,0.75)' }}>
              Activateurs d'engagement, catalyseurs de succès et de croissance durable. Nous aidons les organisations non
              lucratives à allier financement, impact social… et respect de la planète.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
              <a
                href="/rendez-vous/"
                className="btn-lift"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  background: '#5B3DF5',
                  color: '#FFFDF9',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '15px 28px',
                  borderRadius: 100,
                  boxShadow: '0 12px 28px -10px rgba(91,61,245,0.7)',
                }}
              >
                Prendre rendez-vous →
              </a>
              <a
                href="#service"
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
                Notre accompagnement
              </a>
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              borderRadius: 26,
              overflow: 'hidden',
              aspectRatio: '5/4',
              boxShadow: '0 40px 70px -40px rgba(91,61,245,0.45)',
              border: '6px solid #FFFDF9',
            }}
          >
            <img src="/images/2.png" alt="Photo action de terrain" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </div>
      </div>
    </header>
  );
}

function Mission() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5B3DF5' }}>
          Notre mission
        </span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque'",
            fontWeight: 700,
            fontSize: 'clamp(28px,4.4vw,50px)',
            lineHeight: 1.04,
            letterSpacing: '-0.02em',
            margin: '16px 0 0',
            textWrap: 'balance',
          }}
        >
          Valoriser votre impact en créant des ponts solides avec des partenaires engagés.
        </h2>
        <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, maxWidth: 680, margin: '24px auto 0', color: 'rgba(27,24,48,0.7)' }}>
          Les organisations à but non lucratif transforment la société. Mais trop souvent, leur croissance est freinée
          par le manque de financements. Avec AlliancEssor, nous ouvrons les portes du financement privé de manière
          stratégique, humaine et responsable.
        </p>
      </div>
    </section>
  );
}

const APPROACHES = [
  { num: '01', title: 'Assistant fundraising', text: 'Un assistant mutualisé et à temps partagé, dédié à la recherche de financements.' },
  { num: '02', title: 'Restructuration de projets', text: 'Intégration de critères RSE et de durabilité pour renforcer vos projets.' },
  { num: '03', title: 'Acquisition client éthique', text: 'Connexion à des partenaires privés alignés avec vos valeurs.' },
];

function ThreeApproaches() {
  return (
    <section style={{ padding: 'clamp(50px,7vw,90px) clamp(20px,5vw,64px)', background: '#1B1830', color: '#FAF4EC' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ maxWidth: 680 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC24B' }}>
            Notre concept
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
            Trois approches de développement au service de votre cause.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 20, marginTop: 44 }}>
          {APPROACHES.map((item) => (
            <div key={item.num} style={{ background: 'rgba(250,244,236,0.06)', border: '1px solid rgba(250,244,236,0.14)', borderRadius: 24, padding: 32 }}>
              <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 32, color: '#8A78FF', letterSpacing: '-0.02em' }}>{item.num}</div>
              <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 21, margin: '12px 0 8px' }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(250,244,236,0.75)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MutualizedService() {
  return (
    <section id="service" style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div className="servgrid" style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 40px 70px -40px rgba(91,61,245,0.5)', border: '6px solid #FFFDF9' }}>
            <img src="/images/29.png" alt="Photo équipe / accompagnement" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: -20,
              right: -16,
              background: '#FFC24B',
              color: '#1B1830',
              padding: '16px 22px',
              borderRadius: 20,
              maxWidth: 220,
              boxShadow: '0 20px 40px -18px rgba(255,194,75,0.8)',
            }}
          >
            <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 26, lineHeight: 1 }}>6 mois</div>
            <div style={{ fontSize: 13, marginTop: 4, fontWeight: 600 }}>d'accompagnement minimum, 100% orienté résultats.</div>
          </div>
        </div>
        <div>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5B3DF5' }}>
            Notre service « mutualisé »
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
            Une équipe mutualisée : vos partenariats, notre mission.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26 }}>
            {[
              'Un assistant fundraising à temps partagé.',
              "Audit de l'existant.",
              "Prospection & identification d'entreprises prêtes à s'engager financièrement.",
              "Structuration et intégration de l'éco-responsabilité dans vos projets.",
            ].map((text) => (
              <div key={text} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span
                  style={{
                    flex: 'none',
                    marginTop: 2,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: '#EDE9FF',
                    color: '#5B3DF5',
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 800,
                    fontSize: 13,
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.5, color: 'rgba(27,24,48,0.85)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ACTIONS = [
  { bg: '#E7E0FF', title: "Réduire l'impact environnemental", text: 'Conseils pratiques pour réduire l\'empreinte de vos activités, tout en renforçant votre projet.' },
  { bg: '#FFE1D4', title: 'Mise en relation ciblée', text: 'Avec des entreprises partageant vos valeurs, autour de soutenances de projets.' },
  { bg: '#FFF0CE', title: 'Partenariats durables', text: 'Création de collaborations qui allient financement et engagement sociétal.' },
];

function ConcreteActions() {
  return (
    <section style={{ padding: 'clamp(50px,7vw,90px) clamp(20px,5vw,64px)', background: '#F3EBE0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5B3DF5' }}>
            Nos actions concrètes
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
            Nous transformons vos idées en projets durables et attractifs.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 20, marginTop: 44 }}>
          {ACTIONS.map((item) => (
            <div key={item.title} style={{ background: '#FFFDF9', border: '1px solid rgba(27,24,48,0.1)', borderRadius: 24, padding: 30 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: item.bg, marginBottom: 18 }} />
              <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(27,24,48,0.7)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8431F' }}>
            Pourquoi nous ?
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
            Plus qu'un service, un engagement commun.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.9vw,18px)', lineHeight: 1.6, marginTop: 20, color: 'rgba(27,24,48,0.7)' }}>
            Nous ne sommes pas une simple équipe de commerciaux externalisés, mais des acteurs conscients des enjeux de
            demain — dédiés à connecter ceux qui veulent agir avec ceux qui agissent déjà.
          </p>
        </div>
        <div className="whygrid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, marginTop: 40 }}>
          <div style={{ background: '#5B3DF5', color: '#FAF4EC', borderRadius: 24, padding: 32 }}>
            <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 22, marginBottom: 10 }}>Pour les associations</div>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'rgba(250,244,236,0.85)' }}>Des partenaires fiables pour construire une croissance vertueuse.</p>
          </div>
          <div style={{ background: '#FF5A36', color: '#FFFDF9', borderRadius: 24, padding: 32 }}>
            <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 22, marginBottom: 10 }}>Pour les entreprises</div>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'rgba(255,253,249,0.9)' }}>Un allié stratégique pour donner du sens au mécénat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="rdv" style={{ padding: 'clamp(50px,7vw,110px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', background: '#5B3DF5', borderRadius: 36, padding: 'clamp(40px,6vw,72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -90, left: -60, width: 280, height: 280, background: 'rgba(255,194,75,0.4)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: -70, right: -40, width: 200, height: 200, background: 'rgba(255,90,54,0.4)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1, color: '#FFFDF9' }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,253,249,0.85)' }}>
            Donnons vie à vos projets
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
            Révélons ensemble le potentiel caché de votre association.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.55, maxWidth: 560, margin: '20px auto 0', color: 'rgba(255,253,249,0.9)' }}>
            Rejoignez-nous pour construire un avenir plus prospère et durable.
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
              href="/entreprises/"
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
              Vous êtes une entreprise ?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

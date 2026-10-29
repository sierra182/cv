import { useEffect, useId, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, ExternalLink, Github, Layers3, Linkedin, Mail, Monitor, ShieldCheck, Smartphone, Terminal, Workflow } from "lucide-react";
import { personA, personB, personAExperiences, personBExperiences, sharedExperiences, convergeSection, synergySection, type Experience, type PersonProfile } from "@/data/experiences";
import "./design-workshop.css";

const concepts = [
  { id: "studio", name: "Studio", number: "01", category: "Éditorial & affirmé", description: "Un papier ivoire, une typographie expressive, des portraits au premier plan. Une présence humaine et une touche vermillon.", tags: ["Ivoire", "Vermillon", "Éditorial"], note: "Ma recommandation pour mettre votre binôme en valeur." },
  { id: "obsidienne", name: "Obsidienne", number: "02", category: "Technique & immersif", description: "Un univers graphite, des détails inspirés du terminal et un accent citron vert. Une direction résolument technique.", tags: ["Graphite", "Citron vert", "Technique"], note: "Pour affirmer votre culture développement et infrastructure." },
  { id: "horizon", name: "Horizon", number: "03", category: "Lumineux & structuré", description: "Du bleu cobalt, de grands espaces et une composition graphique. Une lecture claire, de vos parcours à vos projets.", tags: ["Blanc bleuté", "Cobalt", "Graphique"], note: "Pour une présentation accessible et très lisible." },
] as const;
type ConceptId = typeof concepts[number]["id"];
const isConcept = (value: string | null | undefined): value is ConceptId => concepts.some((item) => item.id === value);

export default function DesignWorkshop() {
  const [search, setSearch] = useSearchParams();
  const selected = search.get("piste");
  const concept = isConcept(selected) ? selected : "obsidienne";
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const active = concepts.find((item) => item.id === concept)!;

  useEffect(() => {
    const previous = document.title;
    document.title = "Atelier de design — Dual Journey";
    return () => { document.title = previous; };
  }, []);

  return (
    <div className="workshop">
      <header className="workshop-header">
        <Link to="/" className="workshop-brand"><Layers3 size={21} /><span>dual journey<span className="workshop-brand-divider">/</span><strong>Atelier de design</strong></span></Link>
        <span className="workshop-draft"><span /> Obsidienne · Direction retenue</span>
        <Link to="/" className="workshop-original"><ArrowLeft size={14} /> Voir le site</Link>
      </header>
      <div className="workshop-layout">
        <aside className="workshop-sidebar" aria-label="Propositions de design">
          <div className="workshop-intro"><span className="workshop-eyebrow">UNE NOUVELLE DIRECTION</span><h1>Votre duo.<br />Trois expressions.</h1><p>Explorez les pistes avec votre contenu réel, puis choisissez celle qui vous ressemble.</p></div>
          <div className="workshop-options" role="group" aria-label="Choisir une proposition">
            {concepts.map((item) => (
              <button key={item.id} className={`workshop-option ${concept === item.id ? "is-selected" : ""}`} aria-pressed={concept === item.id} onClick={() => setSearch({ piste: item.id }, { replace: true })}>
                <div className={`workshop-mini mini-${item.id}`} aria-hidden="true"><div className="mini-copy">{item.id === "studio" ? <>Deux parcours.<br /><em>Un même élan.</em></> : item.id === "obsidienne" ? <>Deux esprits.<br /><em>Un système.</em></> : <>Le collectif,<br /><em>par nature.</em></>}</div><div className="mini-portraits"><img src={personA.avatar} alt="" /><img src={personB.avatar} alt="" /></div><span className="mini-line" /></div>
                <span className="workshop-option-label"><span><small>{item.number}</small> {item.name}</span><span className="workshop-radio">{concept === item.id && <Check size={11} />}</span></span>
                <span className="workshop-option-category">{item.category}</span>
              </button>
            ))}
          </div>
          <div className="workshop-note"><span className="workshop-eyebrow">DIRECTION RETENUE</span><p>La piste Obsidienne est appliquée au site principal. Les autres propositions restent consultables ici pour comparaison.</p></div>
        </aside>
        <main className="workshop-main">
          <div className="workshop-toolbar"><div><span className={`workshop-color color-${concept}`} /><strong>{active.name}</strong><span className="workshop-toolbar-subtitle">Aperçu interactif</span></div><div className="workshop-toolbar-actions"><div className="workshop-devices" role="group" aria-label="Format de l’aperçu"><button aria-label="Aperçu ordinateur" aria-pressed={device === "desktop"} onClick={() => setDevice("desktop")}><Monitor size={16} /></button><button aria-label="Aperçu mobile" aria-pressed={device === "mobile"} onClick={() => setDevice("mobile")}><Smartphone size={16} /></button></div><a href={`/design/${concept}`} target="_blank" rel="noreferrer" className="workshop-expand" aria-label="Ouvrir la proposition en plein écran"><ExternalLink size={16} /></a></div></div>
          <div className={`workshop-preview ${device === "mobile" ? "preview-mobile" : ""}`}><iframe key={concept} title={`Proposition ${active.name}`} src={`/design/${concept}`} /></div>
          <div className="workshop-caption"><div><strong>{active.category}</strong><p>{active.description}</p></div><div className="workshop-tags">{active.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p className="workshop-recommendation">{active.note}</p></div>
        </main>
      </div>
    </div>
  );
}

function SocialLinks({ person, labelled = false }: { person: PersonProfile; labelled?: boolean }) {
  return (
    <div className={`concept-socials${labelled ? " social-links-labelled" : ""}`}>
      {person.github && (
        <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${person.name}`}>
          <Github size={17} />
          {labelled && <><span>GitHub</span><ArrowUpRight size={17} /></>}
        </a>
      )}
      {person.linkedin && (
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${person.name}`}>
          <Linkedin size={17} />
          {labelled && <><span>LinkedIn</span><ArrowUpRight size={17} /></>}
        </a>
      )}
      {person.email && (
        <a href={`mailto:${person.email}`} aria-label={`Écrire à ${person.name} : ${person.email}`}>
          <Mail size={17} />
          {labelled && <><span>{person.email}</span><ArrowUpRight size={17} /></>}
        </a>
      )}
    </div>
  );
}

function Portrait({ person, index }: { person: PersonProfile; index: number }) {
  return <div className={`concept-portrait portrait-${index}`}><img src={person.avatar} alt={person.name} /><span className="portrait-index">0{index + 1}</span><div className="portrait-label"><span>{person.name.split(" ")[0]}</span><small>{person.title}</small></div></div>;
}

function Hero({ concept }: { concept: ConceptId }) {
  if (concept === "obsidienne") return (
    <section className="concept-hero hero-obsidienne concept-container">
      <div className="hero-text"><span className="concept-eyebrow"><span className="live-dot" /> DÉVELOPPEMENT × INFRASTRUCTURE</span><h1>Deux esprits.<br />Un <em>système.</em></h1><p>Du code à l’infrastructure, nous concevons ensemble des systèmes fiables, sécurisés et durables.</p><a href="#projets" className="concept-button">Explorer nos projets <ArrowUpRight size={17} /></a><a href="#duo" className="concept-text-link">Rencontrer le binôme <ArrowRight size={15} /></a></div>
      <div className="hero-system"><div className="system-window"><div className="system-window-bar"><span><i /><i /><i /></span><small>dual-journey / team.config</small><Terminal size={14} /></div><div className="system-code"><p><span>const</span> binôme = &#123;</p><p>&nbsp; développement: <em>"Florian"</em>,</p><p>&nbsp; infrastructure: <em>"Sébastien"</em>,</p><p>&nbsp; méthode: <em>"ensemble"</em></p><p>&#125;;</p><div className="system-comment">// Deux parcours. Une même exigence.</div></div><div className="system-people">{[personA, personB].map((person) => <div key={person.name}><img src={person.avatar} alt={person.name} /><span>{person.name.split(" ")[0]}<small>{person.title}</small></span><span className="system-status" aria-label="Profil">↗</span></div>)}</div><div className="system-footer"><span className="live-dot" /> Architecture · Code · Déploiement <span>↳ 42 Perpignan</span></div></div><span className="system-coordinate">[ 01 / DEUX EXPERTISES, UNE ÉQUIPE ]</span></div>
      <div className="hero-bottom"><span>Concevoir. Construire. Fiabiliser.</span><a href="#duo">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div>
    </section>
  );
  if (concept === "horizon") return (
    <section className="concept-hero hero-horizon concept-container">
      <span className="concept-eyebrow">FLORIAN & SÉBASTIEN · DÉVELOPPEMENT & INFRASTRUCTURE</span><h1>Le collectif,<br /><em>par nature.</em><span className="horizon-asterisk" aria-hidden="true">✳</span></h1>
      <div className="horizon-hero-bottom"><div><p>Deux trajectoires singulières. Une même façon d’avancer : ensemble, avec méthode et exigence.</p><a href="#duo" className="concept-button">Découvrir notre duo <ArrowUpRight size={17} /></a></div><div className="horizon-duo"><Portrait person={personA} index={0} /><span className="horizon-plus">+</span><Portrait person={personB} index={1} /></div></div>
      <div className="hero-bottom"><span>Applications utiles. Infrastructures solides.</span><a href="#projets">DÉCOUVRIR LES PROJETS <ArrowDown size={13} /></a></div>
    </section>
  );
  return (
    <section className="concept-hero hero-studio concept-container">
      <div className="hero-text"><span className="concept-eyebrow">DEUX PROFILS. UNE VISION COMMUNE.</span><h1>Deux parcours.<br />Un même<br /><em>élan.</em><span className="studio-spark" aria-hidden="true">✳</span></h1><p>Nous sommes Florian & Sébastien.<br />Du développement à l’infrastructure, nous construisons des solutions qui tiennent la route.</p><a href="#duo" className="concept-button">Rencontrer le duo <ArrowUpRight size={17} /></a></div>
      <div className="studio-portraits"><span className="portrait-caption">LA COMPLÉMENTARITÉ, EN PERSONNES.</span><Portrait person={personA} index={0} /><Portrait person={personB} index={1} /><span className="studio-ampersand" aria-hidden="true">&</span></div>
      <div className="hero-bottom"><span>Développement · Infrastructure · Esprit d’équipe</span><a href="#duo">LA SUITE S’ÉCRIT À DEUX <ArrowDown size={13} /></a></div>
    </section>
  );
}

function ExperienceDetails({ experience }: { experience: Experience }) {
  return <div className="concept-experience-content">{experience.positionDescription && <p>{experience.positionDescription}</p>}{!!experience.missions?.length && <ul>{experience.missions.map((mission) => <li key={mission}>{mission}</li>)}</ul>}{!!experience.technologies?.length && <div className="concept-tech">{experience.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>}{!!experience.highlights?.length && <div className="concept-highlights">{experience.highlights.map((highlight) => <p key={highlight}><Check size={14} />{highlight}</p>)}</div>}{experience.link && <a className="concept-text-link" href={experience.link} target="_blank" rel="noreferrer">Découvrir le projet <ArrowUpRight size={15} /></a>}</div>;
}

function ExperienceTimeline({ person, experiences }: { person: PersonProfile; experiences: Experience[] }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const visible = expanded ? experiences : experiences.slice(-3);
  return <div className="concept-timeline-column"><div className="timeline-person"><img src={person.avatar} alt="" /><div><h3>{person.name}</h3><span>{person.title}</span></div></div><div id={listId} className="concept-timeline-list">{visible.map((experience) => <details key={experience.id} className="concept-experience"><summary><span className="experience-year">{experience.startDate?.slice(0, 4) || "—"}{experience.endDate && experience.endDate.slice(0, 4) !== experience.startDate?.slice(0, 4) ? `–${experience.endDate.slice(0, 4)}` : ""}</span><span><strong>{experience.positionTitle}</strong><small>{[experience.place, experience.location].filter(Boolean).join(" · ")}</small></span><ChevronDown size={16} /></summary><ExperienceDetails experience={experience} /></details>)}</div><button className="concept-text-link timeline-toggle" aria-expanded={expanded} aria-controls={listId} onClick={() => setExpanded(!expanded)}>{expanded ? "Réduire le parcours" : `Tout le parcours de ${person.name.split(" ")[0]}`} {expanded ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />}</button></div>;
}

function Project({ experience, index }: { experience: Experience; index: number }) {
  const title = experience.id === "b8" ? "Auto-École Beaudouin" : experience.id === "s3" ? "Finance et Factor" : experience.positionTitle?.replace("FT_", "");
  const Icon = index === 0 ? Terminal : index === 1 ? Code2 : index === 2 ? ShieldCheck : Workflow;
  const visual = experience.images?.[0] ? (
    <img src={experience.images[0]} alt={`Aperçu du site ${experience.place}`} loading="lazy" />
  ) : experience.logo ? (
    <img className="project-logo" src={experience.logo} alt={`Logo de ${title}`} loading="lazy" />
  ) : (
    <>
      <Icon className="project-symbol" size={64} strokeWidth={1} />
      <span className="project-visual-label">{index === 0 ? "HTTP/1.1 · C++98" : index === 1 ? "FULL STACK · MULTIJOUEUR" : "UNIX · DOCKER · POSTGRESQL"}</span>
      <span className="project-visual-number">0{index + 1}</span>
    </>
  );

  return (
    <article className={`concept-project project-${index}`}>
      {experience.link ? (
        <a className="project-visual" href={experience.link} target="_blank" rel="noopener noreferrer" aria-label={`Découvrir ${title} (nouvel onglet)`}>
          {visual}
        </a>
      ) : <div className="project-visual">{visual}</div>}
      <div className="project-heading">
        <span className="concept-eyebrow">{experience.type === "job" ? "EXPÉRIENCE PROFESSIONNELLE" : "PROJET COMMUN"}</span>
        {experience.link && <a href={experience.link} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${title} (nouvel onglet)`}><ArrowUpRight size={20} /></a>}
      </div>
      <h3>{title}</h3>
      <p>{experience.positionDescription}</p>
      <div className="concept-tech">{experience.technologies?.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
      <details className="project-details"><summary>Explorer le projet <ChevronDown size={15} /></summary><ExperienceDetails experience={experience} /></details>
    </article>
  );
}

export function DesignConcept() {
  const { concept: value } = useParams();
  if (!isConcept(value)) return <div className="workshop-missing"><h1>Cette proposition n’existe pas.</h1><Link to="/design">Revenir à l’atelier</Link></div>;
  return <PortfolioPage concept={value} preview />;
}

export function PortfolioPage({ concept = "obsidienne", preview = false }: { concept?: ConceptId; preview?: boolean }) {
  useEffect(() => {
    const previous = document.title;
    document.title = preview ? `${concepts.find((item) => item.id === concept)!.name} — Dual Journey` : "Florian Vergé & Sébastien Vidot — Développement & Infrastructure";
    return () => { document.title = previous; };
  }, [concept, preview]);

  return (
    <div className={`design-concept concept-${concept}`}>
      <a href="#duo" className="concept-skip">Passer au contenu</a>
      <header className="concept-nav concept-container"><nav aria-label="Navigation principale"><a href="#duo">Le duo</a><a href="#parcours">Parcours</a><a href="#projets">Projets</a></nav><a href="#contact" className="concept-nav-contact">Échangeons <ArrowUpRight size={14} /></a></header>
      <main id="accueil"><Hero concept={concept} /><div className="concept-marquee" aria-hidden="true"><span>DEUX PARCOURS</span><i>✳</i><span>UNE MÊME EXIGENCE</span><i>✳</i><span>DES PROJETS CONCRETS</span><i>✳</i><span>UNE VISION COMMUNE</span></div>
        <section id="duo" className="concept-section concept-container"><div className="concept-section-heading"><span className="concept-eyebrow">01 / LE DUO</span><h2>Des différences.<br /><em>Une force commune.</em></h2><p>Deux approches qui se complètent, de la compréhension du besoin à la fiabilité des systèmes.</p></div><div className="concept-profiles">{[personA, personB].map((person, index) => <article className="concept-profile" key={person.name}><div className="profile-top"><img src={person.avatar} alt={person.name} loading="lazy" /><span className="profile-number">/ 0{index + 1}</span><SocialLinks person={person} /></div><h3>{person.name}</h3><span className="profile-role">{person.title}</span><p>{person.about}</p><div className="profile-footer"><span>{index === 0 ? "Vision produit & architecture" : "Automatisation & fiabilité"}</span><ArrowUpRight size={17} /></div></article>)}</div></section>
        <section id="parcours" className="concept-section concept-container"><div className="concept-section-heading"><span className="concept-eyebrow">02 / LES TRAJECTOIRES</span><h2>Chacun sa route.<br /><em>Le même cap.</em></h2><p>Explorez les étapes de nos parcours. Chaque expérience a construit notre manière de travailler.</p></div><div className="concept-timelines"><ExperienceTimeline person={personA} experiences={personAExperiences} /><ExperienceTimeline person={personB} experiences={personBExperiences} /></div><div className="concept-convergence"><span className="convergence-mark">42<span>↗</span></span><div><span className="concept-eyebrow">LE POINT DE RENCONTRE · OCTOBRE 2023</span><h3>{convergeSection.title}</h3><p>{convergeSection.description}</p></div><ArrowDown size={25} /></div><div className="concept-convergence-details">{Object.entries(convergeSection.details || {}).map(([title, description]) => <div key={title}><h4>{title}</h4><p>{description}</p></div>)}</div></section>
        <section id="projets" className="concept-section concept-container">
          <div className="concept-section-heading projects-section-heading">
            <span className="concept-eyebrow">03 / LES RÉALISATIONS</span>
            <h2>Construire ensemble.<br /><em>Livrer du concret.</em></h2>
            <p>Du serveur HTTP à l’application métier : des projets réalisés à deux, en combinant nos compétences de la conception au déploiement.</p>
          </div>
          <div className="concept-projects">{sharedExperiences.map((experience, index) => <Project experience={experience} index={index} />)}</div>
        </section>
        <section className="concept-method"><div className="concept-container"><span className="concept-eyebrow">04 / NOTRE FAÇON D’AVANCER</span><h2>La collaboration,<br /><em>éprouvée sur le terrain.</em></h2><div className="method-content"><div><h3>{synergySection.title}</h3>{synergySection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></div></section>
        <section id="contact" className="concept-contact concept-container">
          <span className="concept-eyebrow">LA PROCHAINE ÉTAPE</span>
          <h2>Et si on construisait<br /><em>la suite ensemble ?</em></h2>
          <div className="contact-links">
            {[personA, personB].map((person) => (
              <div className="contact-person" key={person.name}>
                <h3>{person.name}</h3>
                <SocialLinks person={person} labelled />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="concept-footer concept-container"><span>Florian Vergé & Sébastien Vidot</span>{preview ? <Link to="/design" target="_top">Proposition {concepts.find((item) => item.id === concept)!.name} · Retour à l’atelier <ArrowUpRight size={13} /></Link> : <a href="#accueil">Revenir en haut <ArrowUpRight size={13} /></a>}</footer>
    </div>
  );
}

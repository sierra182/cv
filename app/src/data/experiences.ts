export interface Experience {
  id: string;
  type: "job" | "school" | "certification" | "project" | "travel";
  positionTitle?: string;
  positionDescription?: string | "";
  place?: string | "";
  location?: string;
  startDate?: string;
  endDate?: string;
  missions?: string[];
  technologies?: string[];
  highlights?: string[];
  logo?: string; // URL or import path for company/school logo
  images?: string[]; // Additional illustrative images
  link?: string; // External link related to this experience
}

export interface PersonProfile {
  name: string;
  title: string;
  subtitle: string;
  avatar?: string; // Profile picture URL or import path
  about?: string; // "About Me" paragraph
  email?: string;
  linkedin?: string;
  github?: string;
}

export interface ConvergeSection {
  title: string;
  description: string;
  image?: string; // Illustrative image for the converge moment
  details?: Record<string, string>; // Arbitrary key-value details
}

export interface SynergySection {
  title: string;
  paragraphs: string[];
}

// ── Converge Section ──
export const convergeSection: ConvergeSection = {
  title: "Nos chemins se sont croisés",
  description:
    "Après des parcours différents, nous intégrons l’école 42 Perpignan en octobre 2023 avec une même volonté de reconversion vers des métiers techniques exigeants.",
  image: "/images/42.jpg",
  details: {
    "Notre rencontre":
      "Nous nous rencontrons au début du cursus, et nous avons décidé de collaborer très tôt.",
    "Ce qui a fonctionné":
      "Des profils complémentaires, une manière similaire d’aborder les problèmes et une exigence commune sur la qualité du travail et la structuration des projets.",
    "Notre manière de travailler":
      "Nous échangeons beaucoup en amont sur l’architecture, challengeons nos choix techniques et privilégions une approche claire, documentée et orientée usage réel.",
  },
};

// ── Synergy Section ──
export const synergySection: SynergySection = {
  title: "Une dynamique déjà éprouvée",
  paragraphs: [
    "Après deux ans de collaboration sur des projets exigeants, nous avons développé une manière de travailler fluide et structurée, sans friction technique inutile.",
    "Nos outils, nos workflows et nos standards de qualité sont naturellement alignés, ce qui permet d’avancer efficacement tout en conservant un haut niveau d’exigence.",
    "Nos compétences se complètent sur les plans technique et organisationnel — du développement à l’infrastructure — tout en reposant sur une communication claire, une gestion constructive des désaccords et une répartition intelligente des responsabilités.",
    "Cette dynamique favorise la remise en question constructive, l’identification rapide des points faibles et une amélioration continue de la qualité livrée.",
    "Elle constitue un cadre solide, capable de s’adapter à différents contextes et environnements professionnels.",
  ],
};

// ── Person A ──
export const personA: PersonProfile = {
  name: "Florian VERGÉ",
  title: "Développeur Full-Stack",
  subtitle: "La compréhension métier avant tout.",
  avatar: "/images/flo.jpg",
  about:
    "Intéressé par l’architecture et la compréhension des besoins métiers, j’aborde les projets de la vision macro aux détails techniques afin de concevoir des solutions cohérentes et utiles. J’attache également de l’importance à la vulgarisation pour garantir des outils clairs, adoptés et réellement utilisés.",
  email: "verge.f@gmail.com",
  linkedin: "https://linkedin.com/in/florianverge", // ! Needs to be in https://link.com format
  github: "https://github.com/maitreverge",
};

export const personAExperiences: Experience[] = [
  {
    id: "a1",
    type: "school",
    positionTitle: "Baccalauréat ES",
    // positionDescription:
    //   "Managed and scaled cloud infrastructure for a fintech startup.",
    place: "Lycée Arago",
    location: "Perpignan",
    startDate: "2009-07",
    endDate: "", // ! Ne rien preciser
    logo: "", // Add company logo URL here
    missions: [
      // "Designed and maintained Kubernetes clusters on AWS EKS",
      // "Implemented CI/CD pipelines with GitLab CI and ArgoCD",
      // "Reduced infrastructure costs by 35% through resource optimization",
      // "Set up monitoring stack with Prometheus, Grafana, and AlertManager",
    ],
  },
  {
    id: "a2",
    type: "school",
    positionTitle:
      "DUT GEA + Licence GPOD (Gestion des Petites Organisations Durables)",
    // positionDescription:
    //   "Managed and scaled cloud infrastructure for a fintech startup.",
    // place: "FinTech Corp",
    location: "IUT de Perpignan",
    startDate: "2009-09",
    endDate: "2012-07", // ! Ne rien preciser
    logo: "/images/upvd.png", // Add company logo URL here
    missions: [
      "Formation générale en gestion des entreprises et des organisations",
      "Introduction aux fondamentaux de la comptabilité et de la finance",
      "Notions de droit, d’économie et de gestion administrative",
      "Travaux pratiques en gestion de projet et études de cas",
      "Développement d’une compréhension globale du fonctionnement d’une structure",
    ],
  },
  {
    id: "a3",
    type: "job",
    positionTitle: "Coordinateur",
    positionDescription:
      "Maintained on-premise and hybrid infrastructure for a mid-size company.",
    place: "Chronodrive",
    location: "Montpellier, France",
    startDate: "2014-05",
    endDate: "2017-01",
    logo: "/images/chrono.png",
    missions: [
      "Coordination des équipes opérationnelles sur le terrain",
      "Préparation et contrôle des commandes clients dans le respect des délais",
      "Supervision des flux de commandes et gestion des imprévus",
      "Responsabilité du bon déroulement des opérations quotidiennes",
    ],
  },
  {
    id: "a4",
    type: "travel",
    positionTitle: "Voyage Perso",
    positionDescription: "",
    place: "Austalie",
    location: "",
    startDate: "2018-01",
    endDate: "2020-01",
    logo: "/images/australia.png",
    missions: [
      "Immersion internationale de deux ans en Australie",
      "Maîtrise opérationnelle de l’anglais en contexte professionnel et quotidien",
      "Développement d’une forte autonomie et capacité d’adaptation",
      "Travail et intégration dans des environnements multiculturels",
      "Ouverture interculturelle et aisance relationnelle renforcée",
    ],
  },
  {
    id: "a5",
    type: "job",
    positionTitle: "Divers jobs",
    positionDescription: "",
    place: "Nantes",
    location: "France",
    startDate: "2020-08",
    endDate: "2022-07",
    logo: "",
    missions: [
      "Preparation de commande à Auchan Drive",
      "Diverses missions d'interim",
      "Réparations et reconditionnement d'iPhones.",
    ],
  },
      {
    id: "a6",
    type: "certification",
    positionTitle: "HarvardX Certifications",
    positionDescription: "Deux certifications HarvardX, obtenues en ligne sur la plateforme edX.",
    // link: "https://github.com/maitreverge/gpt_panel",
    // place: "Nantes",
    // location: "France",
    // startDate: "2023-01",
    // endDate: "2025-07",
    logo: "",
    missions: [
      "HarvardX : CS50 Introduction to Computer Science (2023)",
      "HarvardX : CS50P Introduction to Programming with Python (2025)",
    ],
  },
  {
    id: "a7",
    type: "project",
    positionTitle: "Projets personnels",
    missions: [
      "Administration d’un serveur Linux pour des projets personnels",
      "Création d’un jeu multijoueur : underkover.maitreverge.com",
    ],
    link: "https://underkover.maitreverge.com",
  },
];

// ── Person B ──
export const personB: PersonProfile = {
  name: "Sébastien VIDOT",
  title: "DevOps / Infra Engineer",
  subtitle: "Automation & Site Reliability",
  avatar: "/images/seb.jpg", // Add buddy's profile picture URL here
  about:
    "Orienté développement et conception technique, j’aborde les projets avec une approche structurée et analytique. Je privilégie des solutions claires, robustes et maintenables, en veillant à la cohérence entre application, base de données et environnement système.",
  email: "sierra-echo@msn.com",
  linkedin: "https://www.linkedin.com/in/sébastien-vidot-38859a364/",
  github: "https://github.com/sierra182",
};

export const personBExperiences: Experience[] = [
  {
    id: "b1",
    type: "school",
    positionTitle: "Baccalauréat Scientifique",
    place: "Lycée Arago",
    location: "France",
    startDate: "2003-01",
    endDate: "2003-12",
    logo: "",
    missions: [],
    technologies: [],
  },
  {
    id: "b2",
    type: "job",
    positionTitle: "Gendarme adjoint & réserviste",
    positionDescription:
      "Participation à des missions d’enquête et d’investigation au sein de la Gendarmerie Nationale.",
    place: "Gendarmerie Nationale",
    location: "France",
    startDate: "2004-01",
    endDate: "2009-12",
    logo: "",
    missions: [
    "Participation à des enquêtes judiciaires et collecte d’informations",
    "Rédaction de procédures et comptes rendus officiels",
    "Auditions et recueil de témoignages dans le respect du cadre légal",
    "Analyse de situations complexes et vérification des éléments factuels",
    "Travail en coordination avec les équipes d’enquête",
    ],
  },
  {
    id: "b3",
    type: "job",
    positionTitle: "Assistant prothésiste dentaire",
    positionDescription:
      "Travail de précision en métallurgie.",
    place: "Laboratoire Dameron Fougeret",
    location: "La Réunion, France",
    startDate: "2010-01",
    endDate: "2016-12",
    logo: "",
    missions: [
      "Travaux de précision en métallurgie",
      "Fabrication et ajustement de pièces prothétiques",
      "Respect strict des normes de qualité",
      "Travail minutieux nécessitant patience et concentration",
    ],
  },
  {
    id: "b4",
    type: "certification",
    positionTitle: "EEB – Électricien bâtiment",
    place: "AFPAR",
    location: "France",
    startDate: "2020-01",
    endDate: "2020-12",
    logo: "",
    missions: [],
    technologies: [],
  },
  {
    id: "b5",
    type: "job",
    positionTitle: "Technicien électricité / automatismes",
    positionDescription:
      "Installation et maintenance de systèmes automatisés.",
    place: "Alarmelec / SarAutomatisme",
    location: "La Réunion, France",
    startDate: "2019-01",
    endDate: "2021-12",
    logo: "",
    missions: [
      "Installation et mise en service de systèmes automatisés",
      "Lecture et interprétation de plans techniques",
      "Diagnostic logique et résolution de pannes",
      "Maintenance préventive et corrective",
      "Interventions en autonomie sur site client",
    ],
  },
  {
    id: "b6",
    type: "project",
    positionTitle: "Projets domotiques avec Arduino",
    positionDescription:
      "Conception de systèmes électroniques automatisés.",
    place: "",
    location: "",
    startDate: "2020-01",
    endDate: "2023-01",
    logo: "",
    missions: [
      "Conception de solutions domotiques personnalisées",
      "Programmation embarquée sur microcontrôleurs Arduino",
      "Création d’une carte mère pour portail automatique",
      "Intégration électronique et tests fonctionnels",
    ],
    technologies: ["Arduino", "C++", "Électronique"],
  },
  {
    id: "b7",
    type: "project",
    positionTitle: "Site web de locations saisonnières",
    positionDescription:
      "Développement d’un site web avec base de données.",
    place: "",
    location: "",
    startDate: "2022-01",
    endDate: "2023-01",
    logo: "",
    missions: [
      "Développement front-end et back-end avec Blazor (.NET)",
      "Implémentation d’une base de données via ORM (Entity Framework)",
      "Conception d’une architecture web fonctionnelle",
      "Gestion des données et logique applicative",
    ],
    technologies: ["Blazor", "C#", "Entity Framework", "SQL"],
  },
];

// ── Shared / Merged Experiences ──
export const sharedExperiences: Experience[] = [
  {
    id: "s1",
    type: "project",
    positionTitle: "WEBSERV",
    positionDescription:
      "Projet axé sur la conception d'un serveur web, en language C++",
    place: "42",
    location: "Perpignan, France",
    startDate: "2024-11",
    endDate: "2024-12",
    logo: "",
    missions: [
      "Développement d'un serveur web type Nginx en C++98, avec compréhension approfondie du protocole HTTP",
      "Gestion complète des requêtes et réponses HTTP/1.1 incluant les méthodes GET, POST et DELETE",
      "Écriture de scripts Bash pour automatiser les tests",
    ],
    technologies: ["C++", "Protocole HTTP", "Bash", "Python"],
    highlights: [
      "Meilleure note possible obtenue sur le projet",
      "Acquisition d’une maîtrise du protocole HTTP et des principes des serveurs web",
      "Test automatisés sur l'ensemble des fonctionalités implémentées",
    ],
    link: "https://github.com/maitreverge/webserv",
  },
  {
    id: "s2",
    type: "project",
    positionTitle: "FT_TRANSCENDENCE",
    positionDescription:
      "Création d’une application web full stack autour d’un jeu Pong en 3D, intégrant une authentification sécurisée via JWT et 2FA. Implémentation d’un mode multijoueur en temps réel avec WebSockets avec conteneurisation complète avec Docker",
    place: "42",
    location: "Perpignan, France",
    startDate: "2025-01",
    endDate: "2025-04",
    logo: "",
    missions: [
      "Développement d'une web app full stack avec Django pour le back-end, HTMX/CSS/JS pour le front-end",
      "Mise en place de tests end-to-end avec Playwright pour garantir la robustesse des fonctionnalités",
      "Répartition claire des tâches et coordination des modules entre les membres de l'équipe",
      "Optimisation de la communication front-end / back-end et gestion de la persistance avec PostgreSQL",
    ],
    technologies: [
      "Django",
      "Protocole HTTP",
      "Javascript",
      "HTML",
      "CSS",
      "Test E2E Playwright",
    ],
    highlights: [
      "Projet final de 42 réussi avec succès en équipe de 5",
      "Application full stack fonctionnelle et testée end-to-end",
      "Expérience complète de collaboration en équipe et gestion agile via GitHub",
    ],
    link: "https://github.com/maitreverge/ft_transcendence",
  },
  {
    id: "s3",
    type: "job",
    positionTitle: "Binôme stagiares chez Finance et Factor.",
    positionDescription: "Stage de 6 mois chez Philippe LECOMMANDEUR, courtier indépendant en affacturage.",
    place: "Télétravail",
    location: "Perpignan, France",
    startDate: "2025-09",
    endDate: "2026-02",
    logo: "/images/ff.jpg",
    link: "https://finance-factor.fr/",
    missions: [
      "Conception et implémentation d'une infrastructure serveur UNIX complète (reverse proxy, Docker, réseau, sécurité) avec stratégie de sauvegarde automatisée via Azure Blob Storage.",
      "Migration complexe d'un système Excel volumineux vers PostgreSQL : restructuration et modélisation de la logique métier et de la logique commerciale en base de données relationnelle pour garantir scalabilité et extensibilité.",
      "Production d'une documentation technique structurée facilitant la maintenance et l'évolution de l'architecture",
      "OnBoarding de deux nouveaux stagiaires : explications, transmission et amélioration des process techniques et de communication",
    ],
    technologies: [
      "Traefik",
      "Docker",
      "Docusaurus",
      "PostgreSQL",
      "Next.JS",
      "shadcnUI",
      "TailwindCSS",
      "Python Scripting",
      "Shell Scripting",
      "Azure Blob Storage",
    ],
    highlights: [
      "Stage en totale autonomie, en télétravail",
      "Première expérience professionelle réussie",
    ],
  },
  {
    id: "b8",
    type: "job",
    positionTitle: "Développeur Full-Stack — Projet client",
    positionDescription:
      "Refonte du site de l’Auto-École Beaudouin, implantée dans deux agences à Perpignan, de la conception à la mise en production.",
    place: "Auto-École Beaudouin",
    location: "Perpignan, France",
    missions: [
      "Conception d’une API REST en Rust avec Axum et SQLx et modélisation du schéma relationnel PostgreSQL",
      "Développement d’un back-office sur mesure pour gérer les pages, tarifs, FAQ, documents et images en autonomie",
      "Création du frontend avec Astro et TypeScript, avec intégration d’éléments 3D interactifs via Three.js",
      "Conteneurisation avec Docker Compose et déploiement sur VPS Linux Ubuntu, avec routage HTTPS et certificats TLS via Traefik",
      "Migration du site WordPress vers l’application sur mesure et mise en production",
    ],
    technologies: [
      "Rust",
      "Axum",
      "SQLx",
      "PostgreSQL 18",
      "Docker Compose",
      "Linux Ubuntu",
      "Traefik",
      "Astro 4",
      "TypeScript",
      "Three.js",
    ],
    highlights: [
      "Site et interface d’administration déployés et opérationnels pour le client",
    ],
    link: "https://www.beaudouin-permis.fr/",
    images: ["/images/beaudouin-site.jpg"],
  },
];

import { motion } from "framer-motion";
import type { Experience } from "@/data/experiences";
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Plane,
  ExternalLink,
} from "lucide-react";

const typeIcons: Record<Experience["type"], React.ReactNode> = {
  job: <Briefcase className="w-4 h-4" />,
  school: <GraduationCap className="w-4 h-4" />,
  certification: <Award className="w-4 h-4" />,
  project: <Code className="w-4 h-4" />,
  travel: <Plane className="w-4 h-4" />,
};

function formatDate(d?: string): string | null {
  if (!d) return null;
  if (d === "Present") return d;
  const [y, m] = d.split("-");
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aou",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[parseInt(m) - 1]} ${y}`;
}

interface ExperienceCardProps {
  experience: Experience;
  variant?: "a" | "b" | "shared";
}

export default function ExperienceCard({
  experience,
  variant = "a",
}: ExperienceCardProps) {
  const accentClass =
    variant === "a"
      ? "person-a-accent"
      : variant === "b"
        ? "person-b-accent"
        : "merged-accent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="experience-card"
    >
      {/* Company/School logo */}
      {experience.logo && (
        <div className="mb-3">
          <img
            src={experience.logo}
            alt={`${experience.place} logo`}
            className="h-8 w-auto object-contain"
          />
        </div>
      )}

      <div className="flex items-center gap-2 mb-2">
        <span className={accentClass}>{typeIcons[experience.type]}</span>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {experience.type}
        </span>
        <span className="ml-auto text-xs text-muted-foreground">
          {formatDate(experience.startDate)}
          {formatDate(experience.startDate) &&
            formatDate(experience.endDate) &&
            " — "}
          {formatDate(experience.endDate)}
        </span>
      </div>

      <div className="flex items-start justify-between gap-2">
        <h3 className={`text-lg font-semibold leading-tight ${accentClass}`}>
          {experience.positionTitle}
        </h3>
        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors shrink-0"
            title="Voir le lien"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      {(experience.place || experience.location) && (
        <p className="text-sm font-medium text-foreground/80 mt-0.5">
          {[experience.place, experience.location].filter(Boolean).join(" · ")}
        </p>
      )}
      {experience.positionDescription && (
        <p className="text-sm text-muted-foreground mt-2">
          {experience.positionDescription}
        </p>
      )}

      {experience.missions.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {experience.missions.map((m, i) => (
            <li key={i} className="text-sm text-foreground/70 flex gap-2">
              <span className="text-muted-foreground mt-1 shrink-0">›</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      )}

      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {experience.technologies.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {experience.highlights && experience.highlights.length > 0 && (
        <div className="mt-3 pt-3 border-t border-border">
          {experience.highlights.map((h, i) => (
            <p
              key={i}
              className="text-sm font-medium text-accent flex gap-2 items-start"
            >
              <Award className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              {h}
            </p>
          ))}
        </div>
      )}

      {/* Illustrative images */}
      {experience.images && experience.images.length > 0 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {experience.images.map((img, i) => {
            const preview = (
              <img
                src={img}
                alt={`Aperçu de ${experience.place} — illustration ${i + 1}`}
                loading="lazy"
                className="h-32 sm:h-36 w-auto max-w-full rounded-md object-contain border border-border"
              />
            );

            return experience.link ? (
              <a
                key={img}
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter le site de ${experience.place} (nouvel onglet)`}
                className="block shrink-0 max-w-full rounded-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {preview}
              </a>
            ) : (
              <div key={img} className="shrink-0 max-w-full">
                {preview}
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

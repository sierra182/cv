import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import PersonHeader from "./PersonHeader";
import type {
  Experience,
  PersonProfile,
  ConvergeSection,
  SynergySection,
} from "@/data/experiences";
import { Users } from "lucide-react";

interface YTimelineProps {
  personA: PersonProfile;
  personAExperiences: Experience[];
  personB: PersonProfile;
  personBExperiences: Experience[];
  sharedExperiences: Experience[];
  converge: ConvergeSection;
  synergy: SynergySection;
}

export default function YTimeline({
  personA,
  personAExperiences,
  personB,
  personBExperiences,
  sharedExperiences,
  converge,
  synergy,
}: YTimelineProps) {
  const maxIndividual = Math.max(
    personAExperiences.length,
    personBExperiences.length,
  );

  return (
    <div className="w-full">
      {/* ── Parallel Section ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Mobile layout: Person A + experiences, then Person B + experiences */}
        <div className="md:hidden space-y-12 mb-12">
          {/* Person A block */}
          <div>
            <PersonHeader person={personA} variant="a" />
            <div className="space-y-6 mt-8">
              {personAExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} variant="a" />
              ))}
            </div>
          </div>

          {/* Person B block */}
          <div>
            <PersonHeader person={personB} variant="b" />
            <div className="space-y-6 mt-8">
              {personBExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} variant="b" />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop layout: Headers side-by-side, then experiences side-by-side */}
        <div className="hidden md:block">
          {/* Headers */}
          <div className="grid grid-cols-2 gap-16 mb-12">
            <PersonHeader person={personA} variant="a" />
            <PersonHeader person={personB} variant="b" />
          </div>

          {/* Parallel timelines */}
          <div className="relative grid grid-cols-[1fr_auto_1fr] gap-0">
            {/* Left column */}
            <div className="space-y-6 pr-8">
              {personAExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} variant="a" />
              ))}
              {personAExperiences.length < maxIndividual && <div />}
            </div>

            {/* Center line */}
            <div className="flex flex-col items-center">
              <div className="w-px bg-border flex-1" />
            </div>

            {/* Right column */}
            <div className="space-y-6 pl-8">
              {personBExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} variant="b" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Merge Point ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative my-16"
        >
          {/* Y merge visual */}
          <div className="hidden md:block relative h-32">
            <svg
              viewBox="0 0 800 120"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 200 0 Q 200 60 400 110"
                fill="none"
                stroke="hsl(var(--person-a))"
                strokeWidth="2"
                opacity="0.5"
              />
              <path
                d="M 600 0 Q 600 60 400 110"
                fill="none"
                stroke="hsl(var(--person-b))"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Converge badge */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-lg">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-foreground tracking-wide">
                {converge.title}
              </span>
            </div>
          </div>

          {/* Converge details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8 text-center"
          >
            {converge.image && (
              <img
                src={converge.image}
                alt="Our convergence"
                className="w-1/3 mx-auto object-contain rounded-lg border border-border mb-6"
              />
            )}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {converge.description}
            </p>

            {converge.details && Object.keys(converge.details).length > 0 && (
              <div className="mt-6 grid gap-4 text-left">
                {Object.entries(converge.details).map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <h4 className="text-sm font-semibold text-accent mb-1">
                      {key}
                    </h4>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Shared Timeline ── */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 pb-16">
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {sharedExperiences.map((exp, index) => {
              const isLast = index === sharedExperiences.length - 1;
              return (
                <div key={exp.id} className="relative">
                  {/* Center dot */}
                  <div
                    className={`absolute left-1/2 -translate-x-1.5 top-6 w-3 h-3 rounded-full border-2 border-background z-10 ${isLast ? "w-4 h-4 -translate-x-2 bg-accent" : "merged-dot"}`}
                  />

                  {/* Centered card */}
                  <div
                    className={`mx-auto px-8 ${isLast ? "max-w-3xl" : "max-w-2xl"}`}
                  >
                    {isLast ? (
                      <div className="relative ring-2 ring-accent ring-offset-4 ring-offset-background rounded-lg overflow-hidden">
                        <ExperienceCard experience={exp} variant="shared" />
                        {/* Manga-style shine effect */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.6) 47%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.6) 53%, transparent 60%, transparent 100%)",
                            transform: "skewX(-20deg)",
                          }}
                          animate={{
                            x: ["-200%", "200%"],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 10,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    ) : (
                      <ExperienceCard experience={exp} variant="shared" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Synergy Section ── */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-border bg-card p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-6">
            {synergy.title}
          </h2>
          <div className="space-y-4">
            {synergy.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm text-muted-foreground leading-relaxed text-center"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </section>
      <section>
        <section className="max-w-3xl mx-auto px-4 md:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-border bg-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              Rester en contact
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex gap-4 justify-center">
                {personA.linkedin && (
                  <a
                    href={personA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg border border-border hover:bg-card transition"
                  >
                    {personA.name} sur LinkedIn
                  </a>
                )}
                <a
                  href="https://www.linkedin.com/in/philippe-lecommandeur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-border hover:bg-card transition"
                >
                  Contacter Philippe, notre maitre de stage, sur Linkedin.
                </a>
                {personB.linkedin && (
                  <a
                    href={personB.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg border border-border hover:bg-card transition"
                  >
                    {personB.name} sur LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
}

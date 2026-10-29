import { motion } from "framer-motion";
import type { PersonProfile } from "@/data/experiences";
import { Mail, Linkedin, Github } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface PersonHeaderProps {
  person: PersonProfile;
  variant: "a" | "b";
}

export default function PersonHeader({ person, variant }: PersonHeaderProps) {
  const accentClass = variant === "a" ? "person-a-accent" : "person-b-accent";
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: variant === "a" ? 0 : 0.15 }}
      className="text-center"
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <Avatar className="w-60 h-60 border-2 border-border">
          {person.avatar ? (
            <AvatarImage src={person.avatar} alt={person.name} />
          ) : null}
          <AvatarFallback className="text-5xl font-semibold bg-secondary text-secondary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>

      <h2 className={`text-2xl md:text-3xl font-bold ${accentClass}`}>
        {person.name}
      </h2>
      <p className="text-sm font-medium text-foreground/80 mt-1">
        {person.title}
      </p>
      <p className="text-xs text-muted-foreground mt-0.5">{person.subtitle}</p>

      {/* About Me */}
      {person.about && (
        <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed">
          {person.about}
        </p>
      )}

      <div className="flex justify-center gap-3 mt-3">
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        )}
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {person.github && (
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

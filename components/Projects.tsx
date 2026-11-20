import { projects } from "@/lib/profile";
import { Entry, Section, Tags } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="What I build in my own time, from the database up."
      bar="secondary"
      tone="tint"
    >
      <ul className="divide-y divide-base-content/10 border-y border-base-content/10">
        {projects.map((project) => (
          <li key={project.name}>
            <Entry period={project.period}>
              <h3 className="font-display text-2xl font-bold leading-tight">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-base-content/65">
                {project.blurb}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-base-content/80">
                {project.description}
              </p>
              <Tags tags={project.stack} className="mt-5" />
            </Entry>
          </li>
        ))}
      </ul>
    </Section>
  );
}

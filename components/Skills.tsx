import { skillGroups } from "@/lib/profile";
import { Section, Tags } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Key skills"
      intro="The working toolkit — full-stack TypeScript across web, backend and mobile, built on deep Angular roots, with the data-visualisation and design instincts kept just as sharp."
    >
      <dl className="divide-y divide-base-content/10 border-y border-base-content/10">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="reveal grid gap-3 py-5 sm:grid-cols-12 sm:gap-8"
          >
            <dt className="font-semibold sm:col-span-3 sm:pt-1">
              {group.label}
            </dt>
            <dd className="sm:col-span-9">
              <Tags tags={group.skills} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

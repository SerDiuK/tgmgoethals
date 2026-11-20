import { education } from "@/lib/profile";
import { Entry, Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      intro="A bachelor's in agro- and biotechnology. I taught myself to code alongside it."
      bar="secondary"
    >
      <ul className="divide-y divide-base-content/10 border-y border-base-content/10">
        {education.map((school) => (
          <li key={school.institution}>
            <Entry period={school.period}>
              <h3 className="font-bold">{school.field}</h3>
              <p className="mt-1 text-base-content/70">{school.institution}</p>
            </Entry>
          </li>
        ))}
      </ul>
    </Section>
  );
}

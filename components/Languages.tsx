import { languages } from "@/lib/profile";
import { Section } from "./Section";

const SCALE = [1, 2, 3, 4, 5];

export function Languages() {
  return (
    <Section
      id="languages"
      title="Language skills"
      intro="Two native, two at a professional level — enough to feel at home across Belgium, France and Spain."
      bar="secondary"
      tone="tint"
    >
      <ul className="grid grid-cols-2 gap-px border border-base-content/10 bg-base-content/10 sm:grid-cols-4">
        {languages.map((lang) => (
          <li
            key={lang.name}
            className="reveal flex flex-col items-center gap-2 bg-base-100 px-4 py-8 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">
              {lang.name}
            </span>
            <span className="text-sm text-base-content/70">{lang.level}</span>
            <span
              className="mt-1 flex gap-1"
              role="img"
              aria-label={`Proficiency: ${lang.proficiency} out of 5`}
            >
              {SCALE.map((n) => (
                <span
                  key={n}
                  className={`h-1.5 w-5 ${
                    n <= lang.proficiency ? "bg-primary" : "bg-base-content/15"
                  }`}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

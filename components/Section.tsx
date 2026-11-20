import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  id: string;
  title: string;
  intro?: ReactNode;
  bar?: "primary" | "secondary";
  tone?: "base" | "tint";
  children: ReactNode;
}

export function Section({
  id,
  title,
  intro,
  bar = "primary",
  tone = "base",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${tone === "tint" ? "bg-base-200" : ""}`}
    >
      <Container>
        <div
          className={`border-l-8 pl-6 sm:pl-10 ${
            bar === "secondary" ? "border-secondary" : "border-primary"
          }`}
        >
          <header className="reveal">
            <h2 className="font-display text-3xl font-bold leading-none sm:text-4xl">
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-base-content/75 sm:text-lg">
                {intro}
              </p>
            ) : null}
          </header>
          <div className="mt-10 sm:mt-12">{children}</div>
        </div>
      </Container>
    </section>
  );
}

export function Entry({
  period,
  place,
  children,
}: {
  period: ReactNode;
  place?: string;
  children: ReactNode;
}) {
  return (
    <div className="reveal grid gap-x-8 gap-y-1 py-8 sm:grid-cols-12">
      <p className="font-display text-lg font-light leading-snug text-base-content/80 sm:col-span-3">
        {period}
      </p>
      {place ? (
        <p className="font-display text-lg font-light leading-snug text-base-content/60 sm:order-last sm:col-span-2">
          {place}
        </p>
      ) : null}
      <div className={`mt-2 sm:mt-0 ${place ? "sm:col-span-7" : "sm:col-span-9"}`}>
        {children}
      </div>
    </div>
  );
}

export function Tags({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-sm bg-primary/8 px-2.5 py-1 text-sm text-primary"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

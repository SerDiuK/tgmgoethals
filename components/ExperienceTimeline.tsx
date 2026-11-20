import { jobs } from "@/lib/profile";
import { Entry, Section, Tags } from "./Section";

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      title="Work experience"
      intro="Twelve years across Barcelona, Paris and Belgium, from data-rich Angular interfaces to a full-stack marketplace on web and mobile."
    >
      <ol className="divide-y divide-base-content/10 border-y border-base-content/10">
        {jobs.map((job) => (
          <li key={job.company}>
            <Entry
              period={
                <>
                  {job.period}
                  {job.current ? (
                    <span className="badge badge-secondary badge-sm ml-2 align-middle font-sans font-semibold">
                      Now
                    </span>
                  ) : null}
                </>
              }
              place={job.location}
            >
              <h3 className="font-display text-2xl font-bold leading-tight">
                {job.company}
                {job.via ? (
                  <span className="ml-2 font-sans text-sm font-normal text-base-content/60">
                    {job.via}
                  </span>
                ) : null}
              </h3>
              {job.blurb ? (
                <p className="mt-1 text-sm text-base-content/65">{job.blurb}</p>
              ) : null}

              <ul className="mt-4 space-y-1">
                {job.roles.map((role) => (
                  <li key={role.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <span className="font-bold">{role.title}</span>
                      {job.roles.length > 1 ? (
                        <span className="font-display font-light text-base-content/60">
                          {role.period}
                        </span>
                      ) : null}
                    </div>
                    {role.description ? (
                      <p className="mt-1 text-sm leading-relaxed text-base-content/75">
                        {role.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>

              {job.highlights ? (
                <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-base-content/80 marker:text-primary">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}

              {job.stack ? <Tags tags={job.stack} className="mt-5" /> : null}
            </Entry>
          </li>
        ))}
      </ol>
    </Section>
  );
}

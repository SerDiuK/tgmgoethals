import { profile, hobbies, type HobbyIcon } from "@/lib/profile";
import { Section } from "./Section";
import { IconBoxing, IconCooking, IconMarkets, IconPadel } from "./icons";

const hobbyIcon: Record<HobbyIcon, typeof IconBoxing> = {
  boxing: IconBoxing,
  padel: IconPadel,
  cooking: IconCooking,
  markets: IconMarkets,
};

export function About() {
  return (
    <Section id="about" title="Profile">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="reveal space-y-5 lg:col-span-7">
          {profile.summary.map((para) => (
            <p
              key={para}
              className="text-pretty text-lg leading-relaxed text-base-content/85"
            >
              {para}
            </p>
          ))}
        </div>

        <figure className="reveal self-start bg-base-200 p-7 sm:p-8 lg:col-span-5">
          <blockquote className="font-display text-3xl font-light leading-tight">
            “Make it work, make it right, make it fast.”
          </blockquote>
          <figcaption className="mt-3">
            <span className="block font-display text-lg font-light text-base-content/70">
              Kent Beck
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="reveal mt-14">
        <h3 className="font-display text-2xl font-bold">Interests</h3>
        <ul className="mt-6 grid grid-cols-2 gap-px border border-base-content/10 bg-base-content/10 sm:grid-cols-4">
          {hobbies.map((hobby) => {
            const Icon = hobbyIcon[hobby.icon];
            return (
              <li
                key={hobby.label}
                className="flex flex-col items-center gap-3 bg-base-100 px-4 py-8 text-center"
              >
                <Icon className="h-7 w-7 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wide text-base-content/80">
                  {hobby.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

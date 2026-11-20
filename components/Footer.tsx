import { profile, socials, type SocialKey } from "@/lib/profile";
import { Container } from "./Section";
import { ArrowUpRight, LogoGitHub, LogoLinkedIn } from "./icons";

const brandIcon: Record<SocialKey, typeof LogoLinkedIn> = {
  linkedin: LogoLinkedIn,
  github: LogoGitHub,
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t-8 border-secondary bg-primary text-primary-content"
    >
      <Container className="py-16 sm:py-24">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Contact</h2>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-primary-content/80 sm:text-lg">
          Always glad to talk product engineering, frontend architecture,
          padel, or our two cats.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {socials.map((social) => {
            const Icon = brandIcon[social.key];
            return (
              <li key={social.key}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-box border border-primary-content/20 p-5 transition-colors hover:border-secondary hover:bg-primary-content/5"
                >
                  <Icon className="h-6 w-6 shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{social.label}</span>
                    <span className="block truncate text-sm text-primary-content/65">
                      {social.handle}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-primary-content/50 transition-colors group-hover:text-secondary" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 flex flex-col gap-2 border-t border-primary-content/20 pt-6 text-sm text-primary-content/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {profile.name} · {profile.location}
          </p>
          <p>{`© ${new Date().getFullYear()} · Built with Next.js, Tailwind & daisyUI`}</p>
        </div>
      </Container>
    </footer>
  );
}

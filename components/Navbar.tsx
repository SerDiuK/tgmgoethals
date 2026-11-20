import { LogoMark } from "./icons";
import { MobileMenu } from "./MobileMenu";
import { cv, profile } from "@/lib/profile";

const links = [
  { href: "#about", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-5xl items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label={`${profile.name}, back to top`}
        >
          <LogoMark className="h-7 w-auto" />
          <span className="font-display text-xl font-bold">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-base-content/75 decoration-secondary decoration-2 underline-offset-8 transition-colors hover:text-primary hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={cv} download className="btn btn-outline btn-sm">
              Download CV
            </a>
          </li>
        </ul>

        <MobileMenu links={links} cv={cv} />
      </nav>
    </header>
  );
}

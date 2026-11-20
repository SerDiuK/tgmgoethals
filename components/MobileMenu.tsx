"use client";

import { useCallback, type MouseEvent } from "react";
import { IconMenu } from "./icons";

export function MobileMenu({
  links,
  cv,
}: {
  links: { href: string; label: string }[];
  cv: string;
}) {
  const closeMenu = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const menu = event.currentTarget.closest("details");
    if (menu) {
      menu.open = false;
    }
  }, []);

  return (
    <details className="dropdown dropdown-end md:hidden">
      <summary
        className="btn btn-ghost btn-sm btn-square"
        aria-label="Open menu"
      >
        <IconMenu className="h-5 w-5" />
      </summary>
      <ul className="dropdown-content menu mt-3 w-52 gap-1 rounded-box border border-base-content/10 bg-base-100 p-3 shadow-xl">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu} className="font-semibold">
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href={cv} download onClick={closeMenu} className="font-semibold">
            Download CV
          </a>
        </li>
      </ul>
    </details>
  );
}

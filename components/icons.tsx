import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBoxing(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M8 15.5V9.2C8 6.3 10 4 12.8 4h.7C16.1 4 18 6.1 18 8.7v3.6c0 1.9-1.4 3.2-3.2 3.2H8Z" />
      <path d="M8 10.5H6.9A1.9 1.9 0 0 0 5 12.4v.2c0 1.6 1.3 2.9 2.9 2.9" />
      <path d="M8.5 15.5v3.7c0 .5.4.8.8.8h6.4c.4 0 .8-.3.8-.8v-3.7" />
      <path d="M10.5 17.8h4" />
      <path d="M11.5 8.5c1.2-.6 2.8-.6 4 0" />
    </svg>
  );
}

export function IconPadel(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M12 2.5c3.3 0 5.5 2.4 5.5 5.7 0 3.6-2.4 6.6-5.5 6.6s-5.5-3-5.5-6.6c0-3.3 2.2-5.7 5.5-5.7Z" />
      <path d="M10.2 14.2 11 16.5h2l.8-2.3" />
      <path d="M11 16.5v4.2c0 .5.4.8.9.8h.2c.5 0 .9-.3.9-.8v-4.2" />
      <path d="M10 7h.01M14 7h.01M12 9h.01M10 11h.01M14 11h.01" strokeWidth={1.8} />
      <circle cx="19" cy="18.5" r="1.8" />
    </svg>
  );
}

export function IconCooking(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M5 11.5h14v5a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 16.5Z" />
      <path d="M3 13.2h2M19 13.2h2" />
      <path d="M5.5 11.5c0-2 2.9-3.2 6.5-3.2s6.5 1.2 6.5 3.2" />
      <path d="M12 8.3V7.2" />
      <path d="M9.5 5.5c-.7-.9.7-1.6 0-2.5M14.5 5.5c-.7-.9.7-1.6 0-2.5" />
    </svg>
  );
}

export function IconMarkets(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M6 4v4M6 15v5M12 3v2M12 11v5M18 8v3M18 17v4" />
      <rect x="4.5" y="8" width="3" height="7" rx=".6" />
      <rect x="10.5" y="5" width="3" height="6" rx=".6" />
      <rect x="16.5" y="11" width="3" height="6" rx=".6" fill="currentColor" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function LogoLinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function LogoGitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.3.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="56.4 26.3 55.2 39.4" aria-hidden {...props}>
      <path
        className="fill-primary"
        d="M85.06 49.04C83.75 52.34 80.49 54.68 76.66 54.68C71.68 54.68 67.64 50.72 67.64 45.84C67.64 40.97 71.68 37.02 76.66 37.02C77.38 37.02 78.08 37.11 78.76 37.27L73.05 26.61C63.74 28.27 56.68 36.25 56.68 45.84C56.68 56.65 65.63 65.41 76.66 65.41C82.17 65.41 87.16 63.22 90.77 59.7Z"
      />
      <path
        className="fill-secondary"
        d="M104.43 33.95L98.6 44.85L88.83 26.61L75.02 26.61L91.7 57.75L93.67 61.43L95.81 65.43L95.85 65.41L101.29 65.41L111.29 46.77Z"
      />
    </svg>
  );
}

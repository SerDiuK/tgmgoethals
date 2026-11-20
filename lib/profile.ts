export type SocialKey = "linkedin" | "github";

interface Social {
  key: SocialKey;
  label: string;
  href: string;
  handle: string;
}

interface Role {
  title: string;
  period: string;
  description?: string;
}

interface Job {
  company: string;
  via?: string;
  location: string;
  period: string;
  current?: boolean;
  blurb?: string;
  roles: Role[];
  highlights?: string[];
  stack?: string[];
}

interface Project {
  name: string;
  period: string;
  blurb: string;
  description: string;
  stack: string[];
}

interface SkillGroup {
  label: string;
  skills: string[];
}

interface Language {
  name: string;
  level: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
}

interface School {
  institution: string;
  field: string;
  period: string;
}

export type HobbyIcon = "boxing" | "padel" | "cooking" | "markets";

interface Hobby {
  label: string;
  icon: HobbyIcon;
}

export const profile = {
  name: "Thomas Goethals",
  role: "Founding Engineer",
  company: "CardNexus",
  location: "Barcelona, Catalonia",
  tagline:
    "Senior full-stack engineer and tech lead, previously at Kahoot! — twelve years of building web products.",
  summary: [
    "Tech lead and full-stack engineer. As founding engineer at CardNexus, a trading card marketplace with 100k+ users, I picked technologies and built features end to end across the Next.js web app, the Node.js and PostgreSQL backend and the React Native app, and drove SEO, shopping feeds and ad attribution.",
    "Before that I led a 6–7 person product team at Kahoot! as tech lead, after years of data-heavy Angular work at WeMaintain, Renault Digital and Diabolocom, where I led a team of three. Along the way I've mentored engineers and interviewed candidates. I trained in applied visual arts, and I work best close to design and product.",
    "Day to day I build AI-first, with Claude Code, custom agent skills and MCP servers.",
  ],
};

export const photo = {
  src: "/thomas.jpg",
  alt: "Thomas Goethals",
};

export const socials: Social[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thomas-g-17334386/",
    handle: "in/thomas-g-17334386",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/SerDiuK",
    handle: "SerDiuK",
  },
];

export const cv = "/thomas-goethals-cv.pdf";

export const hobbies: Hobby[] = [
  { label: "Boxing", icon: "boxing" },
  { label: "Padel", icon: "padel" },
  { label: "Cooking", icon: "cooking" },
  { label: "Financial markets", icon: "markets" },
];

export const jobs: Job[] = [
  {
    company: "CardNexus",
    location: "Barcelona, Spain",
    period: "Feb 2025 — Present",
    current: true,
    blurb:
      "Trading card marketplace and collection manager, web and mobile, with 100k+ users.",
    roles: [{ title: "Founding Engineer", period: "Feb 2025 — Present" }],
    highlights: [
      "Built price negotiation between buyers and sellers, end to end on web and mobile: API, cart and checkout, chat and notifications. Also led unique cards (signed, altered and misprint copies).",
      "Led ad attribution, showing which ads drive sales: server-side conversion APIs for Meta, Reddit and TikTok, deduplicated against the browser pixels; Google Ads enhanced conversions; first- and last-touch UTM attribution; AppsFlyer with SKAN and deep links.",
      "Got listings in front of shoppers on Google and Meta: set up the Merchant Center and catalog feeds for the EU and US, updated in near real time, and handled most of the technical SEO for hundreds of thousands of product pages.",
      "Built much of the web app: the original user service, inventory and import tools, lists, a drag-and-drop binder view. Set up the design system (Storybook, Figma tokens) and built 20+ of its components.",
      "Chose and set up the services for chat, notifications and cookie consent: Stream Chat, Novu, and Termly with Google Consent Mode v2.",
      "Looked after quality: reviewed 195 pull requests, mostly for the React Native app, and wrote end-to-end tests for the Stripe checkout.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Jotai",
      "TanStack Query",
      "Tailwind CSS",
      "Node.js",
      "oRPC",
      "PostgreSQL",
      "Drizzle",
      "React Native",
      "Expo",
      "Stripe",
      "Cloudflare Workers",
      "Turborepo",
    ],
  },
  {
    company: "Kahoot!",
    location: "Barcelona, Spain",
    period: "Jul 2022 — Feb 2025",
    blurb: "Game-based learning platform used by millions worldwide.",
    roles: [
      { title: "Technical Lead", period: "Nov 2023 — Feb 2025" },
      { title: "Senior Frontend Developer", period: "Jul 2022 — Nov 2023" },
    ],
    highlights: [
      "Led a 6–7 person product team as tech lead, mentoring its engineers and interviewing candidates.",
      "Migrated a product from AngularJS to Angular.",
      "Built in-app chat with a third-party chat SDK.",
    ],
    stack: ["Angular", "AngularJS", "RxJS", "TypeScript"],
  },
  {
    company: "WeMaintain",
    location: "Paris, then remote",
    period: "Jul 2020 — Jul 2022",
    blurb:
      "Tech-enabled lift maintenance — engineers' craft paired with predictive technology.",
    roles: [
      { title: "Staff Engineer", period: "Jul 2021 — Jul 2022" },
      { title: "Senior Frontend Developer", period: "Jul 2020 — Jul 2021" },
    ],
    highlights: [
      "Built data-rich interfaces for elevator maintenance in an Nx monorepo, with d3.js visualisations and in-browser PDF display and editing.",
    ],
    stack: ["Angular", "NGXS", "d3.js", "Nx"],
  },
  {
    company: "Renault Digital",
    location: "Paris, France",
    period: "Apr 2019 — Jul 2020",
    blurb: "The Renault group's digital arm.",
    roles: [{ title: "Senior Frontend Developer", period: "Apr 2019 — Jul 2020" }],
    highlights: [
      "Built visualisations of vehicle lifecycles and live telemetry for an autonomous-vehicle project.",
      "Mentored two Simplon trainees through a six-month placement in the team.",
    ],
    stack: ["Angular", "NgRx"],
  },
  {
    company: "Diabolocom",
    location: "Paris, France",
    period: "Jul 2017 — Mar 2019",
    blurb: "Cloud contact-centre and telephony software.",
    roles: [
      { title: "Lead Frontend Developer", period: "Mar 2018 — Mar 2019" },
      { title: "Frontend Developer", period: "Jul 2017 — Mar 2018" },
    ],
    highlights: [
      "Led three frontend engineers across Paris and Russia on the company's contact-centre software, and interviewed candidates.",
    ],
    stack: ["Angular"],
  },
  {
    company: "European Commission JRC",
    via: "via Cronos International",
    location: "Geel, Belgium",
    period: "Jun 2016 — Jul 2017",
    blurb: "A frontend consulting placement through Cronos International.",
    roles: [
      {
        title: "Frontend Developer",
        period: "Jun 2016 — Jul 2017",
        description: "Financial applications in Angular.",
      },
    ],
    stack: ["Angular"],
  },
  {
    company: "Strak Design",
    location: "Antwerp, Belgium",
    period: "Sep 2014 — Aug 2016",
    blurb: "My own freelance design studio.",
    roles: [
      {
        title: "Founder & Web Designer",
        period: "Sep 2014 — Aug 2016",
        description:
          "Designed and built professional, responsive websites for small businesses.",
      },
    ],
    stack: ["Web design", "Responsive", "Adobe CS"],
  },
];

export const projects: Project[] = [
  {
    name: "Marktperspectief",
    period: "2026",
    blurb: "Personal investment dashboard with a Claude connector.",
    description:
      "Tracks my portfolio from broker exports: holdings, closed positions, sold puts and dividends, valued every day with market prices and ECB exchange rates. It is also a remote MCP server behind passkey and OAuth sign-in, so Claude can log trades and investment theses from a chat, each one confirmed before it is saved.",
    stack: [
      "Next.js",
      "TypeScript",
      "Drizzle",
      "Turso",
      "Better Auth",
      "MCP",
      "Vercel",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Leadership",
    skills: ["Technical leadership", "Mentoring", "Interviewing", "Code review"],
  },
  {
    label: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "RxJS",
      "NgRx",
      "NGXS",
      "Jotai",
      "TanStack Query",
      "Tailwind CSS",
      "d3.js",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "PostgreSQL", "Drizzle", "oRPC", "GraphQL"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    label: "Integrations",
    skills: ["Stripe", "Stream Chat", "Novu", "AppsFlyer", "Braze", "Amplitude"],
  },
  {
    label: "Growth",
    skills: [
      "Technical SEO",
      "Structured data",
      "Google Merchant Center",
      "Meta catalogs",
      "Google Tag Manager",
      "Conversion APIs",
      "Consent management",
    ],
  },
  {
    label: "Testing",
    skills: ["Vitest", "Playwright", "Cypress", "Storybook"],
  },
  {
    label: "Platform",
    skills: [
      "Turborepo",
      "Nx",
      "GitHub Actions",
      "Docker",
      "Cloudflare Workers",
      "OpenTelemetry",
    ],
  },
  {
    label: "Design",
    skills: ["Figma", "Design systems", "Adobe Creative Suite"],
  },
  {
    label: "AI",
    skills: ["Claude Code", "Agent skills", "MCP servers"],
  },
];

export const languages: Language[] = [
  { name: "Dutch", level: "Native / Bilingual", proficiency: 5 },
  { name: "English", level: "Native / Bilingual", proficiency: 5 },
  { name: "French", level: "Professional Working · B2", proficiency: 3 },
  { name: "Spanish", level: "Professional Working · B2", proficiency: 3 },
];

export const education: School[] = [
  {
    institution: "Thomas More University of Applied Sciences",
    field: "BSc, Agro- and Biotechnology",
    period: "2013 — 2016",
  },
];

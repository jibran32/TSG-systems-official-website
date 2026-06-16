/**
 * Site-wide content: brand identity, contact details, navigation, and the
 * shared logo asset paths. Single source of truth for anything referenced in
 * more than one place (nav + footer, metadata, etc.).
 */

export const site = {
  name: "TSG Systems",
  tagline: "Software · Automation · Odoo",
  description:
    "A software studio building custom applications, automations, and Odoo solutions for growing businesses.",
  location: "Islamabad, PK",
  email: "hello@tsgsystems.com",
  phone: "+920000000000",
  linkedin: "#",
};

export const metadata = {
  title: "TSG Systems — Software, Mobile Apps, AI Agents & Automation",
  description:
    "TSG Systems is a software studio. We build custom software and cross-platform mobile apps, AI agents, n8n automations, and Odoo solutions.",
};

/** Theme-paired logo artwork served from /public. */
export const logo = {
  light: { src: "/logo-light.png", width: 1920, height: 1000 },
  dark: { src: "/logo-dark.png", width: 1902, height: 990 },
  alt: "TSG Systems",
};

/** Primary navigation links (rendered in the header pill). */
export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

/** Scrolling tech marquee items. */
export const techStack = [
  "Python",
  "Odoo",
  "Next.js",
  "n8n",
  "Flutter",
  "React Native",
  "OpenAI",
  "PostgreSQL",
  "React",
  "Docker",
  "AWS",
];

/** Footer link columns. */
export const footerColumns = [
  {
    heading: "Services",
    links: [
      { href: "#services", label: "Software Development" },
      { href: "#services", label: "Mobile App Development" },
      { href: "#services", label: "AI Agents" },
      { href: "#services", label: "Automations" },
      { href: "#services", label: "Odoo Development" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "#products", label: "Products" },
      { href: "#process", label: "Process" },
      { href: "#about", label: "About" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { href: `mailto:${site.email}`, label: site.email },
      { href: "#", label: site.location },
      { href: "#", label: "LinkedIn" },
    ],
  },
];

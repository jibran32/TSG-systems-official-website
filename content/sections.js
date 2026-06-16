/**
 * Content for each home-page section. Editing copy, reordering cards, or
 * swapping placeholders happens here — the section components stay purely
 * presentational and never hardcode text.
 */

export const hero = {
  eyebrow: "Islamabad-based software studio",
  // headline is split into animated words at runtime; the highlighted word
  // keeps its own span so the gradient + reveal still target it.
  headline: { before: "We build the ", highlight: "systems", after: " your business runs on." },
  lead: "TSG Systems ships custom software and cross-platform mobile apps, builds AI agents and n8n automations that kill manual work, and tailors Odoo to fit how your team actually operates.",
  cta: { primary: { href: "#contact", label: "Start a project →" }, secondary: { href: "#products", label: "See our products" } },
  card: {
    title: "What we do",
    rows: [
      { icon: "</>", title: "Custom software", body: "Web apps, APIs, internal tools" },
      { icon: "❒", title: "Mobile apps", body: "Cross-platform iOS & Android" },
      { icon: "✦", title: "AI & automation", body: "AI agents, n8n pipelines" },
      { icon: "◎", title: "Odoo development", body: "Modules, migrations, integrations" },
    ],
  },
};

export const services = {
  eyebrow: "Services",
  title: "Five things we do, done properly.",
  lead: "No buzzwords. Every engagement ships something real you can use — and that your team can keep running after we hand it over.",
  items: [
    {
      num: "01",
      icon: "</>",
      title: "Software Development",
      body: "Tailored web apps, dashboards, and APIs built around your process — designed to scale and easy to maintain.",
      points: ["Web & internal tools", "API design & integration", "Cloud deployment"],
      delay: "",
    },
    {
      num: "02",
      icon: "❒",
      title: "Mobile App Development",
      body: "Cross-platform apps from a single codebase — one build that ships to both iOS and Android without compromise.",
      points: ["iOS & Android, cross-platform", "Offline-ready & API-connected", "App Store & Play Store launch"],
      delay: "d1",
    },
    {
      num: "03",
      icon: "✦",
      title: "AI Agents",
      body: "Custom AI agents that read, decide, and act inside your workflows — wired to your own data and the tools you already use.",
      points: ["LLM-powered assistants", "RAG over your own data", "Tool & API integrations"],
      delay: "d2",
    },
    {
      num: "04",
      icon: "⚡",
      title: "Automations",
      body: "We map the repetitive work your team does by hand and replace it with reliable, monitored n8n pipelines.",
      points: ["n8n workflow automation", "Data sync between tools", "Scheduled jobs & alerts"],
      delay: "d3",
    },
    {
      num: "05",
      icon: "◎",
      title: "Odoo Development",
      body: "Custom modules, version migrations, and third-party integrations that make Odoo fit your business exactly.",
      points: ["Custom modules", "Migrations & upgrades", "Odoo ↔ external systems"],
      delay: "d4",
    },
  ],
};

// EDIT: replace these with your real launched products.
export const products = {
  eyebrow: "Products",
  title: "Things we've already shipped.",
  lead: "Built in-house, in production, and proof of how we work.",
  items: [
    { title: "Product One", badge: "Live", body: "One line on what it does and who it's for. Replace with your real launched product.", delay: "" },
    { title: "Product Two", badge: "Live", body: "One line on what it does and who it's for. Replace with your real launched product.", delay: "d1" },
    { title: "Product Three", badge: "Beta", body: "One line on what it does and who it's for. Replace with your real launched product.", delay: "d2" },
  ],
};

export const process = {
  eyebrow: "How we work",
  title: "A clear path from idea to running software.",
  steps: [
    { n: "01", title: "Discover", body: "We learn your workflow, goals, and constraints before writing a line of code." },
    { n: "02", title: "Design", body: "Architecture, scope, and a build plan you sign off on — no surprises." },
    { n: "03", title: "Build", body: "We ship in short cycles so you see progress weekly, not at the end." },
    { n: "04", title: "Support", body: "We deploy, document, and stay on to keep things running smoothly." },
  ],
};

// EDIT: only keep numbers you can stand behind.
export const stats = [
  { count: "40", suffix: "+", label: "Projects shipped", delay: "" },
  { count: "3", suffix: "", label: "Products launched", delay: "d1" },
  { count: "98", suffix: "%", label: "Client retention", delay: "d2" },
  { count: "12", suffix: "k+", label: "Hours automated", delay: "d3" },
];

// EDIT: replace with real client quotes, or remove <Testimonials /> from the page.
export const testimonials = {
  eyebrow: "In their words",
  title: "What working with us feels like.",
  quotes: [
    {
      text: "They didn't just build what we asked for — they understood the problem and shipped something better. The handover was clean and documented.",
      initials: "AK",
      name: "Client Name",
      role: "CEO, Company",
      delay: "",
    },
    {
      text: "The automations they set up saved our ops team hours every week. Reliable, well-monitored, and we actually own the whole thing.",
      initials: "MR",
      name: "Client Name",
      role: "Operations Lead, Company",
      delay: "d1",
    },
  ],
};

export const about = {
  eyebrow: "Why TSG Systems",
  title: "Engineers who care how it works after launch.",
  lead: "Plenty of teams can build a demo. We build software meant to live in production for years — readable, documented, and handed over without lock-in.",
  points: [
    { icon: "◷", title: "We ship on time", body: "Short cycles and clear scope keep projects predictable." },
    { icon: "⚙", title: "We own the whole stack", body: "From database to deployment, one team is accountable." },
    { icon: "⤓", title: "No lock-in", body: "You get the code, the docs, and the keys. Always." },
  ],
  code: `def automate(business):
    work = business.manual_tasks()
    for task in work:
        pipeline.connect(task)
        pipeline.schedule(task)
    return business.hours_saved

# less manual work, fewer errors
deploy(automate(your_company))`,
};

export const cta = {
  eyebrow: "Let's build",
  title: "Have something to build or automate?",
  lead: "Tell us what you're trying to do. We'll come back with a clear plan and an honest timeline — usually within a day.",
};

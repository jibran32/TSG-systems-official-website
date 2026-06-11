const SERVICES = [
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
];

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Services</span>
          <h2>Five things we do, done properly.</h2>
          <p className="lead">
            No buzzwords. Every engagement ships something real you can use — and that your
            team can keep running after we hand it over.
          </p>
        </div>
        <div className="cards">
          {SERVICES.map((s) => (
            <article className={`card tilt reveal ${s.delay}`} key={s.num}>
              <div className="spot" />
              <div className="num">{s.num}</div>
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

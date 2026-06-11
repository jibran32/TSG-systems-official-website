export default function Marquee() {
  const tech = ["Python", "Odoo", "Next.js", "n8n", "Flutter", "React Native", "OpenAI", "PostgreSQL", "React", "Docker", "AWS"];
  // duplicate the set so the -50% scroll loops seamlessly
  const items = [...tech, ...tech];
  return (
    <div className="strip" aria-hidden="true">
      <div className="track t1">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

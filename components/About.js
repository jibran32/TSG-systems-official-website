const POINTS = [
  { icon: "◷", title: "We ship on time", body: "Short cycles and clear scope keep projects predictable." },
  { icon: "⚙", title: "We own the whole stack", body: "From database to deployment, one team is accountable." },
  { icon: "⤓", title: "No lock-in", body: "You get the code, the docs, and the keys. Always." },
];

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="reveal">
            <span className="eyebrow">Why TSG Systems</span>
            <h2 style={{ margin: "16px 0 18px" }}>Engineers who care how it works after launch.</h2>
            <p className="lead">
              Plenty of teams can build a demo. We build software meant to live in production
              for years — readable, documented, and handed over without lock-in.
            </p>
            <div className="about-points">
              {POINTS.map((p) => (
                <div className="ap" key={p.title}>
                  <span className="ic">{p.icon}</span>
                  <div>
                    <b>{p.title}</b>
                    <p>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="code-panel reveal d2" aria-hidden="true">
            <div className="cp">
              <div className="bar"><i /><i /><i /></div>
              <pre>
{`def automate(business):
    work = business.manual_tasks()
    for task in work:
        pipeline.connect(task)
        pipeline.schedule(task)
    return business.hours_saved

# less manual work, fewer errors
deploy(automate(your_company))`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

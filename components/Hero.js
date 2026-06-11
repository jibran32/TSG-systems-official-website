export default function Hero() {
  return (
    <section className="hero" id="top">
      <canvas id="net" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow reveal in">Islamabad-based software studio</span>
            <h1 id="headline">
              We build the <span className="grad">systems</span> your business runs on.
            </h1>
            <p className="lead">
              TSG Systems ships custom software and cross-platform mobile apps, builds AI agents
              and n8n automations that kill manual work, and tailors Odoo to fit how your team
              actually operates.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary" data-magnetic>Start a project →</a>
              <a href="#products" className="btn">See our products</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="inner">
              <span className="ring" />
              <div className="k">What we do</div>
              <div className="hc-row">
                <span className="ic">{"</>"}</span>
                <div><b>Custom software</b><small>Web apps, APIs, internal tools</small></div>
              </div>
              <div className="hc-row">
                <span className="ic">❒</span>
                <div><b>Mobile apps</b><small>Cross-platform iOS & Android</small></div>
              </div>
              <div className="hc-row">
                <span className="ic">✦</span>
                <div><b>AI & automation</b><small>AI agents, n8n pipelines</small></div>
              </div>
              <div className="hc-row">
                <span className="ic">◎</span>
                <div><b>Odoo development</b><small>Modules, migrations, integrations</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#services" className="scrollcue" id="cue">
        <span className="mouse" />Scroll
      </a>
    </section>
  );
}

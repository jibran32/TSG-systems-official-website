import { hero } from "@/content/sections";

/**
 * Landing hero: animated headline, lead, CTAs, the "what we do" card, and the
 * node-network canvas (#net) the constellation effect draws into.
 */
export default function Hero() {
  return (
    <section className="hero" id="top">
      <canvas id="net" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow reveal in">{hero.eyebrow}</span>
            <h1 id="headline">
              {hero.headline.before}
              <span className="grad">{hero.headline.highlight}</span>
              {hero.headline.after}
            </h1>
            <p className="lead">{hero.lead}</p>
            <div className="hero-cta">
              <a href={hero.cta.primary.href} className="btn btn-primary" data-magnetic>
                {hero.cta.primary.label}
              </a>
              <a href={hero.cta.secondary.href} className="btn">
                {hero.cta.secondary.label}
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="inner">
              <span className="ring" />
              <div className="k">{hero.card.title}</div>
              {hero.card.rows.map((row) => (
                <div className="hc-row" key={row.title}>
                  <span className="ic">{row.icon}</span>
                  <div>
                    <b>{row.title}</b>
                    <small>{row.body}</small>
                  </div>
                </div>
              ))}
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

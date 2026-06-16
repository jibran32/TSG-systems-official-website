import { about } from "@/content/sections";

/** "Why us" — value points beside a decorative code panel. */
export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="reveal">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 style={{ margin: "16px 0 18px" }}>{about.title}</h2>
            <p className="lead">{about.lead}</p>
            <div className="about-points">
              {about.points.map((p) => (
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
              <pre>{about.code}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

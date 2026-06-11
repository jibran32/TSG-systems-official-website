const STEPS = [
  { n: "01", title: "Discover", body: "We learn your workflow, goals, and constraints before writing a line of code." },
  { n: "02", title: "Design", body: "Architecture, scope, and a build plan you sign off on — no surprises." },
  { n: "03", title: "Build", body: "We ship in short cycles so you see progress weekly, not at the end." },
  { n: "04", title: "Support", body: "We deploy, document, and stay on to keep things running smoothly." },
];

export default function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">How we work</span>
          <h2>A clear path from idea to running software.</h2>
        </div>
        <div className="process reveal">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

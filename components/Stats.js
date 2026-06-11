// EDIT: only keep numbers you can stand behind.
const STATS = [
  { count: "40", suffix: "+", label: "Projects shipped", delay: "" },
  { count: "3", suffix: "", label: "Products launched", delay: "d1" },
  { count: "98", suffix: "%", label: "Client retention", delay: "d2" },
  { count: "12", suffix: "k+", label: "Hours automated", delay: "d3" },
];

export default function Stats() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="stats">
          {STATS.map((s) => (
            <div className={`stat reveal ${s.delay}`} key={s.label}>
              <div className="num" data-count={s.count} data-suffix={s.suffix}>0</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

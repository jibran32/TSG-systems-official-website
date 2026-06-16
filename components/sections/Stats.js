import { stats } from "@/content/sections";

/** Animated count-up metrics (the count effect targets [data-count]). */
export default function Stats() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="stats">
          {stats.map((s) => (
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

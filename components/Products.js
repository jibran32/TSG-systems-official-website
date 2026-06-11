// EDIT: replace these three with your real launched products.
const PRODUCTS = [
  { title: "Product One", badge: "Live", body: "One line on what it does and who it's for. Replace with your real launched product.", delay: "" },
  { title: "Product Two", badge: "Live", body: "One line on what it does and who it's for. Replace with your real launched product.", delay: "d1" },
  { title: "Product Three", badge: "Beta", body: "One line on what it does and who it's for. Replace with your real launched product.", delay: "d2" },
];

export default function Products() {
  return (
    <section className="sec alt" id="products">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Products</span>
          <h2>Things we&apos;ve already shipped.</h2>
          <p className="lead">Built in-house, in production, and proof of how we work.</p>
        </div>
        <div className="products">
          {PRODUCTS.map((p) => (
            <article className={`product reveal ${p.delay}`} key={p.title}>
              <div className="thumb">
                <div className="grid" />
                <i className="b1" />
                <i className="b2" />
                <span className="badge">{p.badge}</span>
              </div>
              <div className="body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <a href="#contact" className="more">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

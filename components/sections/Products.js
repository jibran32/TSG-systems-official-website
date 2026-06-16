import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/content/sections";

/**
 * Shipped-products showcase. Card thumbnails are pure CSS art. `heading` can be
 * disabled when a page supplies its own PageHeader.
 */
export default function Products({ heading = true }) {
  return (
    <section className="sec alt" id="products">
      <div className="wrap">
        {heading && <SectionHeading eyebrow={products.eyebrow} title={products.title} lead={products.lead} />}
        <div className="products">
          {products.items.map((p) => (
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
                <Link href="/contact" className="more">Learn more →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

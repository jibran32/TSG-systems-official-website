/**
 * The hero band for every inner page (Services, Products, Team, …). Gives each
 * screen a consistent, professional masthead: a breadcrumb back home, a mono
 * eyebrow, a large gradient title, and an optional lead. Purely presentational
 * and content-driven — the page passes the copy in.
 */
import Link from "next/link";

export default function PageHeader({ eyebrow, title, lead, breadcrumb }) {
  return (
    <header className="page-header">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="here">{breadcrumb || eyebrow}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </header>
  );
}

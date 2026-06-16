import Logo from "@/components/ui/Logo";
import { site, footerColumns } from "@/content/site";

/**
 * Site footer: brand blurb, link columns, the large centred watermark, and
 * the bottom legal row. Link columns are data-driven from content/site.
 */
export default function Footer() {
  return (
    <footer>
      <div className="foot-watermark">{site.name}</div>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo />
            <p className="foot-about">{site.description}</p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              {col.links.map((link, i) => (
                <a href={link.href} key={`${link.label}-${i}`}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 {site.name}. All rights reserved.</span>
          <span>Built with care</span>
        </div>
      </div>
    </footer>
  );
}

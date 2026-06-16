import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks } from "@/content/site";

/**
 * Sticky header: brand logo (left), navigation pill + primary CTA, theme
 * toggle, and the mobile menu button. Open/close behaviour is attached by
 * lib/effects (it targets #menuBtn / #navlinks).
 */
export default function Nav() {
  return (
    <header id="hdr">
      <div className="wrap nav">
        <Logo />
        <nav className="nav-links" id="navlinks">
          <div className="nav-menu">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href + link.label}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary" data-magnetic>
            Start a project
          </a>
        </nav>
        <ThemeToggle />
        <button className="menu-toggle" id="menuBtn" aria-label="Menu" aria-expanded="false">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NavLink from "@/components/ui/NavLink";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks, primaryCta } from "@/content/site";

/**
 * Sticky header: brand logo (left), route navigation pill + primary CTA, theme
 * toggle, and the mobile menu button. Open/close behaviour is attached by
 * lib/effects (it targets #menuBtn / #navlinks); active-link state is handled
 * per-link by NavLink.
 */
export default function Nav() {
  return (
    <header id="hdr">
      <div className="wrap nav">
        <Logo />
        <nav className="nav-links" id="navlinks">
          <div className="nav-menu">
            {navLinks.map((link) => (
              <NavLink href={link.href} key={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link href={primaryCta.href} className="btn btn-primary" data-magnetic>
            {primaryCta.label}
          </Link>
        </nav>
        <ThemeToggle />
        <button className="menu-toggle" id="menuBtn" aria-label="Menu" aria-expanded="false">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

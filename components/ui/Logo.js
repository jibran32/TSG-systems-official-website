import Link from "next/link";
import { logo, site } from "@/content/site";

/**
 * Brand logo that links home. Both artworks are rendered; CSS reveals the
 * one matching the active theme (full-colour on light, white on dark).
 * Shared by the header and footer so the markup lives in one place.
 */
export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} — home`}>
      <img
        className="logo-img logo-on-light"
        src={logo.light.src}
        width={logo.light.width}
        height={logo.light.height}
        alt={logo.alt}
      />
      <img
        className="logo-img logo-on-dark"
        src={logo.dark.src}
        width={logo.dark.width}
        height={logo.dark.height}
        alt={logo.alt}
      />
    </Link>
  );
}

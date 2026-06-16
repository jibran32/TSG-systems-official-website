"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * A header navigation link that marks itself active for the current route.
 * Kept tiny and client-only so the rest of the header can stay a server
 * component; presentation (the `.active` style) lives in globals.css.
 */
export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link href={href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
      {children}
    </Link>
  );
}

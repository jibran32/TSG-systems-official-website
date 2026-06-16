"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initEffects } from "@/lib/effects";

/**
 * Mount point for all client-side interactivity. The work lives in
 * lib/effects; this component just runs it after mount and tears it down on
 * unmount. Rendered once at the document level.
 *
 * Because the layout persists across App-Router navigations, we re-run the
 * effects whenever the route changes — newly mounted page elements need their
 * reveal/tilt/count-up wiring too. Every effect is cleanup-safe and guards for
 * missing elements, so re-initialising is a no-op where nothing applies.
 */
export default function SiteEffects() {
  const pathname = usePathname();
  useEffect(() => initEffects(), [pathname]);
  return null;
}

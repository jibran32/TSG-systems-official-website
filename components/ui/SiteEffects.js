"use client";
import { useEffect } from "react";
import { initEffects } from "@/lib/effects";

/**
 * Mount point for all client-side interactivity. The work lives in
 * lib/effects; this component just runs it after mount and tears it down on
 * unmount. Rendered once at the document level.
 */
export default function SiteEffects() {
  useEffect(() => initEffects(), []);
  return null;
}

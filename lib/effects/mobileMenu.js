import { listenerBag } from "../dom";

/**
 * Mobile nav drawer: toggles open state on the menu button and the links
 * container, keeps the hamburger animation and aria-expanded in sync, and
 * closes the drawer when any link is tapped.
 */
export function mobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navlinks = document.getElementById("navlinks");
  if (!menuBtn || !navlinks) return undefined;

  const bag = listenerBag();

  const sync = (open) => {
    navlinks.classList.toggle("open", open);
    menuBtn.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  bag.on(menuBtn, "click", () => sync(!navlinks.classList.contains("open")));
  navlinks.querySelectorAll("a").forEach((a) => bag.on(a, "click", () => sync(false)));

  return bag.cleanup;
}

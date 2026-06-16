/**
 * Theme domain — the single source of truth for how light/dark is read,
 * written, and persisted. Components and effects depend on these helpers
 * rather than poking at `document`/`localStorage` directly, so the storage
 * key, attribute name, and default live in exactly one place.
 */

export const THEME_STORAGE_KEY = "theme";
export const THEME_ATTRIBUTE = "data-theme";
export const LIGHT = "light";
export const DARK = "dark";
export const DEFAULT_THEME = LIGHT;

/**
 * Inline script injected into <head> so the saved/default theme is applied
 * before first paint (no flash of the wrong colours). Kept as a string
 * because it must run synchronously, ahead of React hydration.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}')||'${DEFAULT_THEME}';document.documentElement.setAttribute('${THEME_ATTRIBUTE}',t);}catch(e){document.documentElement.setAttribute('${THEME_ATTRIBUTE}','${DEFAULT_THEME}');}})();`;

/** Current theme as read from the document. */
export function getTheme() {
  return document.documentElement.getAttribute(THEME_ATTRIBUTE) === LIGHT ? LIGHT : DARK;
}

export function isLight() {
  return getTheme() === LIGHT;
}

/** Apply a theme to the document and persist the choice. */
export function setTheme(theme) {
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {
    /* storage may be unavailable (private mode); theme still applies for the session */
  }
}

/** Flip between light and dark. */
export function toggleTheme() {
  setTheme(getTheme() === LIGHT ? DARK : LIGHT);
}

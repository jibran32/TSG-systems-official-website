/**
 * Tunable constants for the interactive effects. Centralised so the visual
 * "feel" can be adjusted in one place without reading through animation code.
 * Values mirror the original inline numbers exactly — behaviour is unchanged.
 */

export const HEADLINE = {
  baseDelay: 0.15, // seconds before the first word animates in
  stagger: 0.08, // seconds added per subsequent word
};

export const SCROLL = {
  navScrolledAfter: 20, // px scrolled before the header gets its border/bg
  cueHiddenAfter: 120, // px scrolled before the "scroll" cue fades out
  cueOpacity: ".7",
};

export const REVEAL_THRESHOLD = 0.14;

export const COUNT_UP = {
  durationMs: 1300,
  threshold: 0.6,
};

export const TILT = {
  perspective: 900,
  maxRotateDeg: 7,
  lift: -4, // px translateY while hovered
};

export const MAGNET = {
  strengthX: 0.22,
  strengthY: 0.35,
  offsetY: -2,
};

export const PARALLAX = {
  ease: 0.06, // how quickly layers chase the pointer
  depthScale: 48,
  driftFreqX: 0.3,
  driftFreqY: 0.24,
};

export const NETWORK = {
  areaPerNode: 15000, // larger viewport → more nodes (capped)
  maxNodes: 74,
  speed: 0.32,
  linkDistance: 128,
  mouseDistance: 175,
  nodeRadius: 1.7,
  staticDotCount: 40, // reduced-motion fallback
  // Per-theme stroke/fill so the scene reads on both white and dark backgrounds.
  light: { lineRGB: "30,110,82", lineMax: 0.5, mouseRGB: "89,140,30", mouseMax: 0.9, mouseWidth: 1.4, nodeFill: "rgba(89,140,30,.85)", staticFill: "rgba(89,140,30,.7)" },
  dark: { lineRGB: "19,162,142", lineMax: 0.22, mouseRGB: "154,201,60", mouseMax: 0.6, mouseWidth: 1, nodeFill: "rgba(19,162,142,.6)", staticFill: "rgba(19,162,142,.4)" },
};

/**
 * Fixed decorative backdrop: parallax glow blobs, grid + dot layers, the
 * node-network constellation, the cursor spotlight, film grain, and the scroll
 * progress bar. Purely visual; the parallax/spotlight/network motion is driven
 * by lib/effects via the element ids and `data-depth` / `data-drift` hooks.
 *
 * The constellation canvas (#net) lives here — not in the hero — so the
 * pointer-connecting animation runs site-wide, on every page, behind content.
 */
export default function Background() {
  return (
    <>
      <div className="bg" id="bg">
        <div className="layer glow g1" data-depth="1" data-drift="14" />
        <div className="layer glow g2" data-depth="-0.7" data-drift="18" />
        <div className="layer glow g3" data-depth="0.5" data-drift="12" />
        <div className="layer grid-layer" data-depth="0.22" data-drift="0" />
        <div className="layer dots-layer" data-depth="1.35" data-drift="6" />
      </div>
      <div className="net-bg" aria-hidden="true">
        <canvas id="net" data-net />
      </div>
      <div className="spotlight" id="spot" />
      <div className="grain" />
      <div className="progress" id="prog" />
    </>
  );
}

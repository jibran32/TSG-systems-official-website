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
      <div className="spotlight" id="spot" />
      <div className="grain" />
      <div className="progress" id="prog" />
    </>
  );
}

/**
 * Waveform — hand-wired SVG illustration for product-card thumbnails.
 * Deterministic bars (seeded by `seed`) in Clay → Sunrise.
 * @category Audio
 */
export function Waveform({ seed = 1, bars = 32, className = "", ...rest }) {
  // Tiny deterministic PRNG so the same seed always draws the same wave.
  let s = seed * 9301 + 49297;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const W = 260;
  const H = 72;
  const mid = H / 2;
  const gap = W / bars;
  const barW = Math.max(2, gap * 0.5);

  const rects = Array.from({ length: bars }, (_, i) => {
    const env = Math.sin((i / bars) * Math.PI); // taper at edges
    const h = Math.max(4, (0.25 + rand() * 0.75) * env * (H - 8));
    const x = i * gap + (gap - barW) / 2;
    const y = mid - h / 2;
    return <rect key={i} x={x} y={y} width={barW} height={h} rx={1} />;
  });

  return (
    <svg
      className={["aw-waveform", className].filter(Boolean).join(" ")}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Audio waveform"
      {...rest}
    >
      <defs>
        <linearGradient id={`aw-wave-${seed}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--aw-secondary)" />
          <stop offset="100%" stopColor="var(--aw-primary)" />
        </linearGradient>
      </defs>
      <g fill={`url(#aw-wave-${seed})`}>{rects}</g>
    </svg>
  );
}

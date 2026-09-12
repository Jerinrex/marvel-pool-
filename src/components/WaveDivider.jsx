/**
 * A wave-shaped divider used between sections instead of a hard edge line.
 * `bg` = the background color behind the wave (the section above).
 * `fill` = the color of the wave shape itself (matches the section below).
 * `flip` reverses the crest direction for visual variety.
 */
export default function WaveDivider({ bg, fill, flip = false }) {
  const path = flip
    ? 'M0,50 C260,10 480,90 760,50 C1040,10 1200,80 1440,40 L1440,90 L0,90 Z'
    : 'M0,40 C280,90 480,0 760,40 C1040,80 1200,10 1440,50 L1440,90 L0,90 Z'

  return (
    <div className="wave" style={{ background: bg }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path d={path} fill={fill} />
      </svg>
    </div>
  )
}

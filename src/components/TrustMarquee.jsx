import partners from '../data/partners.js'
import './TrustMarquee.css'

export default function TrustMarquee() {
  // Duplicate the list so the CSS marquee can loop seamlessly at -50%.
  const looped = [...partners, ...partners]

  return (
    <section className="trust" id="trust">
      <div className="trust-label">Materials &amp; systems we build with</div>
      <div className="marquee">
        {looped.map((name, i) => (
          <div className="mq-item" key={`${name}-${i}`}>{name}</div>
        ))}
      </div>
    </section>
  )
}

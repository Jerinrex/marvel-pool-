import StatsStrip from './StatsStrip.jsx'
import './About.css'
import aboutImg from '../assets/hero_image/Construindo seu próprio Ofurô de Concreto.png'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div>
          <div className="about-tag" style={{ color: 'var(--sea)' }}>Introduction</div>
          <h2>Creating Spaces Made to Make a Splash.</h2>
          <p className="about-copy">
            At The Marvel Pools, we design and build swimming pools that bring together elegance, functionality, and quality craftsmanship. From residential spaces to premium commercial projects, we create customized pool solutions that perfectly complement your property and lifestyle. With attention to detail and a commitment to quality, we turn your vision into a swimming pool you can enjoy for years to come.
          </p>
        </div>
        <div className="about-image-placeholder" style={{ overflow: 'hidden', borderRadius: '8px' }}>
          <img src={aboutImg} alt="Marvel Pools luxury pool showcase" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
      </div>
      <div className="wrap">
        <StatsStrip />
      </div>
    </section>
  )
}

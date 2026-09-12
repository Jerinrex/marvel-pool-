import './WhyChooseUs.css'
import whyUsImg from '../assets/why_us.png'

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="wrap">
        <div className="why-grid">
          <div className="why-content">
            <div className="about-tag" style={{ color: 'var(--sea)' }}>Why Marvel Pools?</div>
            <h2>Experience You Can Trust</h2>
            <p>Our team combines technical expertise with creative design to build swimming pools that are visually stunning, structurally strong, and easy to maintain.</p>
            
            <h3>Premium Materials</h3>
            <p>We use industry-leading products and equipment for long-lasting performance.</p>
            
            <h3>Customized Solutions</h3>
            <p>Every project is uniquely designed based on your property, budget, and lifestyle.</p>
            
            <h3>End-to-End Service</h3>
            <p>From planning and construction to maintenance, we manage every stage of your project.</p>
          </div>
          
          <div className="why-features" style={{ background: 'transparent', padding: '0' }}>
            <img src={whyUsImg} alt="Why Choose Marvel Pools" className="why-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', margin: '0' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

import services from '../data/services.js'
import './Services.css'
import { Link } from 'react-router-dom'

export default function Services() {
  const displayedServices = services.slice(0, 4)

  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="services-head">
          <h2 style={{ color: 'var(--sand)' }}>Services</h2>
        </div>

        <div className="service-scroll">
          {displayedServices.map((s) => (
            <div className="service-card" key={s.n}>
              <img src={s.image} alt={s.title} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '16px'}} />
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <Link to="/services" className="btn-view-all">View All Services</Link>
        </div>
      </div>
    </section>
  )
}

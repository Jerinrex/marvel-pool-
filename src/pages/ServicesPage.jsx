import React from 'react'
import { Link } from 'react-router-dom'
import services from '../data/services.js'
import PoolTypes from '../components/PoolTypes.jsx'
import './ServicesPage.css'
import heroImg from '../assets/services/inifity pool.jpg'

export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero" style={{ backgroundImage: `url("${heroImg}")` }}>
        <div className="services-hero-overlay"></div>
        <div className="wrap services-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; <span>Services</span>
          </div>
          <h1>Services</h1>
          <p>End-to-end pool solutions, from concept and construction to installation, commissioning, and long-term support.</p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="services-list-section">
        <div className="wrap">
          <h2 className="services-page-title">Our Services</h2>
          <div className="services-grid-page">
            {services.map((s, index) => (
              <div className="service-card-animated" key={index}>
                <div 
                  className="service-card-bg" 
                  style={{ backgroundImage: `url("${s.image}")` }}
                ></div>
                <div className="service-card-overlay"></div>
                <div className="service-card-content">
                  <h3>{s.title}</h3>
                  <div className="service-card-desc">
                    <p>{s.desc}</p>
                    {s.features && (
                      <ul style={{ paddingLeft: '20px', marginTop: '10px', fontSize: '0.9rem', color: '#eaeaea', listStyleType: 'disc' }}>
                        {s.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Types Section */}
      <PoolTypes />
    </main>
  )
}

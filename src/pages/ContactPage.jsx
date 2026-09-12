import React from 'react'
import { Link } from 'react-router-dom'
import './ContactPage.css'
import contactHeroImg from '../assets/contact/contact.png'

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{ backgroundImage: `url(${contactHeroImg})` }}>
        <div className="contact-hero-overlay"></div>
        <div className="wrap contact-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; <span>Contact Us</span>
          </div>
          <h1>Contact Us</h1>
          <p>Get in touch to start planning a pool tailored to your space, style, and lifestyle.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-content-section">
        <div className="contact-wrap">
          <h2 className="section-title">Get in touch</h2>
          
          <div className="contact-grid">
            {/* Left Column: Form */}
            <div className="contact-form-col">
              <h3>Request a Quote</h3>
              <p className="form-desc">
                Get a customized quote for your swimming pool. Our experts design, build, and maintain high-quality pools tailored to your needs. Fill in the details below and let us bring your vision to life.
              </p>
              <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email (Optional)" />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Contact Number" required />
                  <input type="text" placeholder="Name of Organisation" />
                </div>
                <div className="form-row">
                  <input type="text" placeholder="Your City" required />
                </div>
                <div className="form-row">
                  <textarea placeholder="Additional Information" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>

            {/* Right Column: Info Cards */}
            <div className="contact-info-col">
              <h3>Hi! We are always here to help you.</h3>
              
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <div className="info-text">
                  <h4>Head Office</h4>
                  <p>
                    House no:10, 2nd cross,<br/>
                    Sumuka layout, chikkalasandra,<br/>
                    Bangalore, Karnataka 560061
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-text">
                  <h4>Email Us</h4>
                  <p>
                    themarvelpool@gmail.com
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-text">
                  <h4>Contact Us</h4>
                  <p>
                    +91 9019428806
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <iframe 
          title="The Marvel Pools Location"
          src="https://maps.google.com/maps?q=12.9164187,77.5478712&hl=en&z=17&output=embed" 
          width="100%" 
          height="450" 
          style={{ border: 0, display: 'block' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'
import heroImg from '../assets/pool_types/kids.jpg'
import contentImg from '../assets/pool_types/image copy.png'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story')

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url("${heroImg}")` }}>
        <div className="about-hero-overlay"></div>
        <div className="wrap about-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; <span>About Us</span>
          </div>
          <h1>About The Marvel Pools</h1>
          <p>Creating Exceptional Swimming Spaces</p>
        </div>
      </section>

      {/* Tabs Section for Story, Mission, Vision */}
      <section className="about-tabs-section">
        <div className="wrap">
          <div className="about-tabs">
            <button 
              className={`about-tab ${activeTab === 'story' ? 'active' : ''}`}
              onClick={() => setActiveTab('story')}
            >
              Our Story
            </button>
            <button 
              className={`about-tab ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Mission
            </button>
            <button 
              className={`about-tab ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Vision
            </button>
          </div>

          <div className="about-tab-content">
            {activeTab === 'story' && (
              <div className="tab-pane fade-in">
                <p>
                  At The Marvel Pools, we specialize in designing and building swimming pools that combine elegant design, reliable construction, and lasting quality. What starts as an idea becomes a carefully planned and professionally built swimming space. We bring together design, engineering, quality materials, and skilled workmanship to create pools that are both visually impressive and built for long-term performance.
                </p>
              </div>
            )}
            {activeTab === 'mission' && (
              <div className="tab-pane fade-in">
                <p>
                  We deliver high-quality swimming pool solutions, create innovative and customized pool designs, maintain high standards of construction and safety, use reliable materials and modern pool technology, provide professional service from concept to completion, and build lasting relationships through customer satisfaction.
                </p>
              </div>
            )}
            {activeTab === 'vision' && (
              <div className="tab-pane fade-in">
                <p>
                  To be a trusted name in swimming pool design and construction by setting new standards in innovation, sustainability, and customer service. We aspire to create luxurious, functional, and sustainable swimming spaces that enhance lifestyles and exceed expectations.
                </p>
              </div>
            )}
          </div>

          <div className="about-featured-image">
            <img src={contentImg} alt="Beautiful swimming pool" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="about-stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">300+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Quality Assurance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section (Pipeline) */}
      <section className="about-section pipeline-section">
        <div className="wrap">
          <div className="about-tag" style={{ color: 'var(--sea)' }}>Our Approach</div>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', color: 'var(--ink)' }}>How We Work</h2>
          
          <div className="pipeline-wrapper">
            <div className="pipeline-line"></div>
            <div className="pipeline-steps">
              <div className="pipeline-step">
                <div className="pipeline-dot"></div>
                <div className="pipeline-content">
                  <div className="pipeline-n">01</div>
                  <h3>Understand</h3>
                  <p>We start by learning your requirements, preferences, budget, and site conditions.</p>
                </div>
              </div>
              
              <div className="pipeline-step">
                <div className="pipeline-dot"></div>
                <div className="pipeline-content">
                  <div className="pipeline-n">02</div>
                  <h3>Design</h3>
                  <p>Our team creates a pool concept that balances aesthetics, and budget, tailored for your space.</p>
                </div>
              </div>
              
              <div className="pipeline-step">
                <div className="pipeline-dot"></div>
                <div className="pipeline-content">
                  <div className="pipeline-n">03</div>
                  <h3>Build</h3>
                  <p>With quality materials and professional workmanship, we bring the design to life with precision and care.</p>
                </div>
              </div>
              
              <div className="pipeline-step">
                <div className="pipeline-dot"></div>
                <div className="pipeline-content">
                  <div className="pipeline-n">04</div>
                  <h3>Test</h3>
                  <p>Every component is thoroughly tested to ensure safety, durability, and flawless performance.</p>
                </div>
              </div>
              
              <div className="pipeline-step">
                <div className="pipeline-dot"></div>
                <div className="pipeline-content">
                  <div className="pipeline-n">05</div>
                  <h3>Handover</h3>
                  <p>We deliver your completed swimming pool ready to enjoy, along with guidance on care and maintenance.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '20px', color: 'var(--ink)' }}>Let's Build Your Dream Pool</h3>
            <p style={{ marginBottom: '30px', color: '#555' }}>Get in touch for a free consultation today.</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

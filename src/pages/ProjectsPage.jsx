import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProjectsPage.css'
import heroImg from '../assets/pool_types/image copy 2.png'

// Import project gallery images
import img1 from '../assets/project/130c670e-a487-4021-af54-aae1e2597978.png'
import img2 from '../assets/project/14cabee5-92bb-4db7-8058-48311d368882.png'
import img3 from '../assets/project/17fb0fd0-5369-41b0-873a-373bdce57cfe.png'
import img4 from '../assets/project/23738638-78a9-48aa-81e9-1197f0f6c159.png'
import img5 from '../assets/project/5a0efce6-6f7e-4ee3-beca-4ed490c856bb.png'
import img6 from '../assets/project/61414d7c-4540-4969-ad02-60bcd89e63f5.png'
import img7 from '../assets/project/69162c42-094b-4339-a485-40b8d3cd0a86.png'
import img8 from '../assets/project/71c997f2-1caf-4a50-a2d9-bbdbb59616a2.png'
import img9 from '../assets/project/98a88fd5-b9ac-489c-9df3-69a2bc83e4d4.png'
import img10 from '../assets/project/9e707194-3ca1-44c9-be6c-f805e1cca7ce.png'
import img11 from '../assets/project/ChatGPT Image Sep 11, 2026, 08_04_36 PM.png'
import img12 from '../assets/project/baea9949-2444-4130-947d-6816ce08f4b4.png'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleImageClick = (index) => {
    setActiveIndex(index)
  }

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3500) // Auto-change every 3.5 seconds
    
    return () => clearInterval(interval)
  }, [])

  // Calculate the class for each image based on its index relative to the active index
  const getClassName = (index) => {
    if (index === activeIndex) return 'carousel-item active'
    
    // Previous item (handles wrap around)
    if (index === (activeIndex - 1 + images.length) % images.length) return 'carousel-item prev'
    
    // Next item (handles wrap around)
    if (index === (activeIndex + 1) % images.length) return 'carousel-item next'
    
    // Far previous item
    if (index === (activeIndex - 2 + images.length) % images.length) return 'carousel-item far-prev'
    
    // Far next item
    if (index === (activeIndex + 2) % images.length) return 'carousel-item far-next'
    
    // Hide the rest
    return 'carousel-item hidden'
  }

  return (
    <main className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero" style={{ backgroundImage: `url("${heroImg}")` }}>
        <div className="projects-hero-overlay"></div>
        <div className="wrap projects-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; <span>Projects</span>
          </div>
          <h1>Our Projects</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="projects-intro-section">
        <div className="wrap">
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2.5rem', color: 'var(--ink)', textAlign: 'center', marginBottom: '20px' }}>Our Gallery</h2>
          <p className="projects-intro-text">
            With every project, we're committed to precise, mindful design that showcases the care with which we approach every pool. Our work reflects our dedication to quality, and every space is created to let you relax and unwind in the calm tranquility of our pools.
          </p>
        </div>
      </section>

      {/* 3D Carousel Section */}
      <section className="projects-gallery-section">
        <div className="wrap" style={{ maxWidth: '1400px' }}>
          
          <div className="carousel-container">
            {images.map((src, index) => (
              <div 
                key={index} 
                className={getClassName(index)}
                onClick={() => handleImageClick(index)}
              >
                <img 
                  src={src} 
                  alt={`Project work ${index + 1}`} 
                  loading={index > 4 ? 'lazy' : 'eager'} 
                />
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={handlePrev}>&larr;</button>
            <button className="carousel-btn" onClick={handleNext}>&rarr;</button>
          </div>
          
        </div>
      </section>
    </main>
  )
}

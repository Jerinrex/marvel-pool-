import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import img1 from '../assets/hero_image/Luxury swimming pool with palm trees at sunset _ Premium AI-generated image.png'
import img2 from '../assets/hero_image/Nice swimming pool outdoors on bright summer day _ Premium Photo.png'
import img3 from '../assets/hero_image/This Tiny Bahamian Island Is the Getaway You Need.png'
import img4 from '../assets/hero_image/download (2).jpg'
import img5 from '../assets/hero_image/Construindo seu próprio Ofurô de Concreto.png'
  

const slides = [
  img1,
  img2,
  img3,
  img5,
  img4
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="top">
      {slides.map((img, idx) => (
        <div 
          key={idx}
          className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <div className="hero-eyebrow">Pool design &amp; construction — Bengaluru, since 2004</div>
        <h1>Build Your Dream Swimming Pool with The Marvel Pools</h1>
        <p className="lede">
          From elegant residential pools to world-class commercial aquatic facilities, we design, build, renovate, and maintain swimming pools that combine luxury, durability, and innovation.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
          <Link to="/projects" className="btn-ghost">View Our Projects</Link>
        </div>
      </div>
    </section>
  )
}

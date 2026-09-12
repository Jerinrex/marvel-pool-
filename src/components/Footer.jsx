import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-col-left">
            <div className="footer-logo">
              <svg className="logo-mark" viewBox="0 0 26 26" fill="none" aria-hidden="true" style={{ width: '40px', height: '40px', display: 'block', margin: '0 auto 10px' }}>
                <path d="M2 18c2.5 2 5 2 7.5 0s5-2 7.5 0 5 2 7.5 0" stroke="#E3AE3D" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2 12c2.5 2 5 2 7.5 0s5-2 7.5 0 5 2 7.5 0" stroke="#F1F7F4" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              The Marvel Pools
            </div>
            <p className="footer-address">
              House no:10, 2nd cross,<br/>
              Sumuka layout, chikkalasandra,<br/>
              Bangalore, Karnataka 560061
            </p>
          </div>
          <div className="footer-col footer-col-center">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col footer-col-right">
            <h4>Contact Us</h4>
            <ul className="footer-contact-info">
              <li>📞 +91 9019428806</li>
              <li>✉️ themarvelpool@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left"><a href="#">Privacy Policy</a></div>
          <div className="footer-bottom-center">© 2026. All rights reserved.</div>
          <div className="footer-bottom-right"><a href="#">Terms &amp; Conditions</a></div>
        </div>
      </div>
    </footer>
  )
}

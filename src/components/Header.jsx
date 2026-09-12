import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import QuoteModal from './QuoteModal.jsx'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <Link to="/" className="logo">
            <svg className="logo-mark" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <path d="M2 18c2.5 2 5 2 7.5 0s5-2 7.5 0 5 2 7.5 0" stroke="#E3AE3D" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M2 12c2.5 2 5 2 7.5 0s5-2 7.5 0 5 2 7.5 0" stroke="#F1F7F4" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            The Marvel Pools
          </Link>

          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('/#') ? (
                  <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
                ) : (
                  <Link to={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button className="nav-cta" onClick={() => setModalOpen(true)}>Get a Quote</button>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

import React, { useState } from 'react'
import './QuoteModal.css'

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const update = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', email: '', message: '' })
      onClose()
    }, 2500)
  }

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={e => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose}>×</button>
        
        <h2 className="quote-modal-title">Book Appointment</h2>
        
        {submitted ? (
          <div className="quote-modal-success">
            <h3>Thank You!</h3>
            <p>Your appointment request has been submitted. We'll contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-modal-form">
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              value={form.name} 
              onChange={update('name')} 
            />
            
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required 
              value={form.phone} 
              onChange={update('phone')} 
            />
            
            <input 
              type="email" 
              placeholder="Email (Optional)" 
              value={form.email} 
              onChange={update('email')} 
            />
            
            <textarea 
              placeholder="Message" 
              rows="4" 
              required
              value={form.message} 
              onChange={update('message')} 
            ></textarea>
            
            <button type="submit" className="quote-modal-submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  )
}

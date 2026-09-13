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
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const update = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: 'Appointment Request',
          from_name: form.name || 'Marvel Pools Visitor',
          Name: form.name,
          Phone: form.phone,
          Email: form.email || 'Not provided',
          Message: form.message,
          Source: 'Floating Quote Modal'
        })
      })
      
      const json = await response.json()
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setForm({ name: '', phone: '', email: '', message: '' })
          onClose()
        }, 3000)
      } else {
        alert(json.message || "Failed to send message.")
      }
    } catch (error) {
      console.error(error)
      alert("Failed to send message.")
    }
    
    setLoading(false)
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
            
            <button type="submit" className="quote-modal-submit" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

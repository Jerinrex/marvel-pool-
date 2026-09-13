import { useState } from 'react'
import './Contact.css'
import bgImg from '../assets/pool_types/school.jpg'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  enquiry: 'General Enquiry',
  consent: false,
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
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
          subject: 'New Lead: ' + form.enquiry,
          from_name: form.name || 'Marvel Pools Visitor',
          Name: form.name,
          Phone: form.phone,
          Email: form.email || 'Not provided',
          Enquiry_Type: form.enquiry,
          Source: 'Main Contact Form'
        })
      })
      
      const json = await response.json()
      if (response.ok) {
        setSubmitted(true)
        setForm(initialForm)
      } else {
        alert(json.message || "Failed to send message.")
      }
    } catch (error) {
      console.error(error)
      alert("An error occurred while sending the message.")
    }
    
    setLoading(false)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-banner" style={{ backgroundImage: `url("${bgImg}")` }}>
          <div className="contact-banner-overlay"></div>
          <div className="contact-banner-content">
            <h2>Get in touch. Let's connect!</h2>
            
            <form onSubmit={handleSubmit} className="elegant-form">
              <div className="form-row-elegant">
                <input id="name" type="text" placeholder="Name" required
                  value={form.name} onChange={update('name')} />
                
                <input id="email" type="email" placeholder="Email (Optional)"
                  value={form.email} onChange={update('email')} />
              </div>

              <div className="form-row-elegant">
                <input id="phone" type="tel" placeholder="Contact Number" required
                  value={form.phone} onChange={update('phone')} />
                
                <select id="enquiry" value={form.enquiry} onChange={update('enquiry')} className="enquiry-select">
                  <option>General Enquiry</option>
                  <option>Residential Pool</option>
                  <option>Commercial Pool</option>
                  <option>Renovation</option>
                  <option>Annual Maintenance</option>
                </select>
              </div>

              <div className="consent-elegant">
                <input type="checkbox" id="consent" required
                  checked={form.consent} onChange={update('consent')} />
                <label htmlFor="consent">
                  I confirm that I have read and agree to the <strong>Privacy Policy</strong> and <strong>Consent</strong>.
                </label>
              </div>

              <button type="submit" className="btn-elegant" disabled={loading}>
                {loading ? 'Sending...' : 'Request A Call Back →'}
              </button>

              {submitted && (
                <p className="success-msg">
                  Thanks — we've received your enquiry and will be in touch shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

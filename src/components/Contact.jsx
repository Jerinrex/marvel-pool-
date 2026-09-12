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

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enquiry submitted:', form)
    setSubmitted(true)
    setForm(initialForm)
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

              <button type="submit" className="btn-elegant">Request A Call Back →</button>

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

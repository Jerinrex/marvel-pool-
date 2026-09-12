import './Testimonials.css'

const testimonials = [
  {
    text: "The Marvel Pools transformed our backyard into a beautiful oasis. The quality of work and professionalism exceeded our expectations.",
  },
  {
    text: "Excellent service from design to completion. Highly recommended for anyone looking for premium swimming pool construction.",
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <div className="about-tag" style={{ color: 'var(--sea)' }}>What Our Clients Say</div>
        <h2>Testimonials</h2>
        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div className="test-card" key={i}>
              <div className="quote-mark">“</div>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

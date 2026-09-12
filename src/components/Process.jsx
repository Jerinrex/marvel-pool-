import './Process.css'

const steps = [
  { n: '01', title: 'Consultation', desc: 'Understanding your requirements and site conditions.' },
  { n: '02', title: 'Design', desc: 'Creating customized layouts and 3D concepts.' },
  { n: '03', title: 'Construction', desc: 'Expert execution using premium materials.' },
  { n: '04', title: 'Testing', desc: 'Quality inspection and system testing.' },
  { n: '05', title: 'Handover', desc: 'Ready-to-use swimming pool with complete guidance.' }
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="about-tag" style={{ color: 'var(--sea)' }}>How We Work</div>
        <h2>Our Process</h2>
        <div className="timeline">
          {steps.map((step, idx) => (
            <div className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`} key={step.n}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="step-n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

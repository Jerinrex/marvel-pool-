import { useCountUp } from '../hooks/useCountUp.js'
import './StatsStrip.css'

const statsData = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 300, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Quality Assurance' },
]

function Stat({ value, suffix, label }) {
  const [ref, display] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <div className="num">{display}{suffix}</div>
      <div className="lbl">{label}</div>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <div className="stat-strip">
      {statsData.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </div>
  )
}

import './PoolTypes.css'

const types = [
  "Residential Pools",
  "Villa Pools",
  "Infinity Pools",
  "Rooftop Pools",
  "Resort Pools",
  "Hotel Pools",
  "Apartment Pools",
  "School Pools",
  "Therapy Pools",
  "Jacuzzi",
  "Kids Pools",
  "Indoor Pools"
]

export default function PoolTypes() {
  return (
    <section className="pool-types" id="pool-types">
      <div className="wrap">
        <div className="about-tag" style={{ color: 'var(--sea)' }}>Our Expertise</div>
        <h2>Pool Types We Build</h2>
        <div className="types-labels-grid">
          {types.map((type, i) => (
            <div className="type-label-animated" key={i}>
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

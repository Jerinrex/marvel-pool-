export default function PlaceholderSection({ id, title }) {
  return (
    <section id={id} style={{ padding: '80px 0', background: 'var(--foam)', textAlign: 'center' }}>
      <div className="wrap">
        <h2>{title}</h2>
        <p style={{ color: 'var(--ink)' }}>Content coming soon...</p>
      </div>
    </section>
  )
}

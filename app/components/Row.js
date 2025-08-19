export default function Row({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section style={{ marginBottom: "32px" }}>
      <div className="row-title">
        <h2 style={{ margin: 0 }}>{title}</h2>
        <a href="/catalog" className="muted" style={{ fontSize: 14 }}>
          View all
        </a>
      </div>
      <div className="row">
        {items.map((movie) => (
          <a
            key={movie.id}
            href={`/title/${movie.id}`}
            className="card"
            style={{ width: 160, flex: "0 0 auto" }}
          >
            <img src={movie.posterUrl} alt={movie.title} />
            <div style={{ padding: "8px" }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>
                {movie.title}
              </div>
              <div className="muted" style={{ fontSize: 12 }}>
                {movie.year}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

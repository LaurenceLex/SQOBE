export default function Hero({ item }) {
  if (!item) return null;

  return (
    <div className="hero">
      <img
        src={item.posterUrl}
        alt={item.title}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="hero-gradient" />
      <div className="hero-content">
        <h1 style={{ margin: "0 0 8px 0" }}>{item.title}</h1>
        <p className="muted" style={{ margin: "0 0 12px 0" }}>
          {item.description}
        </p>
        <a href={`/watch/${item.id}`} className="btn btn-primary">
          ▶ Play
        </a>
      </div>
    </div>
  );
}

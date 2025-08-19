"use client";

export default function Hero({ item }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${item.posterUrl})`,
      }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">{item.title}</h1>
        <p className="hero-description">{item.description}</p>
        <div className="hero-buttons">
          <a href={`/watch/${item.id}`} className="btn btn-primary">
            ▶ Play
          </a>
          <a href={`/title/${item.id}`} className="btn">
            More Info
          </a>
        </div>
      </div>
    </section>
  );
}

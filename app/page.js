export default function HomePage() {
  return (
    <main>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: "url(/posters/thief.jpg)" }}
      >
        <div className="hero-inner">
          <h1 className="hero-title">Thief</h1>
          <p className="hero-description">
            A master thief gets drawn into one final job that could change
            everything.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">▶ Play</button>
            <button className="btn btn-ghost">ℹ Info</button>
          </div>
        </div>
      </section>

      {/* Movie Row */}
      <section className="section row">
        <h2 className="section-title">Recommended Movies</h2>
        <button className="scroll-btn left">‹</button>
        <button className="scroll-btn right">›</button>

        <div className="row-track">
          <article className="card">
            <div className="poster">
              <img src="/posters/thief.jpg" alt="Thief" />
            </div>
            <div className="card-title">Thief</div>
          </article>

          <article className="card">
            <div className="poster">
              <img src="/posters/godfather.jpg" alt="The Godfather" />
            </div>
            <div className="card-title">The Godfather</div>
          </article>

          <article className="card">
            <div className="poster">
              <img src="/posters/inception.jpg" alt="Inception" />
            </div>
            <div className="card-title">Inception</div>
          </article>
        </div>
      </section>

    </main>
  );
}

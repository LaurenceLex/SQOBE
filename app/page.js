export default function HomePage() {
  // --- sample data (replace with your real items/images) ---
  const rows = [
    {
      title: "Trending Now",
      items: [
        { src: "/posters/inception.jpg", title: "Inception" },
        { src: "/posters/interstellar.jpg", title: "Interstellar" },
        { src: "/posters/joker.jpg", title: "Joker" },
        { src: "/posters/avatar.jpg", title: "Avatar" },
        { src: "/posters/matrix.jpg", title: "The Matrix" },
        { src: "/posters/dune.jpg", title: "Dune" },
      ],
    },
    {
      title: "New Releases",
      items: [
        { src: "/posters/batman.jpg", title: "The Batman" },
        { src: "/posters/spiderman.jpg", title: "Spider-Man" },
        { src: "/posters/oppenheimer.jpg", title: "Oppenheimer" },
        { src: "/posters/barbie.jpg", title: "Barbie" },
        { src: "/posters/maverick.jpg", title: "Top Gun: Maverick" },
        { src: "/posters/guardians.jpg", title: "Guardians" },
      ],
    },
    {
      title: "Classics",
      items: [
        { src: "/posters/godfather.jpg", title: "The Godfather" },
        { src: "/posters/casablanca.jpg", title: "Casablanca" },
        { src: "/posters/pulpfiction.jpg", title: "Pulp Fiction" },
        { src: "/posters/shawshank.jpg", title: "Shawshank" },
        { src: "/posters/lotr.jpg", title: "LOTR" },
        { src: "/posters/starwars.jpg", title: "Star Wars" },
      ],
    },
  ];

  return (
    <main>
      {/* ===== Header (logo + search + genre + account) ===== */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="App Logo" />
        </div>

        <nav className="nav">
          <input className="search" type="text" placeholder="Search..." />
          <select className="genre-select" defaultValue="All Genres">
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Horror</option>
          </select>
          <button>Account</button>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section
        className="hero"
        style={{ backgroundImage: "url(/posters/thief.jpg)" }}
      >
        <div className="hero-inner">
          <div className="hero-kicker">Exclusive</div>
          <h1 className="hero-title">Thief</h1>
          <p className="hero-description">
            A master thief is drawn into one final job that could change
            everything.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">▶ Play</button>
            <button className="btn btn-ghost">More Info</button>
          </div>
        </div>
      </section>

      {/* ===== Rows ===== */}
      {rows.map((row) => (
        <section className="section row" key={row.title}>
          <h2 className="section-title">{row.title}</h2>

          {/* arrows (JS for click is injected globally in app/layout.js) */}
          <button className="scroll-btn left" aria-label="Scroll left">
            ‹
          </button>
          <button className="scroll-btn right" aria-label="Scroll right">
            ›
          </button>

          <div className="row-track">
            {row.items.map((item) => (
              <article className="card" key={item.title}>
                <div className="poster">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="card-title">{item.title}</div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

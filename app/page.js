export default function HomePage() {
  return (
    <main>

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="MyApp Logo" />
        </div>

        <nav className="nav">
          <input className="search" type="text" placeholder="Search..." />
          <select className="genre-select">
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Horror</option>
          </select>
          <button>Account</button>
        </nav>
      </header>

      {/* ================= HERO ================= */}
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

      {/* ... the movie rows from before ... */}

    </main>
  );
}

      {/* ================= HERO ================= */}
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

      {/* ================= ROW 1 ================= */}
      <section className="section row">
        <h2 className="section-title">Trending Now</h2>
        <button className="scroll-btn left">‹</button>
        <button className="scroll-btn right">›</button>

        <div className="row-track">
          <article className="card">
            <div className="poster"><img src="/posters/inception.jpg" alt="Inception" /></div>
            <div className="card-title">Inception</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/interstellar.jpg" alt="Interstellar" /></div>
            <div className="card-title">Interstellar</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/joker.jpg" alt="Joker" /></div>
            <div className="card-title">Joker</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/avatar.jpg" alt="Avatar" /></div>
            <div className="card-title">Avatar</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/matrix.jpg" alt="The Matrix" /></div>
            <div className="card-title">The Matrix</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/dune.jpg" alt="Dune" /></div>
            <div className="card-title">Dune</div>
          </article>
        </div>
      </section>

      {/* ================= ROW 2 ================= */}
      <section className="section row">
        <h2 className="section-title">New Releases</h2>
        <button className="scroll-btn left">‹</button>
        <button className="scroll-btn right">›</button>

        <div className="row-track">
          <article className="card">
            <div className="poster"><img src="/posters/batman.jpg" alt="The Batman" /></div>
            <div className="card-title">The Batman</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/spiderman.jpg" alt="Spider-Man" /></div>
            <div className="card-title">Spider-Man</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/oppenheimer.jpg" alt="Oppenheimer" /></div>
            <div className="card-title">Oppenheimer</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/barbie.jpg" alt="Barbie" /></div>
            <div className="card-title">Barbie</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/maverick.jpg" alt="Top Gun: Maverick" /></div>
            <div className="card-title">Top Gun: Maverick</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/guardians.jpg" alt="Guardians of the Galaxy" /></div>
            <div className="card-title">Guardians</div>
          </article>
        </div>
      </section>

      {/* ================= ROW 3 ================= */}
      <section className="section row">
        <h2 className="section-title">Classics</h2>
        <button className="scroll-btn left">‹</button>
        <button className="scroll-btn right">›</button>

        <div className="row-track">
          <article className="card">
            <div className="poster"><img src="/posters/godfather.jpg" alt="The Godfather" /></div>
            <div className="card-title">The Godfather</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/casablanca.jpg" alt="Casablanca" /></div>
            <div className="card-title">Casablanca</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/pulpfiction.jpg" alt="Pulp Fiction" /></div>
            <div className="card-title">Pulp Fiction</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/shawshank.jpg" alt="Shawshank Redemption" /></div>
            <div className="card-title">Shawshank</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/lotr.jpg" alt="The Lord of the Rings" /></div>
            <div className="card-title">LOTR</div>
          </article>
          <article className="card">
            <div className="poster"><img src="/posters/starwars.jpg" alt="Star Wars" /></div>
            <div className="card-title">Star Wars</div>
          </article>
        </div>
      </section>

    </main>
  );
}

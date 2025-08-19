"use client";
import { demoMovies } from "../../lib/mock";
import { useWatchlist } from "../../lib/useWatchlist";

export default function TitlePage({ params }) {
  const movie = demoMovies.find(m => m.id === params.id);
  const { has, toggle } = useWatchlist();

  if (!movie) return <div>Movie not found.</div>;

  const inList = has(movie.id);

  return (
    <div style={{ marginTop: 24 }}>
      <h1>{movie.title}</h1>
      <p className="muted">{movie.year} • {movie.genre}</p>
      <img src={movie.posterUrl} alt={movie.title}
           style={{ maxWidth: 400, borderRadius: 12, margin: "16px 0" }} />
      <p>{movie.description}</p>

      <div style={{ display:"flex", gap:12, marginTop:12 }}>
        <a href={`/watch/${movie.id}`} className="btn btn-primary">▶ Play</a>
        <button className="btn" onClick={() => toggle(movie.id)}>
          {inList ? "✓ In Watchlist" : "+ Watchlist"}
        </button>
      </div>
    </div>
  );
}

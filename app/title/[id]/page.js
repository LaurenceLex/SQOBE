import { demoMovies } from "../../lib/mock";

export default function TitlePage({ params }) {
  const movie = demoMovies.find(m => m.id === params.id);
  if (!movie) return <div>Movie not found.</div>;

  return (
    <div style={{ marginTop: 24 }}>
      <h1>{movie.title}</h1>
      <p className="muted">{movie.year} • {movie.genre}</p>
      <img src={movie.posterUrl} alt={movie.title}
           style={{ maxWidth: 400, borderRadius: 12, margin: "16px 0" }} />
      <p>{movie.description}</p>
      <a href={`/watch/${movie.id}`} className="btn btn-primary">▶ Play</a>
    </div>
  );
}

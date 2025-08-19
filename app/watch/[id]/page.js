import { demoMovies } from "@/app/lib/mock";

export default function WatchPage({ params }) {
  const movie = demoMovies.find((m) => m.id === params.id);

  if (!movie) return <div>Movie not found.</div>;

  return (
    <div style={{ marginTop: 24 }}>
      <h1>{movie.title}</h1>
      <video
        src={movie.videoUrl}
        controls
        style={{
          width: "100%",
          borderRadius: 12,
          marginTop: 16
        }}
      />
    </div>
  );
}

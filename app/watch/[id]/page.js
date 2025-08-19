"use client";
import { demoMovies } from "../../lib/mock";
import { useContinueWatching } from "../../lib/useContinueWatching";
import { useRef } from "react";

export default function WatchPage({ params }) {
  const movie = demoMovies.find(m => m.id === params.id);
  const { updateProgress } = useContinueWatching();
  const videoRef = useRef(null);

  if (!movie) return <div>Movie not found.</div>;

  function handleTimeUpdate() {
    const v = videoRef.current;
    if (v) updateProgress(movie.id, v.currentTime, v.duration);
  }

  return (
    <div style={{ marginTop: 24 }}>
      <h1>{movie.title}</h1>
      <video
        ref={videoRef}
        src={movie.videoUrl}
        controls
        style={{ width: "100%", borderRadius: 12, marginTop: 16 }}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}

"use client";
import { Suspense } from "react";
import Hero from "./components/Hero";
import Row from "./components/Row";
import { demoMovies } from "./lib/mock";
import { useContinueWatching } from "./lib/useContinueWatching";
import { useWatchlist } from "./lib/useWatchlist";
import { useSearchParams } from "next/navigation";

function HomeContent() {
  const params = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();
  const genre = params.get("genre") || "All";

  const [hero, ...rest] = demoMovies;
  const { progress } = useContinueWatching?.() ?? { progress: {} };
  const { ids: watchIds } = useWatchlist?.() ?? { ids: [] };

  const continueMovies = demoMovies.filter((m) => {
    const p = progress[m.id];
    return p && p.time < p.duration;
  });

  const watchlistMovies = demoMovies.filter((m) => watchIds.includes(m.id));

  const filtered = demoMovies.filter((m) => {
    const matchesQ =
      !q ||
      m.title.toLowerCase().includes(q) ||
      (m.description || "").toLowerCase().includes(q);
    const matchesGenre =
      genre === "All" || (m.genre || "").toLowerCase() === genre.toLowerCase();
    return matchesQ && matchesGenre;
  });

  const isFiltering = q || (genre && genre !== "All");

  return (
    <div>
      <Hero item={hero} />

      {isFiltering ? (
        <Row
          title={`Search Results${genre !== "All" ? ` — ${genre}` : ""}`}
          items={filtered}
        />
      ) : (
        <>
          {watchlistMovies.length > 0 && (
            <Row title="Watchlist" items={watchlistMovies} />
          )}
          {continueMovies.length > 0 && (
            <Row title="Continue Watching" items={continueMovies} />
          )}
          <Row title="Latest Releases" items={rest} />
          <Row title="Recommended" items={demoMovies} />
          <Row title="Action" items={demoMovies.filter(m => m.genre === "Action")} />
          <Row title="Thriller" items={demoMovies.filter(m => m.genre === "Thriller")} />
          <Row title="Drama" items={demoMovies.filter(m => m.genre === "Drama")} />
          <Row title="Comedy" items={demoMovies.filter(m => m.genre === "Comedy")} />
          <Row title="Documentary" items={demoMovies.filter(m => m.genre === "Documentary")} />
          <Row title="Romance" items={demoMovies.filter(m => m.genre === "Romance")} />
          <Row title="Science Fiction" items={demoMovies.filter(m => m.genre === "Science Fiction")} />
          <Row title="Fantasy" items={demoMovies.filter(m => m.genre === "Fantasy")} />
          <Row title="Horror" items={demoMovies.filter(m => m.genre === "Horror")} />
          <Row title="Kids" items={demoMovies.filter(m => m.genre === "Kids")} />
        </>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}

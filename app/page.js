"use client";
import Hero from "@/app/components/Hero";
import Row from "@/app/components/Row";
import { demoMovies } from "@/app/lib/mock";
import { useContinueWatching } from "@/app/lib/useContinueWatching";

export default function Home() {
  const [hero, ...rest] = demoMovies;
  const { progress } = useContinueWatching();

  // Filter movies still being watched
  const continueMovies = demoMovies.filter((m) => {
    const p = progress[m.id];
    return p && p.time < p.duration; // still unfinished
  });

  return (
    <div>
      <Hero item={hero} />
      <Row title="Featured" items={rest} />
      {continueMovies.length > 0 && (
        <Row title="Continue Watching" items={continueMovies} />
      )}
      <Row title="Drama" items={demoMovies.filter((m) => m.genre === "Drama")} />
    </div>
  );
}

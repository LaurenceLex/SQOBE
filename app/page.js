"use client";
import Hero from "./components/Hero";
import Row from "./components/Row";
import { demoMovies } from "./lib/mock";
import { useContinueWatching } from "./lib/useContinueWatching";

export default function Home() {
  const [hero, ...rest] = demoMovies;
  const { progress } = useContinueWatching?.() ?? { progress: {} };
  const continueMovies = demoMovies.filter(m => {
    const p = progress[m.id];
    return p && p.time < p.duration;
  });

  return (
    <div>
      <Hero item={hero} />
      <Row title="Featured" items={rest} />
      {continueMovies.length > 0 && (
        <Row title="Continue Watching" items={continueMovies} />
      )}
      <Row title="All Movies" items={demoMovies} />
    </div>
  );
}

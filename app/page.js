"use client";
import Hero from "@/app/components/Hero";
import Row from "@/app/components/Row";
import { demoMovies } from "@/app/lib/mock";

export default function Home() {
  const [hero, ...rest] = demoMovies;

  return (
    <div>
      <Hero item={hero} />
      <Row title="Featured" items={rest} />
      <Row title="All Movies" items={demoMovies} />
    </div>
  );
}

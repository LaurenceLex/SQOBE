"use client";
import Hero from "./components/Hero";
import Row from "./components/Row";
import { demoMovies } from "./lib/mock";

export default function Home() {
  const [hero, ...rest] = demoMovies;

  return (
    <div>
      <Hero item={hero} />
      <Row title="Latest Releases" items={rest} />
      <Row title="Recommended" items={demoMovies} />
      <Row title="Action" items={demoMovies} />
      <Row title="Thriller" items={demoMovies} />
      <Row title="Drama" items={demoMovies} />
      <Row title="Comedy" items={demoMovies} />
      <Row title="Documentary" items={demoMovies} />
      <Row title="Romance" items={demoMovies} />
      <Row title="Science Fiction" items={demoMovies} />
      <Row title="Fantasy" items={demoMovies} />
      <Row title="Horror" items={demoMovies} />
      <Row title="Kids" items={demoMovies} />
    </div>
  );
}

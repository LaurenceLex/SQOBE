"use client";
import { demoMovies } from "../lib/mock";
import { useWatchlist } from "../lib/useWatchlist";
import Row from "../components/Row";

export default function WatchlistPage() {
  const { ids } = useWatchlist();
  const items = demoMovies.filter((m) => ids.includes(m.id));
  return (
    <div>
      <h1>Watchlist</h1>
      {items.length ? (
        <Row title="Saved Titles" items={items} />
      ) : (
        <p className="muted">Your watchlist is empty.</p>
      )}
    </div>
  );
}

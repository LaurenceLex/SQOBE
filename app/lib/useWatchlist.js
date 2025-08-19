"use client";
import { useEffect, useState } from "react";

const KEY = "sqobe_watchlist";

export function useWatchlist() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) setIds(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(ids));
  }, [ids]);

  function toggle(id) {
    setIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  }

  function has(id) { return ids.includes(id); }

  return { ids, toggle, has };
}

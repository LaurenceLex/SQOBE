"use client";
import { useEffect, useState } from "react";

export function useContinueWatching() {
  const [progress, setProgress] = useState({});
  useEffect(() => {
    const saved = localStorage.getItem("continueWatching");
    if (saved) setProgress(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("continueWatching", JSON.stringify(progress));
  }, [progress]);
  function updateProgress(movieId, time, duration) {
    setProgress((prev) => ({ ...prev, [movieId]: { time, duration } }));
  }
  return { progress, updateProgress };
}

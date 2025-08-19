"use client";
import { useEffect, useState } from "react";

export function useContinueWatching() {
  const [progress, setProgress] = useState({});

  // Load from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("continueWatching");
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  // Save back to localStorage whenever progress changes
  useEffect(() => {
    localStorage.setItem("continueWatching", JSON.stringify(progress));
  }, [progress]);

  // Update progress
  function updateProgress(movieId, time, duration) {
    setProgress((prev) => ({
      ...prev,
      [movieId]: { time, duration }
    }));
  }

  return { progress, updateProgress };
}

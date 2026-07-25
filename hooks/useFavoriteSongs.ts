"use client";

import { useEffect, useState } from "react";
import { favoriteSongs } from "@/constants/content";

const TICK_MS = 250;

export function useFavoriteSongs() {
  const [index, setIndex] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);

  // Pick a random starting song once, after mount (avoids SSR/client mismatch)
  useEffect(() => {
    setIndex(Math.floor(Math.random() * favoriteSongs.length));
  }, []);

  const current = favoriteSongs[index] ?? null;

  useEffect(() => {
    if (!current) return;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += TICK_MS / 1000;
      if (elapsed >= current.durationSec) {
        setIndex((i) => (i + 1) % favoriteSongs.length);
        setElapsedSec(0);
        elapsed = 0;
        return;
      }
      setElapsedSec(elapsed);
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [index, current]);

  return { song: current, elapsedSec };
}

"use client";

import { useEffect, useState } from "react";

export interface LeetCodeStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
  calendar: Record<string, number>;
}

export function useLeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled) setStats(json);
      })
      .catch(() => {
        if (!cancelled) setStats({ total: 0, easy: 0, medium: 0, hard: 0, calendar: {} });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
}

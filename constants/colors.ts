// Design tokens — mirrors CSS variables in app/globals.css
// Accent swapped from original's amber (#e8a061) to deep forest green per brief.
export const colors = {
  bgBase: "#0a0d12",
  bgPanel: "#10151d",
  bgPanelSoft: "#131a23",
  borderSoft: "rgba(255,255,255,0.07)",
  borderStrong: "rgba(255,255,255,0.14)",
  textPrimary: "#eef1f5",
  textSecondary: "#9aa4b2",
  textMuted: "#6b7482",
  accent: "#3f8562",
  accentStrong: "#2a563f",
  accentSoft: "rgba(63,133,98,0.14)",
  accentBorder: "rgba(63,133,98,0.35)",
  greenLive: "#4ade80",
  cyan: "#5aa9c9",
} as const;

// Category color mapping for skill/tag chips
export const chipCategoryColor: Record<string, string> = {
  languages: "slate",
  ml: "accent",
  security: "cyan",
  frameworks: "slate",
  systems: "slate",
  data: "slate",
  testing: "slate",
  tools: "slate",
};

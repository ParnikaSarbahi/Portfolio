# Parnika Sarbahi — Portfolio

Next.js (App Router) + TypeScript + Tailwind + Framer Motion + GSAP recreation,
built to the layout/interaction system of paramsc.dev with original content,
a deep-forest-green accent (`#2a563f`), and a real RAG chatbot.

## 1. Install

```bash
npm install
```

## 2. Environment variables

```bash
cp .env.local.example .env.local
```

Fill in:

### Groq (chatbot) — free tier
1. Go to https://console.groq.com/keys
2. Create an API key
3. Paste into `GROQ_API_KEY` in `.env.local`

### "On Repeat" widget — curated playlist, not live
This widget does NOT connect to your real Spotify listening activity. It cycles
through a small static list you control in `constants/content.ts`:

```ts
export const favoriteSongs = [
  { title: "Take on Me", artist: "a-ha", durationSec: 225, art: "/music/take-on-me.jpg" },
  // add more here
];
```

Add/edit songs directly in that array. `art` is optional — point it at an image
in `public/music/`, or drop the field and it just won't render album art.

## 3. Generate the chatbot's knowledge base

The chatbot is a real RAG pipeline: your content is chunked and embedded locally
(MiniLM via @xenova/transformers, $0 cost, no external embedding API) into
`data/embeddings.json`, which `/api/chat` retrieves from at query time.

```bash
npm run generate-embeddings
```

This downloads the MiniLM model once (~90MB, cached after) and writes
`data/embeddings.json`. Re-run this any time `data/knowledge-source.md` changes.

To update what the bot knows: edit `data/knowledge-source.md`, then re-run the
command above.

## 4. Add your assets

| What | Path |
|---|---|
| Portrait photo | `public/photo/parnika.jpg` |
| Certification badges | `public/certs/cisco-junior-analyst.png`, `cisco-network-defense.png`, `google-foundations.png`, `oracle-oci-ai.png` |
| Company/school logos | `public/logos/upes.png`, `aerspl.png`, `gdg.png`, `school.png` |
| Resume PDF | `public/resume.pdf` |
| Song art (optional) | `public/music/*.jpg` — filenames must match `art` in `favoriteSongs` |

Missing images fail gracefully (they just won't render) so the site won't break
if you add these incrementally — filenames must match `constants/content.ts`
exactly, or update the paths there.

## 5. Run it

```bash
npm run dev
```

Visit http://localhost:3000

## 6. Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/                  routes + API endpoints (chat, spotify, leetcode)
components/sections/  one component per page section
components/ui/        Chip, Card, SectionHeading, Reveal, GridBackground
constants/            content.ts (all your resume data), colors.ts, nav.ts
lib/                  embeddings.ts, embedder.ts, groq.ts, spotify.ts
hooks/                useSpotify.ts, useLeetCode.ts
data/                 knowledge-source.md (chatbot training data), embeddings.json (generated)
scripts/              generate-embeddings.ts
```

## Editing content

Everything text-based (experience, projects, skills, stats, etc.) lives in
`constants/content.ts` — one typed source of truth used across sections.

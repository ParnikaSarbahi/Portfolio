/**
 * Run with: npm run generate-embeddings
 * Chunks data/knowledge-source.md into paragraphs/sections and embeds each
 * locally with MiniLM (no external API calls, $0 cost), writing the result
 * to data/embeddings.json for the /api/chat retrieval pipeline to consume.
 */
import fs from "fs";
import path from "path";
import { embedText } from "../lib/embedder";

const SOURCE_PATH = path.join(process.cwd(), "data", "knowledge-source.md");
const OUTPUT_PATH = path.join(process.cwd(), "data", "embeddings.json");

function chunkMarkdown(md: string): string[] {
  // Split primarily on ### subsections (keeps each project/cert/job as one
  // coherent chunk) and ## sections as a fallback boundary.
  const rawSections = md
    .split(/\n(?=#{2,3}\s)/g)
    .map((s) => s.trim())
    .filter(Boolean);

  const MAX_CHUNK = 1100; // generous — keeps whole project write-ups intact
  const chunks: string[] = [];
  for (const section of rawSections) {
    if (section.length <= MAX_CHUNK) {
      chunks.push(section);
      continue;
    }
    // Only split further if a section is unusually long, by paragraph group
    const parts = section.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
    let buffer = "";
    for (const part of parts) {
      if ((buffer + "\n\n" + part).length > MAX_CHUNK) {
        if (buffer) chunks.push(buffer);
        buffer = part;
      } else {
        buffer = buffer ? buffer + "\n\n" + part : part;
      }
    }
    if (buffer) chunks.push(buffer);
  }
  return chunks.filter((c) => c.length > 15);
}

async function main() {
  console.log("Reading knowledge source:", SOURCE_PATH);
  const md = fs.readFileSync(SOURCE_PATH, "utf-8");
  const chunks = chunkMarkdown(md);
  console.log(`Chunked into ${chunks.length} sections. Embedding locally with MiniLM...`);

  const results = [];
  for (let i = 0; i < chunks.length; i++) {
    const embedding = await embedText(chunks[i]);
    results.push({ id: i, text: chunks[i], embedding });
    process.stdout.write(`\r  embedded ${i + 1}/${chunks.length}`);
  }
  console.log("\nWriting", OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results));
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

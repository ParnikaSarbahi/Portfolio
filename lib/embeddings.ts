import fs from "fs";
import path from "path";

export interface KnowledgeChunk {
  id: number;
  text: string;
  embedding: number[];
}

let cachedChunks: KnowledgeChunk[] | null = null;

export function loadKnowledgeBase(): KnowledgeChunk[] {
  if (cachedChunks) return cachedChunks;
  const file = path.join(process.cwd(), "data", "embeddings.json");
  if (!fs.existsSync(file)) {
    console.warn(
      "[embeddings] data/embeddings.json not found — run `npm run generate-embeddings` first."
    );
    return [];
  }
  cachedChunks = JSON.parse(fs.readFileSync(file, "utf-8"));
  return cachedChunks!;
}

export function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function topKChunks(
  queryEmbedding: number[],
  chunks: KnowledgeChunk[],
  k = 4
): KnowledgeChunk[] {
  return [...chunks]
    .map((c) => ({ chunk: c, score: cosineSimilarity(queryEmbedding, c.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((r) => r.chunk);
}

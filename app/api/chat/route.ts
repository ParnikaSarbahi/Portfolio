import { NextRequest } from "next/server";
import { embedText } from "@/lib/embedder";
import { loadKnowledgeBase, topKChunks } from "@/lib/embeddings";
import { getGroqClient, CHAT_MODEL, SYSTEM_PROMPT } from "@/lib/groq";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Missing 'message'" }), { status: 400 });
    }

    const chunks = loadKnowledgeBase();
    let contextBlock = "No knowledge base loaded.";
    let sources: string[] = [];

    if (chunks.length > 0) {
      const queryEmbedding = await embedText(message);
      const top = topKChunks(queryEmbedding, chunks, 6);
      contextBlock = top.map((c) => c.text).join("\n\n---\n\n");
      sources = top.map((c) => `chunk-${c.id}`);
    }

    const groq = getGroqClient();
    const stream = await groq.chat.completions.create({
      model: CHAT_MODEL,
      stream: true,
      temperature: 0.3,
      max_tokens: 600,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `CONTEXT:\n${contextBlock}\n\nQUESTION: ${message}`,
        },
      ],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        controller.enqueue(
          encoder.encode(`event: sources\ndata: ${JSON.stringify(sources)}\n\n`)
        );
        for await (const part of stream) {
          const token = part.choices[0]?.delta?.content ?? "";
          if (token) {
            controller.enqueue(encoder.encode(`event: token\ndata: ${JSON.stringify(token)}\n\n`));
          }
        }
        controller.enqueue(encoder.encode(`event: done\ndata: {}\n\n`));
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("[/api/chat]", err);
    return new Response(
      JSON.stringify({ error: "Chat backend error. Check GROQ_API_KEY and embeddings.json." }),
      { status: 500 }
    );
  }
}

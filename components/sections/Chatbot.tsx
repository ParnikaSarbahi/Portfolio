"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, ArrowUp, RotateCcw } from "lucide-react";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Reveal from "@/components/ui/Reveal";

interface Message {
  role: "assistant" | "user";
  content: string;
  sources?: string[];
}

const SUGGESTED = [
  "Tell me about the watermarking paper",
  "What's VulnAgent?",
  "What is the most impressive thing about her",
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi. Ask me anything about Parnika." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }, { role: "assistant", content: "" }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.body) throw new Error("No response body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split("\n\n");
        buffer = events.pop() ?? "";

        for (const evt of events) {
          const eventMatch = evt.match(/event: (\w+)/);
          const dataMatch = evt.match(/data: (.*)/);
          if (!eventMatch || !dataMatch) continue;
          const type = eventMatch[1];
          const data = JSON.parse(dataMatch[1]);

          if (type === "token") {
            setMessages((m) => {
              const next = [...m];
              next[next.length - 1] = {
                ...next[next.length - 1],
                content: next[next.length - 1].content + data,
              };
              return next;
            });
          } else if (type === "sources") {
            setMessages((m) => {
              const next = [...m];
              next[next.length - 1] = { ...next[next.length - 1], sources: data };
              return next;
            });
          }
        }
      }
    } catch {
      setMessages((m) => {
        const next = [...m];
        next[next.length - 1] = {
          role: "assistant",
          content: "Sorry, I couldn't reach the backend. Check the server's GROQ_API_KEY.",
        };
        return next;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Reveal delay={0.1} className="h-full">
      <Card className="flex h-full flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(63,133,98,0.15)]">
                <Sparkles size={15} className="text-[#6fbf94]" />
              </div>
              <p className="text-sm text-[#eef1f5]">
                <span className="font-semibold">Ask Parnika&apos;s assistant</span>
                <span className="text-[#9aa4b2]">: trained on her</span>
              </p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-[rgba(74,222,128,0.3)] bg-[rgba(74,222,128,0.08)] px-2.5 py-1 font-mono text-[10px] text-[#4ade80]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
              Live
            </span>
          </div>

          <div ref={scrollRef} className="max-h-80 flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                {m.role === "assistant" ? (
                  <div>
                    <p className="mb-1 font-mono text-[10px] tracking-wide text-[#6fbf94]">
                      ASSISTANT
                    </p>
                    <p className="text-sm leading-relaxed text-[#dbe0e6] whitespace-pre-wrap">
                      {m.content || (loading && i === messages.length - 1 ? "…" : "")}
                    </p>
                    {m.sources && m.sources.length > 0 && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[10px] text-[#6b7482]">SOURCES</span>
                        {m.sources.slice(0, 3).map((s) => (
                          <Chip key={s} variant="accent" className="!px-2 !py-0.5 !text-[10px]">
                            {s}
                          </Chip>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="max-w-[80%] rounded-xl bg-[rgba(63,133,98,0.14)] px-3.5 py-2 text-sm text-[#eef1f5]">
                    {m.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.07] px-5 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-[#9aa4b2] transition-colors hover:border-[rgba(63,133,98,0.35)] hover:text-[#6fbf94]"
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2"
            >
              <Sparkles size={15} className="text-[#6b7482]" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything"
                className="flex-1 bg-transparent text-sm text-[#eef1f5] placeholder:text-[#6b7482] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setMessages([{ role: "assistant", content: "Hi. Ask me anything about Parnika." }])}
                aria-label="Clear chat"
                className="text-[#6b7482] transition-colors hover:text-[#9aa4b2]"
              >
                <RotateCcw size={14} />
              </button>
              <button
                type="submit"
                disabled={loading}
                aria-label="Send"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2a563f] text-white transition-opacity disabled:opacity-40"
              >
                <ArrowUp size={14} />
              </button>
            </form>
          </div>
        </Card>
    </Reveal>
  );
}

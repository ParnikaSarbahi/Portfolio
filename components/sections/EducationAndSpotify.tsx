"use client";

import Image from "next/image";
import { GraduationCap, Music2 } from "lucide-react";
import { education } from "@/constants/content";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { useFavoriteSongs } from "@/hooks/useFavoriteSongs";

function formatSec(sec: number) {
  const min = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${min}:${s.toString().padStart(2, "0")}`;
}

export default function EducationAndSpotify() {
  const { song, elapsedSec } = useFavoriteSongs();
  const progressPct = song ? Math.min(100, (elapsedSec / song.durationSec) * 100) : 0;

  return (
    <section className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Reveal>
          <Card className="h-full p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs tracking-wide text-[#6b7482]">
              <GraduationCap size={14} /> EDUCATION
            </div>
            <div className="space-y-5">
              {education.map((ed) => (
                <div key={ed.degree} className="flex items-start gap-3">
                  <div className="relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#131a23]">
                    <Image
                      src={ed.logo}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#eef1f5]">{ed.degree}</p>
                    <p className="mt-0.5 text-sm text-[#9aa4b2]">
                      {ed.school}
                      {ed.location ? ` · ${ed.location}` : ""}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-[#6b7482]">
                      {ed.duration} · {ed.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="h-full p-6">
            <div className="mb-4 flex items-center justify-between font-mono text-xs tracking-wide text-[#6b7482]">
              <span className="flex items-center gap-2">
                <Music2 size={14} /> ON REPEAT
              </span>
            </div>
            {song ? (
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#131a23]">
                  <Image
                    src={song.art}
                    alt=""
                    fill
                    sizes="56px"
                    className="animate-spin object-cover [animation-duration:8s]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#eef1f5]">{song.title}</p>
                  <p className="truncate text-xs text-[#9aa4b2]">{song.artist}</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-[#4ade80] transition-all"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between font-mono text-[10px] text-[#6b7482]">
                    <span>{formatSec(elapsedSec)}</span>
                    <span>{formatSec(song.durationSec)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-[#6b7482]">Add songs in constants/content.ts.</p>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

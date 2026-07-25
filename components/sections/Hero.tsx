"use client";

import Image from "next/image";
import { MapPin, Link2, Mail } from "lucide-react";
import { profile } from "@/constants/content";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <Reveal className="h-full">
      <Card className="flex h-full flex-col p-6 sm:p-8">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(63,133,98,0.35)] bg-[rgba(63,133,98,0.12)] px-3 py-1 font-mono text-xs text-[#6fbf94]">
          <MapPin size={12} />
          {profile.location}
        </span>

        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-4xl leading-[1.05] text-[#eef1f5] sm:text-5xl">
              {profile.firstName}
              <br />
              <span className="italic">{profile.lastName}</span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-[#9aa4b2] sm:text-base">
              {profile.title}.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#9aa4b2] sm:text-base">
              {profile.subline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-[#9aa4b2] sm:text-sm">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-[#6fbf94]"
              >
                <Link2 size={14} /> GitHub
              </a>
              <span className="text-white/15">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-[#6fbf94]"
              >
                <Link2 size={14} /> LinkedIn
              </a>
              <span className="text-white/15">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 break-all transition-colors hover:text-[#6fbf94]"
              >
                <Mail size={14} /> {profile.email}
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[200px] shrink-0 sm:mx-0 sm:w-40">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[rgba(63,133,98,0.45)] bg-[#131a23]">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 200px, 160px"
                className="object-cover"
                priority
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

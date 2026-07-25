import { Mail, CalendarClock, FileText } from "lucide-react";
import { contact, profile } from "@/constants/content";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
      <Reveal>
        <Card className="p-6 sm:p-10">
          <h2 className="text-center font-display text-4xl italic text-[#eef1f5] sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-[#9aa4b2]">
            {contact.subtext}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <p className="font-mono text-xs tracking-wide text-[#6fbf94]">VIA EMAIL</p>
              <p className="mt-2 font-mono text-sm font-semibold text-[#eef1f5]">
                {profile.email}
              </p>
              <p className="mt-1 text-xs text-[#9aa4b2]">Collaboration · internships · full-time roles</p>
            </div>
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <p className="font-mono text-xs tracking-wide text-[#6fbf94]">SCHEDULE</p>
              <p className="mt-2 text-sm font-semibold text-[#eef1f5]">15 min call</p>
              <p className="mt-1 text-xs text-[#9aa4b2]">Walk through what I&apos;ve built, or feedback</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 font-mono text-sm text-[#9aa4b2] transition-colors hover:border-[rgba(63,133,98,0.35)] hover:text-[#6fbf94]"
            >
              <Mail size={14} /> Email
            </a>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(
                "Call Schedule"
              )}&body=${encodeURIComponent(
                "Hi Parnika,\n\nUp for a chat for 15 minutes? Let me know a time that works for you.\n\nBest,\n"
              )}`}
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 font-mono text-sm text-[#9aa4b2] transition-colors hover:border-[rgba(63,133,98,0.35)] hover:text-[#6fbf94]"
            >
              <CalendarClock size={14} /> Book a call
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 font-mono text-sm text-[#9aa4b2] transition-colors hover:border-[rgba(63,133,98,0.35)] hover:text-[#6fbf94]"
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}

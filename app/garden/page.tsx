import Link from "next/link";
import GridBackground from "@/components/ui/GridBackground";

export default function GardenPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <GridBackground />
      <p className="font-mono text-xs tracking-widest text-[#6fbf94]">THE GARDEN</p>
      <h1 className="mt-3 font-display text-4xl italic text-[#eef1f5] sm:text-5xl">
        Growing something here.
      </h1>
      <p className="mt-4 max-w-md text-[#9aa4b2]">
        A personal space — thoughts, experiments, and things outside the resume. Coming soon.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/15 px-5 py-2 font-mono text-sm text-[#9aa4b2] transition-colors hover:border-[rgba(63,133,98,0.35)] hover:text-[#6fbf94]"
      >
        ← Back home
      </Link>
    </main>
  );
}

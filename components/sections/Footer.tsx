import { profile } from "@/constants/content";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-6 font-mono text-xs text-[#6b7482] sm:flex-row">
        <p>© 2026 {profile.name}</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-[#6fbf94]">
            {profile.email}
          </a>
          <span>·</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#6fbf94]">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#6fbf94]">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

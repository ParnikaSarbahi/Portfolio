import Hero from "@/components/sections/Hero";
import Chatbot from "@/components/sections/Chatbot";
import LeetCodeGrid from "@/components/sections/LeetCodeGrid";
import GardenTeaser from "@/components/sections/GardenTeaser";
import EducationAndSpotify from "@/components/sections/EducationAndSpotify";
import AboutMarquee from "@/components/sections/AboutMarquee";
import StatsRow from "@/components/sections/StatsRow";
import Toolkit from "@/components/sections/Toolkit";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="top">
      <div className="mx-auto max-w-5xl px-4 pt-28 sm:px-6">
        {/* Row 1: Hero (wide) + Chatbot (narrow), same row height */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <Hero />
          <Chatbot />
        </div>

        {/* Row 2: LeetCode grid + Garden, mirrors row 1 proportions */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
          <LeetCodeGrid />
          <GardenTeaser />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mt-4">
          <EducationAndSpotify />
        </div>
        <AboutMarquee />
        <StatsRow />
        <Toolkit />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

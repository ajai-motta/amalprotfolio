import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import SelectedWork from "./components/SelectedWork";
import VFXBreakdown from "./components/VFXBreakdown";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProductionExperience from "./components/ProductionExperience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Cinematic Fullscreen Hero */}
      <Hero />

      {/* Featured Showreel Player */}
      <Showreel />

      {/* Selected Feature Work Grid */}
      <SelectedWork />

      {/* Interactive Before/After VFX Breakdown Slider */}
      <VFXBreakdown />

      {/* Editorial About Artist Section */}
      <About />

      {/* Software & Technical Arsenal */}
      <Skills />

      {/* Vertical Cinematic Career Timeline */}
      <Experience />

      {/* Education & Specialized Training */}
      <Education />

      {/* Feature Production Exposure Showcase */}
      <ProductionExperience />

      {/* Dramatic Contact CTA */}
      <Contact />
    </div>
  );
}

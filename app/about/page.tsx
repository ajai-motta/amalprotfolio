import React from "react";
import type { Metadata } from "next";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import { User, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Amal B Mathew - VFX Artist",
  description:
    "Learn more about Amal B Mathew, professional background, technical software toolkit, career timeline, and VFX philosophy.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-[var(--background)] text-[var(--foreground)] min-h-screen transition-colors duration-300">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-600 dark:text-amber-400 uppercase mb-4 shadow-sm">
          <User className="w-3.5 h-3.5" />
          <span>BIOGRAPHY &amp; BACKGROUND</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-[0.12em] text-zinc-900 dark:text-white uppercase mb-4">
          ABOUT AMAL B MATHEW
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
          Compositing, Paint &amp; Prep, and Visual Effects artist focused on craft precision, seamless integration, and continuous industry growth.
        </p>
      </div>

      {/* Main About Component */}
      <About />

      {/* Software & Technical Arsenal */}
      <Skills />

      {/* Experience Timeline */}
      <Experience />

      {/* Education */}
      <Education />

      {/* Contact CTA */}
      <Contact />
    </div>
  );
}

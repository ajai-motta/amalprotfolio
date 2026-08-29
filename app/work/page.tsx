import React from "react";
import type { Metadata } from "next";
import SelectedWork from "../components/SelectedWork";
import VFXBreakdown from "../components/VFXBreakdown";
import ProductionExperience from "../components/ProductionExperience";
import Contact from "../components/Contact";
import { Film, Clapperboard, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected VFX Work | Amal B Mathew",
  description:
    "Explore feature film and episodic production experience, paint & prep breakdowns, and compositing projects by Amal B Mathew.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 pb-16 bg-[#070709] min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase mb-4">
          <Clapperboard className="w-3.5 h-3.5" />
          <span>PRODUCTION PORTFOLIO</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-[0.12em] text-white uppercase mb-4">
          WORK &amp; BREAKDOWNS
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
          Comprehensive showcase of selected productions, wire removal passes, cleanplate reconstructions, and compositing breakdowns.
        </p>
      </div>

      {/* Selected Work Portfolio Grid */}
      <SelectedWork />

      {/* Interactive Before / After Breakdown */}
      <VFXBreakdown />

      {/* Dedicated Production Experience Highlight */}
      <ProductionExperience />

      {/* Contact CTA */}
      <Contact />
    </div>
  );
}

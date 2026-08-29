"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Clapperboard, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProductionExperience() {
  const productions = [
    { title: "Deadpool 3", year: "2024", type: "Feature Film", focus: "Paint & Prep / Rig Removal" },
    { title: "Furiosa: A Mad Max Saga", year: "2024", type: "Feature Film", focus: "Environment Prep & Cleanup" },
    { title: "Aadujeevitham", year: "2024", type: "Feature Film", focus: "Desert Sequence Prep & Cleanplate" },
    { title: "Thangalaan", year: "2024", type: "Feature Film", focus: "Period Action VFX Prep" },
    { title: "Avatar: The Last Airbender", year: "2024", type: "Streaming Series", focus: "Elemental FX Plate Prep" },
    { title: "Blue Beetle", year: "2023", type: "Feature Film", focus: "Suit Tracking Prep & Wire Removal" },
    { title: "Ted Lasso", year: "Year to be verified", type: "Television Series", focus: "Crowd & Stadium Plate Prep" },
  ];

  return (
    <section className="py-20 bg-[#08080c] relative border-t border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase mb-4">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>FEATURE FILM &amp; TELEVISION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-[0.14em] text-zinc-100 uppercase">
            PRODUCTION EXPERIENCE
          </h2>

          <p className="mt-3 text-xs sm:text-sm font-mono text-zinc-400">
            Selected productions associated with professional experience.
          </p>
        </div>

        {/* Editorial Horizontal Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productions.map((prod, idx) => (
            <motion.div
              key={prod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-5 rounded bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-400/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-amber-300">
                    {prod.year}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {prod.type}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-zinc-100 group-hover:text-amber-300 transition-colors mt-2">
                  {prod.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-sky-400 shrink-0" />
                <span className="truncate">{prod.focus}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-[11px] font-mono text-zinc-500 max-w-2xl mx-auto">
            * Selected productions associated with professional experience, studio workflows, and collaborative post-production assignments.
          </p>
        </div>
      </div>
    </section>
  );
}

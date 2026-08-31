"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Clapperboard, Sparkles, CheckCircle2, ExternalLink } from "lucide-react";

export default function ProductionExperience() {
  const productions = [
    {
      title: "Dhurandhar: The Revenge",
      year: "2026",
      type: "Feature Film",
      focus: "3D & Visual Effects Artist",
      imdbUrl: "https://www.imdb.com/title/tt39139925/",
    },
    {
      title: "Pallichattambi",
      year: "2026",
      type: "Feature Film",
      focus: "Visual Effects Artist",
      imdbUrl: "https://www.imdb.com/title/tt10515398/",
    },
    {
      title: "Bha. Bha. Ba.",
      year: "2025",
      type: "Feature Film",
      focus: "Visual Effects Artist",
      imdbUrl: "https://www.imdb.com/title/tt31186715/",
    },
    {
      title: "Deadpool 3",
      year: "2024",
      type: "Feature Film",
      focus: "Paint & Prep / Rig Removal",
      imdbUrl: "https://www.imdb.com/title/tt6263850/",
    },
    {
      title: "Furiosa: A Mad Max Saga",
      year: "2024",
      type: "Feature Film",
      focus: "Environment Prep & Cleanup",
      imdbUrl: "https://www.imdb.com/title/tt12037194/",
    },
    {
      title: "Aadujeevitham",
      year: "2024",
      type: "Feature Film",
      focus: "Desert Sequence Prep & Cleanplate",
      imdbUrl: "https://www.imdb.com/title/tt5525650/",
    },
    {
      title: "Thangalaan",
      year: "2024",
      type: "Feature Film",
      focus: "Period Action VFX Prep",
      imdbUrl: "https://www.imdb.com/title/tt23018924/",
    },
    {
      title: "Avatar: The Last Airbender",
      year: "2024",
      type: "Streaming Series",
      focus: "Elemental FX Plate Prep",
      imdbUrl: "https://www.imdb.com/title/tt9376612/",
    },
    {
      title: "Blue Beetle",
      year: "2023",
      type: "Feature Film",
      focus: "Suit Tracking Prep & Wire Removal",
      imdbUrl: "https://www.imdb.com/title/tt9362930/",
    },
    {
      title: "Ted Lasso",
      year: "2020–2023",
      type: "Television Series",
      focus: "Crowd & Stadium Plate Prep",
      imdbUrl: "https://www.imdb.com/title/tt10986410/",
    },
  ];

  return (
    <section className="py-20 bg-[var(--background)] relative border-t border-b border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-600 dark:text-amber-400 uppercase mb-4 shadow-sm">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>FEATURE FILM &amp; TELEVISION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-[0.14em] text-zinc-900 dark:text-zinc-100 uppercase">
            PRODUCTION EXPERIENCE
          </h2>

          <p className="mt-3 text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400">
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
              className="p-5 rounded bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80 hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between shadow-md dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-amber-600 dark:text-amber-300">
                    {prod.year}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {prod.imdbUrl && (
                      <a
                        href={prod.imdbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-1.5 py-0.5 rounded bg-[#f5c518] hover:bg-[#e2b616] text-black font-extrabold text-[9px] font-mono tracking-tight transition-transform duration-200 hover:scale-105 shadow-sm flex items-center gap-0.5"
                        title={`View ${prod.title} on IMDb`}
                        aria-label={`View ${prod.title} on IMDb`}
                      >
                        <span>IMDb</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      {prod.type}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors mt-2">
                  {prod.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Sparkles className="w-3 h-3 text-sky-500 dark:text-sky-400 shrink-0" />
                  <span className="truncate">{prod.focus}</span>
                </div>
                {prod.imdbUrl && (
                  <a
                    href={prod.imdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 dark:text-amber-400 hover:underline shrink-0 text-[10px] flex items-center gap-1"
                    title={`Open ${prod.title} on IMDb`}
                  >
                    <span>IMDb</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
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

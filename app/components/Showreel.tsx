"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface ShowreelProps {
  /** Optional custom YouTube embed URL */
  embedUrl?: string;
  /** Optional custom poster image path */
  posterSrc?: string;
  /** Optional title for accessibility */
  title?: string;
}

export default function Showreel({
  embedUrl = "https://www.youtube.com/embed/WlGBBPkwpyE?si=6NU-16YaosFmEsF_",
  posterSrc = "/images/showreel_poster.svg",
  title = "YouTube video player",
}: ShowreelProps) {
  // State controlling lazy mounting of the iframe
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Append autoplay param when user clicks Play
  const autoplaySrc = embedUrl.includes("?")
    ? `${embedUrl}&autoplay=1`
    : `${embedUrl}?autoplay=1`;

  return (
    <section
      id="showreel"
      className="relative w-full py-12 sm:py-16 md:py-24 bg-zinc-50/70 dark:bg-[#08080b] border-t border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] md:w-[700px] h-[160px] sm:h-[280px] bg-amber-500/5 dark:bg-amber-500/10 blur-[90px] sm:blur-[130px] rounded-full pointer-events-none"
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-amber-600 dark:text-amber-400 uppercase mb-3 shadow-sm">
            <span>FEATURED REEL</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-[0.14em] text-zinc-900 dark:text-zinc-100 uppercase">
            SHOWREEL
          </h2>

          <p className="mt-2 sm:mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Visual effects, cleanplate reconstruction, paint &amp; prep, and compositing work.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. Responsive Outer Container: Max width constrained, centered            */}
        {/* ========================================================================= */}
        <div className="w-full max-w-full sm:max-w-4xl md:max-w-5xl mx-auto">
          <div className="relative w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-800/90 bg-zinc-950 shadow-lg sm:shadow-xl md:shadow-2xl">
            
            {/* ===================================================================== */}
            {/* 2. 16:9 Aspect Ratio Video Wrapper                                    */}
            {/* ===================================================================== */}
            <div className="relative w-full aspect-video overflow-hidden bg-black select-none">
              
              {isPlaying ? (
                /* ================================================================= */
                /* 3. Responsive YouTube Iframe Player                               */
                /* ================================================================= */
                <iframe
                  src={autoplaySrc}
                  title={title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                /* ================================================================= */
                /* 4. Poster Frame + Accessible Play Trigger Button                 */
                /* ================================================================= */
                <div className="relative w-full h-full flex items-center justify-center group">
                  {/* Poster Image */}
                  <Image
                    src={posterSrc}
                    alt="Amal B Mathew VFX Showreel Poster"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Vignette Overlay for Contrast */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-300"
                  />

                  {/* Accessible Play Button Trigger */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play VFX Artist Showreel video"
                    className="relative z-20 flex flex-col items-center gap-3 sm:gap-4 p-4 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400/80 active:scale-95 transition-all group/btn"
                  >
                    {/* Glowing Circular Play Icon */}
                    <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-full bg-amber-400 group-hover/btn:bg-amber-300 text-zinc-950 flex items-center justify-center shadow-2xl shadow-amber-400/40 ring-4 ring-amber-400/30 group-hover/btn:ring-amber-400/50 transition-all duration-300">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-current translate-x-0.5" />
                    </div>

                    {/* Label Badge */}
                    <span className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-zinc-700 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-zinc-200 uppercase group-hover/btn:border-amber-400/70 transition-colors shadow-lg">
                      WATCH SHOWREEL
                    </span>
                  </button>

                  {/* Bottom Slate Overlay Tag */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/70 to-transparent flex items-center justify-between text-[10px] sm:text-xs text-zinc-300 font-mono pointer-events-none z-10"
                  >
                    <span className="truncate text-zinc-300 font-medium">
                      VFX Paint &amp; Prep Reel
                    </span>
                    <span className="text-amber-400 font-semibold shrink-0 ml-2">
                      1080P HD
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




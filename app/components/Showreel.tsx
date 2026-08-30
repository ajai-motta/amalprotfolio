"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Maximize2,
  X,
  Film,
  Sparkles,
  ExternalLink,
  RotateCcw,
  MonitorPlay,
} from "lucide-react";

export default function Showreel() {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  const driveViewUrl =
    "https://drive.google.com/file/d/1UFAmoh2_PFvhm0EQ2gTHm0a4Fit4H5at/view?usp=sharing";
  const driveEmbedUrl =
    "https://drive.google.com/file/d/1UFAmoh2_PFvhm0EQ2gTHm0a4Fit4H5at/preview";

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPlayingModal(false);
      }
    };
    if (isPlayingModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlayingModal]);

  return (
    <section
      id="showreel"
      className="relative py-24 bg-zinc-50/70 dark:bg-[#08080b] border-t border-b border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300 scroll-mt-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 dark:bg-sky-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-600 dark:text-amber-400 uppercase mb-4 shadow-sm"
          >
            <Film className="w-3.5 h-3.5" />
            <span>FEATURED REEL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-black tracking-[0.15em] text-zinc-900 dark:text-zinc-100 uppercase"
          >
            SHOWREEL
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base tracking-wide font-light"
          >
            A curated selection of visual effects, cleanplate reconstruction, wire removal, and compositing work.
          </motion.p>
        </div>

        {/* Cinematic Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-800/80 bg-zinc-950 shadow-xl dark:shadow-2xl dark:shadow-black/90 group"
        >
          {/* Top Letterbox Slate Header */}
          <div className="bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlayingInline
                    ? "bg-amber-400 animate-pulse"
                    : "bg-emerald-500"
                }`}
              />
              <span className="tracking-wider text-zinc-200">
                AMAL_B_MATHEW_SHOWREEL.MOV
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-zinc-400">
              <span className="hidden sm:inline">STREAM / PRORES</span>
              <a
                href={driveViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
                title="Open in Google Drive"
              >
                <span>Google Drive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Player Visual Area */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center">
            {isPlayingInline ? (
              /* Embedded Live Video Stream */
              <div className="relative w-full h-full bg-black">
                <iframe
                  src={driveEmbedUrl}
                  title="Amal B Mathew VFX Showreel"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            ) : (
              /* Poster Artwork & Play Callout */
              <>
                <Image
                  src="/images/showreel_poster.svg"
                  alt="Amal B Mathew VFX Showreel Poster"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Center Interactive Play Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-20 flex flex-col items-center gap-4"
                >
                  <button
                    type="button"
                    onClick={() => setIsPlayingInline(true)}
                    className="flex flex-col items-center gap-3 cursor-pointer focus:outline-none group/btn"
                    aria-label="Play showreel inline"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 flex items-center justify-center shadow-2xl shadow-amber-400/40 transition-all duration-300 ring-4 ring-amber-400/30">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-1" />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-xs font-mono tracking-[0.2em] text-zinc-200 uppercase group-hover/btn:border-amber-400/70 transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>WATCH SHOWREEL</span>
                    </div>
                  </button>
                </motion.div>

                {/* Bottom Controls Bar Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent flex items-center justify-between text-xs text-zinc-300 font-mono z-20">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-zinc-300">VFX &amp; Paint/Prep Reel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPlayingModal(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-mono transition-colors cursor-pointer"
                      aria-label="Theatre modal"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">Theatre Mode</span>
                    </button>
                    <a
                      href={driveViewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="Open in Google Drive"
                      title="Open in Google Drive"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Quick Technical Highlights under Reel */}
          <div className="bg-zinc-100 dark:bg-zinc-950 px-6 py-4 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center transition-colors">
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                DISCIPLINE
              </span>
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300">
                Paint, Prep &amp; Comp
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                PRIMARY TOOL
              </span>
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300">
                Foundry Nuke
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                RESOLUTION
              </span>
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300">
                HD / 4K Master
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                SOURCE
              </span>
              <a
                href={driveViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 justify-center"
              >
                <span>Google Drive Video</span>
                <ExternalLink className="w-3 h-3 inline" />
              </a>
            </div>
          </div>

          {/* Action Row if playing inline */}
          {isPlayingInline && (
            <div className="bg-zinc-900 px-4 py-2 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <button
                type="button"
                onClick={() => setIsPlayingInline(false)}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Show Poster / Reset</span>
              </button>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsPlayingModal(true)}
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Theatre Mode</span>
                </button>
                <a
                  href={driveViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Drive Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Cinematic Modal Player */}
      <AnimatePresence>
        {isPlayingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlayingModal(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl cursor-default flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="bg-zinc-900/90 px-4 py-3 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <MonitorPlay className="w-4 h-4 text-amber-400" />
                  <span className="text-zinc-200 font-semibold">
                    AMAL B MATHEW // VFX SHOWREEL
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={driveViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] transition-colors"
                  >
                    <span>Open in Drive</span>
                    <ExternalLink className="w-3 h-3 text-amber-400" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsPlayingModal(false)}
                    className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close Theatre Mode"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Stream Video Frame */}
              <div className="relative aspect-[16/9] w-full bg-black">
                <iframe
                  src={driveEmbedUrl}
                  title="Amal B Mathew VFX Showreel (Theatre Mode)"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="bg-zinc-950 p-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-zinc-400 font-mono text-[11px]">
                  <span>VFX Paint, Cleanplate Reconstruction &amp; Compositing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/work"
                    onClick={() => setIsPlayingModal(false)}
                    className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-[11px]"
                  >
                    View Project Breakdowns
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsPlayingModal(false)}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-[11px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

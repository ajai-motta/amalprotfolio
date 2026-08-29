"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2, Volume2, VolumeX, X, Film, Sparkles, Layers } from "lucide-react";

export default function Showreel() {
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="showreel" className="relative py-24 bg-[#08080b] border-t border-b border-zinc-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-400/90 uppercase mb-4"
          >
            <Film className="w-3.5 h-3.5" />
            <span>FEATURED REEL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-black tracking-[0.15em] text-zinc-100 uppercase"
          >
            SHOWREEL
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-zinc-400 text-sm sm:text-base tracking-wide font-light"
          >
            A selection of visual effects and compositing work.
          </motion.p>
        </div>

        {/* Cinematic Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl shadow-black/90 group"
        >
          {/* Top Letterbox Slate Header */}
          <div className="bg-zinc-900/90 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="tracking-wider text-zinc-200">AMAL_B_MATHEW_SHOWREEL_4K.MOV</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-zinc-500">
              <span>PRORES 4444</span>
              <span>2.39:1 CINEMASCOPE</span>
              <span className="text-amber-400/90 font-semibold">24 FPS</span>
            </div>
          </div>

          {/* Player Visual Area */}
          <div className="relative aspect-[16/9] sm:aspect-[2.39/1] w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Showreel Poster Artwork */}
            <Image
              src="/images/showreel_poster.svg"
              alt="Amal B Mathew VFX Showreel Poster"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

            {/* Center Interactive Play Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlayingModal(true)}
              className="relative z-20 flex flex-col items-center gap-4 cursor-pointer focus:outline-none group/btn"
              aria-label="Play showreel video"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400/90 hover:bg-amber-300 text-zinc-950 flex items-center justify-center shadow-2xl shadow-amber-400/30 transition-all duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-1" />
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-xs font-mono tracking-[0.2em] text-zinc-200 uppercase group-hover/btn:border-amber-400/60 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>WATCH SHOWREEL</span>
              </div>
            </motion.button>

            {/* Bottom Controls Bar Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent flex items-center justify-between text-xs text-zinc-300 font-mono z-20">
              <div className="flex items-center gap-3">
                <span className="text-amber-400">00:00:00</span>
                <span className="text-zinc-600">/</span>
                <span className="text-zinc-400">00:02:45</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsPlayingModal(true)}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Full screen modal"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Technical Highlights under Reel */}
          <div className="bg-zinc-950 px-6 py-4 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">DISCIPLINE</span>
              <span className="text-xs font-semibold text-zinc-300">Paint, Prep &amp; Comp</span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PRIMARY TOOL</span>
              <span className="text-xs font-semibold text-zinc-300">Foundry Nuke</span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">RESOLUTION</span>
              <span className="text-xs font-semibold text-zinc-300">4K DCI (4096 × 1716)</span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">WORKFLOW</span>
              <span className="text-xs font-semibold text-amber-400">Industry Standard Pipeline</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Modal Player */}
      <AnimatePresence>
        {isPlayingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            <div className="relative w-full max-w-6xl bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setIsPlayingModal(false)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-700"
                aria-label="Close Showreel"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="relative aspect-[16/9] w-full bg-black flex flex-col items-center justify-center p-6 text-center">
                <Image
                  src="/images/showreel_poster.svg"
                  alt="VFX Showreel"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="relative z-10 max-w-xl p-6 bg-zinc-950/85 border border-zinc-800 rounded-lg backdrop-blur-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-mono mb-4 border border-amber-400/20">
                    <Film className="w-3.5 h-3.5" />
                    <span>CINEMATIC SHOWREEL PLAYER</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                    AMAL B MATHEW // VFX SHOWREEL
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    This interactive showreel container supports native video streaming (MP4/H.264/ProRes Web, Vimeo, YouTube Pro). Production reel media can be mounted seamlessly into this player.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="#work"
                      onClick={() => setIsPlayingModal(false)}
                      className="px-5 py-2.5 bg-amber-400 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-amber-300 transition-colors"
                    >
                      Explore Breakdowns
                    </a>
                    <button
                      onClick={() => setIsPlayingModal(false)}
                      className="px-5 py-2.5 bg-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-zinc-700 transition-colors"
                    >
                      Close Player
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

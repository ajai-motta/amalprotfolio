"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Play, Sparkles, Film, Disc } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#060608] pt-24 pb-16">
      {/* Background Graphic / Canvas Plate with Subtle Parallax Scale */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/images/hero_backdrop.svg"
          alt="Cinematic VFX Studio Backdrop"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Cinematic Vignette & Radial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-[#070709]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070709_90%)]" />
      </motion.div>

      {/* Top Technical Metadata Bar */}
      <div className="absolute top-24 left-0 right-0 z-10 max-w-7xl mx-auto px-6 hidden sm:flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 rec-dot inline-block" />
          <span>REC [4K DCI • 23.976 FPS]</span>
        </div>
        <div className="flex items-center gap-4">
          <span>COLOR: ACEScg</span>
          <span>SCOPES: 2.39:1</span>
        </div>
      </div>

      {/* Center Cinematic Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Production Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/60 mb-6 text-xs text-zinc-300 font-mono tracking-[0.2em]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>COMPOSITING • PAINT &amp; PREP • CGI • VISUAL EFFECTS</span>
        </motion.div>

        {/* Large Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-[0.12em] sm:tracking-[0.18em] text-zinc-100 uppercase leading-none drop-shadow-2xl">
            AMAL B MATHEW
          </h1>
        </motion.div>

        {/* Secondary Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-extralight tracking-[0.45em] text-amber-400/90 uppercase">
            VFX ARTIST
          </h2>
        </motion.div>

        {/* Supporting Line / Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent my-2"
        />

        {/* Short introduction from brief */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="max-w-2xl text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal tracking-wide text-center mt-4 px-2"
        >
          Creative and passionate VFX artist with a strong understanding of modern visual-effects tools and a focus on continuous learning and growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Film className="w-4 h-4 text-zinc-900 group-hover:rotate-12 transition-transform" />
            <span>VIEW MY WORK</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-semibold text-xs uppercase tracking-[0.2em] hover:border-zinc-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>CONTACT ME</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator & Optical Guides */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-500">
          EXPLORE PORTFOLIO
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-amber-400/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}

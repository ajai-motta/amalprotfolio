"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Sparkles, Heart, Zap, Compass, BookOpen, Layers } from "lucide-react";

export default function About() {
  const qualities = [
    { title: "Creative", desc: "Strong creative vision translating cinematic concepts into seamless visual realities.", icon: Sparkles },
    { title: "Enthusiastic", desc: "Eager energy brought to every shot, problem-solving complex composite challenges.", icon: Zap },
    { title: "Passionate", desc: "Dedicated love for the artistry and technical depth of filmmaking and visual effects.", icon: Heart },
    { title: "Hard-working", desc: "Committed to delivering meticulous detail in every frame, pixel, and cleanplate.", icon: Layers },
    { title: "Adaptable", desc: "Quickly adjusting to diverse production pipelines, supervisor feedback, and shot iterations.", icon: Compass },
    { title: "Continuous Learner", desc: "Constantly expanding mastery across modern VFX tools, techniques, and emerging workflows.", icon: BookOpen },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--background)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Artwork Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 shadow-xl dark:shadow-2xl group">
              <Image
                src="/images/amal_portrait.png"
                alt="Amal B Mathew - VFX Artist"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Monochromatic & Color Grade Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Slate */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/40 dark:border-white/15 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-800 dark:text-zinc-300 font-semibold uppercase block">ARTIST IDENTITY</span>
                  <span className="font-serif font-bold text-sm text-zinc-950 dark:text-zinc-100 tracking-wider">AMAL B MATHEW</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-800 dark:text-zinc-300 font-semibold uppercase block">LOCATION</span>
                  <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">Kerala, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Bio & Core Qualities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-600 dark:text-amber-400 uppercase mb-4 self-start shadow-sm">
              <User className="w-3.5 h-3.5" />
              <span>ARTIST PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-[0.12em] text-zinc-900 dark:text-zinc-100 uppercase mb-6">
              ABOUT ME
            </h2>

            {/* Editorial Bio Statement from provided brief */}
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
              <p className="border-l-2 border-amber-500 dark:border-amber-400/80 pl-4 py-1 italic text-zinc-900 dark:text-zinc-200">
                &ldquo;I am a creative, enthusiastic and passionate VFX artist with a strong grasp of current visual-effects tools and a creative vision. I am a good listener and a hard worker who enjoys learning, improving my skills and growing within the visual-effects industry.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                Committed to delivering technical precision and seamless photorealism in compositing, paint/prep, wire removal, and digital shot preparation for film and high-end episodic productions.
              </p>
            </div>

            {/* Core Qualities Grid */}
            <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800/80">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 mb-4">
                CORE ARTIST ATTRIBUTES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3 rounded bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-light leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Professional Development",
      organization: "Independent Practice & Continuous Learning",
      location: "Ongoing",
      period: "November 2025 – Present",
      isCurrent: true,
      description:
        "Dedicated to continuous skill development, mastering advanced node compositing techniques in Nuke, exploring emerging real-time VFX workflows, and refining technical precision in digital plate restoration.",
      focusAreas: ["Advanced Compositing", "ACES Pipeline", "Deep Comp", "Emerging VFX Workflows"],
    },
    {
      role: "Paint / Prep Artist",
      organization: "Industrial Pixel Magic Studio",
      location: "Chennai, India",
      period: "January 2023 – December 2023",
      isCurrent: false,
      description:
        "Worked as a Paint/Prep Artist contributing to visual-effects production workflows. Executed wire harness removals, camera tracking marker cleanups, plate restorations, and meticulous shot preparation for cinematic pipelines.",
      focusAreas: ["Paint", "Prep", "Cleanup", "Shot Preparation", "Cleanplate Synthesis"],
    },
    {
      role: "Visual Effects – Advanced",
      organization: "Toonz Academy",
      location: "Thiruvananthapuram, India",
      period: "January 2022 – December 2022",
      isCurrent: false,
      description:
        "Comprehensive advanced visual effects training program emphasizing node-based compositing fundamentals, multi-pass CGI integration, rotoscopy, matchmove tracking, and film-grade visual effects workflows.",
      focusAreas: ["Node-based Compositing", "Rotoscopy", "Tracking & Matchmove", "Digital Artistry"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#07070a] relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif font-black tracking-[0.14em] text-zinc-100 uppercase"
          >
            EXPERIENCE
          </motion.h2>

          <p className="mt-3 text-zinc-400 text-sm sm:text-base font-light">
            Studio production experience, specialized industry training, and ongoing craft development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Central Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-amber-400/80 via-zinc-700 to-zinc-900" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.role + exp.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-zinc-950 border-2 border-amber-400 flex items-center justify-center z-20 shadow-lg shadow-amber-400/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>

                  {/* Content Card */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-6 rounded-md bg-[#0d0d12] border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 shadow-xl">
                      {/* Period Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono uppercase">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Title & Studio */}
                      <h3 className="text-xl font-serif font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4">
                        <span className="text-zinc-300 font-medium">{exp.organization}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      {/* Conservative Description */}
                      <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Focus Area Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                        {exp.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-400 text-[11px] font-mono border border-zinc-800"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

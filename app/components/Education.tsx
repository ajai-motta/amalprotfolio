"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      course: "Visual Effects – Advanced (VFXA)",
      institution: "Toonz Academy, Trivandrum",
      period: "2022",
      description:
        "Specialized intensive diploma in advanced visual effects, digital compositing, rotoscopy, paint/prep, matchmove tracking, and film-grade production pipelines.",
      highlight: "Specialized VFX Diploma",
    },
    {
      course: "Higher Secondary Education",
      institution: "St. Jude's HSS, Vellarikkundu",
      period: "2020 – 2021",
      description:
        "Academic foundation completing secondary schooling with dedication, developing analytical focus, creative problem solving, and technical foundations.",
      highlight: "Foundational Academics",
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#060608] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-serif font-black tracking-[0.14em] text-zinc-100 uppercase"
          >
            EDUCATION
          </motion.h2>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((item, idx) => (
            <motion.div
              key={item.course}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-6 rounded-md bg-[#0d0d12] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-amber-400">
                    {item.period}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  {item.course}
                </h3>

                <p className="text-xs font-mono text-zinc-400 mb-3">
                  {item.institution}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                <span>Certified Education Record</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

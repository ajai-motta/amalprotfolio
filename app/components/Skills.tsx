"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Sparkles } from "lucide-react";

export interface SkillTool {
  name: string;
  category: string;
  discipline: string;
  description: string;
  iconName: string;
}

export default function Skills() {
  const [activeTool, setActiveTool] = useState<string>("Nuke");

  const tools: SkillTool[] = [
    {
      name: "Nuke",
      category: "Compositing & Prep",
      discipline: "Industry Standard Node Compositor",
      description:
        "Node-based compositing, multi-channel EXR pipelines, deep compositing, roto/prep integration, planar tracking projections, and cleanplate creation.",
      iconName: "NUKE",
    },
    {
      name: "Silhouette",
      category: "Paint & Roto",
      discipline: "Advanced Non-Destructive Paint",
      description:
        "High-fidelity rotoscopy, non-destructive clone and grain-aware paint tools, wire removal, and sequence tracking.",
      iconName: "SIL",
    },
    {
      name: "Mocha Pro",
      category: "Tracking & Matchmove",
      discipline: "Planar Tracking & Stabilisation",
      description:
        "Planar motion tracking, lens distortion calibration, mesh warping, insert compositing, and automated camera solver data export.",
      iconName: "MOCHA",
    },
    {
      name: "Autodesk Maya",
      category: "3D & CGI",
      discipline: "3D Modeling, Scene Assembly & Camera Export",
      description:
        "3D scene layout, camera projections, hard-surface matchmove references, and environment assembly.",
      iconName: "MAYA",
    },
    {
      name: "Adobe Photoshop",
      category: "Matte Painting & Cleanplate",
      discipline: "Digital Matte Painting & Texture Synthesis",
      description:
        "Digital matte painting, cleanplate generation, texture projection patches, concept artwork, and bitonal roto reference masks.",
      iconName: "PSD",
    },
    {
      name: "Adobe After Effects",
      category: "Motion & Comp",
      discipline: "Layer-Based Compositing & Motion Graphics",
      description:
        "Layer-based visual effects, kinetic typography, motion graphics, rapid prototyping, and color grading passes.",
      iconName: "AE",
    },
    {
      name: "Adobe Premiere Pro",
      category: "Editorial & Conforming",
      discipline: "Conform, Ingest & Showreel Editorial",
      description:
        "Timeline assembly, shot conforming, EDL/XML interchange, showreel cuts, audio sync, and review export formats.",
      iconName: "PR",
    },
    {
      name: "Unreal Engine",
      category: "Real-Time & Virtual Prod",
      discipline: "Real-Time Environments & Previs",
      description:
        "Real-time scene exploration, virtual production fundamentals, Lumen lighting interaction, and previs set extensions.",
      iconName: "UE",
    },
  ];

  const currentToolData = tools.find((t) => t.name === activeTool) || tools[0];

  return (
    <section id="skills" className="py-24 bg-zinc-50/70 dark:bg-[#08080b] relative border-t border-b border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-600 dark:text-amber-400 uppercase mb-4 shadow-sm"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>SOFTWARE &amp; TECHNICAL ARSENAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif font-black tracking-[0.14em] text-zinc-900 dark:text-zinc-100 uppercase"
          >
            TOOLS I WORK WITH
          </motion.h2>

          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light">
            Production-grade software utilized across feature films, broadcast, and visual effects workflows.
          </p>
        </div>

        {/* Tools Matrix & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Software Grid Buttons (8 Items) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tools.map((tool) => {
              const isSelected = activeTool === tool.name;
              return (
                <button
                  key={tool.name}
                  type="button"
                  onClick={() => setActiveTool(tool.name)}
                  onMouseEnter={() => setActiveTool(tool.name)}
                  aria-pressed={isSelected}
                  className={`p-4 rounded-md text-left transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-zinc-100 dark:bg-zinc-900 border-amber-500 dark:border-amber-400/80 shadow-md text-zinc-950 dark:text-white"
                      : "bg-white dark:bg-[#0d0d12] border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 shadow-sm dark:shadow-none"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      {tool.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-amber-400 text-zinc-950"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
                      }`}
                    >
                      {tool.iconName}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-1 truncate">
                      {tool.discipline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Software Deep Dive Inspector Card */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              key={currentToolData.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full p-6 sm:p-8 rounded-md bg-white dark:bg-[#0e0e14] border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between relative overflow-hidden shadow-lg dark:shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-zinc-900 dark:text-white">
                <span className="text-8xl font-serif font-black">{currentToolData.name[0]}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentToolData.category}</span>
                </div>

                <h3 className="text-3xl font-serif font-bold text-zinc-950 dark:text-white mb-2">
                  {currentToolData.name}
                </h3>

                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                  {currentToolData.discipline}
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      PRODUCTION APPLICATION
                    </span>
                    <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                      {currentToolData.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>PIPELINE INTEGRATION</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ACTIVE STUDIO WORKFLOW</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

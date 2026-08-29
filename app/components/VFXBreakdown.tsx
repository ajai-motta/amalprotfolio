"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlidersHorizontal, ArrowLeftRight, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export default function VFXBreakdown() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeStage, setActiveStage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      id: "raw",
      name: "Original Plate",
      short: "RAW PLATE",
      img: "/images/breakdown/plate_raw.svg",
      desc: "Live action footage with green screen backdrop, wire harnesses, camera tracking markers, and studio rigging.",
    },
    {
      id: "prep",
      name: "Paint & Prep",
      short: "PAINT / PREP",
      img: "/images/breakdown/plate_prep.svg",
      desc: "Complete wire removal, tracking marker paint-out, cleanplate synthesis, and precise character rotoscopy.",
    },
    {
      id: "tracking",
      name: "Tracking & CGI",
      short: "TRACKING / CG",
      img: "/images/breakdown/plate_cg.svg",
      desc: "3D camera matchmove, environment projection, digital asset placement, and spatial depth map integration.",
    },
    {
      id: "final",
      name: "Compositing Final",
      short: "FINAL COMP",
      img: "/images/breakdown/plate_final.svg",
      desc: "Atmospheric volume fog, anamorphic lens flare integration, ACEScg color grading, edge light wrapping, and film grain.",
    },
  ];

  const technicalBadges = [
    "Paint",
    "Prep",
    "Rotoscopy",
    "Tracking",
    "Compositing",
    "Cleanup",
  ];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  // Current right comparison plate based on active stage
  const currentCompareStage = stages[activeStage];

  return (
    <section id="breakdown" className="py-24 bg-[#09090d] relative overflow-hidden border-t border-zinc-900">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase mb-4"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>INTERACTIVE VFX PIPELINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif font-black tracking-[0.14em] text-zinc-100 uppercase"
          >
            FROM PLATE TO FINAL
          </motion.h2>

          {/* Workflow Step Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-zinc-400"
          >
            <span className="text-amber-400 font-semibold">ORIGINAL PLATE</span>
            <span className="text-zinc-600">→</span>
            <span className="text-sky-400 font-semibold">PAINT / PREP</span>
            <span className="text-zinc-600">→</span>
            <span className="text-purple-400 font-semibold">TRACKING</span>
            <span className="text-zinc-600">→</span>
            <span className="text-emerald-400 font-semibold">COMPOSITING</span>
            <span className="text-zinc-600">→</span>
            <span className="text-zinc-200 font-bold">FINAL</span>
          </motion.div>
        </div>

        {/* Technical Disciplines Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {technicalBadges.map((badge) => (
            <span
              key={badge}
              className="px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono tracking-wider text-zinc-300 flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{badge}</span>
            </span>
          ))}
        </div>

        {/* Interactive Before/After Split Viewer */}
        <div className="max-w-5xl mx-auto">
          {/* Stage Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {stages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`py-2.5 px-3 rounded text-left transition-all duration-300 border ${
                  activeStage === idx
                    ? "bg-zinc-800/90 border-amber-400/60 shadow-lg text-white"
                    : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                }`}
              >
                <span className="block text-[10px] font-mono text-zinc-500">STAGE 0{idx + 1}</span>
                <span className="text-xs font-bold font-mono tracking-wider uppercase block truncate">
                  {stage.short}
                </span>
              </button>
            ))}
          </div>

          {/* Draggable Viewport */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-zinc-800 select-none shadow-2xl bg-black cursor-ew-resize group"
          >
            {/* Background Layer: Compared Stage */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={currentCompareStage.img}
                alt={currentCompareStage.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700 text-[11px] font-mono font-bold tracking-wider text-amber-300 uppercase">
                {currentCompareStage.name}
              </div>
            </div>

            {/* Foreground Layer: Original Raw Plate with Clip Path */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src="/images/breakdown/plate_raw.svg"
                alt="Original Plate"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700 text-[11px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
                ORIGINAL PLATE
              </div>
            </div>

            {/* Vertical Split Line & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-[2px] h-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center shadow-xl shadow-amber-400/30 border-2 border-zinc-950 cursor-grab active:cursor-grabbing">
                <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            {/* Drag Hint at Bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1 rounded-full bg-black/75 backdrop-blur-md border border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              ◄ DRAG TO COMPARE STAGES ►
            </div>
          </div>

          {/* Description of Active Stage */}
          <div className="mt-4 p-4 rounded bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div>
              <span className="text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                Active Comparison: Original Plate vs. {currentCompareStage.name}
              </span>
              <p className="font-sans text-zinc-300 text-sm font-light">
                {currentCompareStage.desc}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-[11px] text-zinc-500">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Foundry Nuke / Silhouette Node Tree</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

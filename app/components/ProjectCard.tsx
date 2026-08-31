"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Film, Eye, Sparkles, Layers, ArrowUpRight, ExternalLink } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  year: string;
  role: string;
  productionType: string;
  vfxCategory: string;
  image: string;
  aspectRatio?: string;
  tags: string[];
  description: string;
  imdbUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onSelect?: (project: ProjectData) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(project)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View production details for ${project.title}`}
      className="group relative bg-white dark:bg-[#0d0d12] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800/80 hover:border-amber-400/80 focus:border-amber-400 focus:outline-none transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-md dark:shadow-none"
    >
      {/* Project Image Frame with Cinematic Zoom */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-950">
        <Image
          src={project.image}
          alt={`${project.title} VFX Production Showcase`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-110"
        />

        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700/60 text-[10px] font-mono tracking-wider text-amber-300 font-semibold uppercase">
            {project.year}
          </span>
          <div className="flex items-center gap-1.5">
            {project.imdbUrl && (
              <a
                href={project.imdbUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-2 py-0.5 rounded bg-[#f5c518] hover:bg-[#e2b616] text-black font-extrabold text-[10px] font-mono tracking-tight transition-transform duration-200 hover:scale-105 shadow-md flex items-center gap-1"
                title={`View ${project.title} on IMDb`}
                aria-label={`View ${project.title} on IMDb`}
              >
                <span>IMDb</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700/60 text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
              {project.productionType}
            </span>
          </div>
        </div>

        {/* Hover View Breakdown Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded bg-amber-400 text-zinc-950 text-xs font-bold font-mono uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
            <Eye className="w-3.5 h-3.5" />
            <span>VIEW PRODUCTION DETAILS</span>
          </div>
        </div>
      </div>

      {/* Content & Metadata */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* VFX Category */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider uppercase mb-2">
            <Sparkles className="w-3 h-3 text-sky-500 dark:text-sky-400" />
            <span>{project.vfxCategory}</span>
          </div>

          {/* Title */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Role / Contribution */}
          <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
            <strong className="text-zinc-500 dark:text-zinc-400 font-medium font-mono text-[11px] uppercase tracking-wide block mb-1">
              Production Contribution:
            </strong>
            {project.role}
          </p>
        </div>

        {/* Tags & Actions */}
        <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.imdbUrl && (
              <a
                href={project.imdbUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#f5c518] hover:bg-[#e2b616] text-black font-extrabold text-[10px] font-mono tracking-tight transition-transform duration-200 hover:scale-105 shadow-sm"
                title={`Open ${project.title} on IMDb`}
                aria-label={`Open ${project.title} on IMDb`}
              >
                <span>IMDb</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

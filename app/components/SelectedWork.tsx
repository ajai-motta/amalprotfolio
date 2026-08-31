"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { ProjectData } from "./ProjectCard";
import { Film, Info, X, ShieldCheck, Clapperboard, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";

export const productionsData: ProjectData[] = [
  {
    id: "deadpool-3",
    title: "Deadpool 3",
    year: "2024",
    role: "Paint & Prep workflows, wire harness removal, and shot preparation pipeline support.",
    productionType: "Feature Film",
    vfxCategory: "Paint & Prep / Cleanup",
    image: "/images/projects/deadpool3.jpg",
    imdbUrl: "https://www.imdb.com/title/tt6263850/",
    tags: ["Paint/Prep", "Rig Removal", "Nuke", "Stereo Clean"],
    description:
      "Contributed to high-profile action sequences requiring meticulous wire removal, stunt rig paint-outs, and cleanplate creation within industry standard ACES color pipeline.",
  },
  {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    year: "2024",
    role: "Plate preparation, complex dust/sand environmental cleanup, and marker paint-outs.",
    productionType: "Feature Film",
    vfxCategory: "Environment Prep & Cleanup",
    image: "/images/projects/furiosa.jpg",
    imdbUrl: "https://www.imdb.com/title/tt12037194/",
    tags: ["Cleanplate", "Environment Prep", "Silhouette", "Mocha Pro"],
    description:
      "Assisted in large-scale desert environment cleanups, vehicle rig removals, and camera artifact elimination for intense high-speed chase sequences.",
  },
  {
    id: "aadujeevitham",
    title: "Aadujeevitham",
    year: "2024",
    role: "Visual effects prep, desert sequence cleanups, and organic plate restoration.",
    productionType: "Feature Film",
    vfxCategory: "Plate Prep & Compositing Support",
    image: "/images/projects/aadujeevitham.jpg",
    imdbUrl: "https://www.imdb.com/title/tt5525650/",
    tags: ["Plate Prep", "Texture Patching", "Cleanup", "Nuke"],
    description:
      "Executed shot preparation and technical paint/prep for challenging remote desert cinematography, restoring plates while preserving natural film grain textures.",
  },
  {
    id: "thangalaan",
    title: "Thangalaan",
    year: "2024",
    role: "Period action sequence cleanup, rig removal, and tracking marker paint-out.",
    productionType: "Feature Film",
    vfxCategory: "Period VFX & Cleanup",
    image: "/images/projects/thangalaan.jpg",
    imdbUrl: "https://www.imdb.com/title/tt23018924/",
    tags: ["Wire Removal", "Marker Cleanup", "Paint/Prep", "Rotoscopy"],
    description:
      "Supported historical period drama visuals with detailed cleanup of modern filming apparatus, stunt gear paint-outs, and background element preparation.",
  },
  {
    id: "avatar-tla",
    title: "Avatar: The Last Airbender",
    year: "2024",
    role: "Blue/Green screen plate prep, stunt wire paint-outs, and element cleanup.",
    productionType: "Streaming Series",
    vfxCategory: "Series VFX / Plate Prep",
    image: "/images/projects/avatar.jpg",
    imdbUrl: "https://www.imdb.com/title/tt9376612/",
    tags: ["Blue Screen Prep", "Rig Cleanup", "Nuke", "Tracking"],
    description:
      "Delivered clean background plates and rig removals for fantasy elemental action scenes, enabling seamless CGI creature and magic element integration.",
  },
  {
    id: "blue-beetle",
    title: "Blue Beetle",
    year: "2023",
    role: "Hard-surface suit marker cleanups, wire rig removal, and tracking support.",
    productionType: "Feature Film",
    vfxCategory: "Superhero CGI Support",
    image: "/images/projects/bluebeetle.jpg",
    imdbUrl: "https://www.imdb.com/title/tt9362930/",
    tags: ["Suit Tracking Prep", "Wire Removal", "Cleanup", "Nuke"],
    description:
      "Performed detailed plate cleanups around complex practical superhero armor, eliminating tracking markers and harness wires for CGI weapon transitions.",
  },
  {
    id: "ted-lasso",
    title: "Ted Lasso",
    year: "2020–2023",
    role: "Crowd multiplication plate preparation, stadium background cleanup, and digital fixes.",
    productionType: "Television Series",
    vfxCategory: "Invisible VFX & Crowd Prep",
    image: "/images/projects/tedlasso.jpg",
    imdbUrl: "https://www.imdb.com/title/tt10986410/",
    tags: ["Crowd Plate Prep", "Cleanplate", "Cleanup", "Photoshop"],
    description:
      "Contributed to invisible visual effects tasks including stadium background cleanups, signage adjustments, and crowd integration plate prep.",
  },
];

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const filters = ["All", "Feature Film", "Streaming Series"];

  const filteredProjects =
    activeFilter === "All"
      ? productionsData
      : productionsData.filter((p) => p.productionType.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="work" className="py-24 bg-[var(--background)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-zinc-200 dark:border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-600 dark:text-amber-400/90 uppercase mb-4 shadow-sm">
              <Clapperboard className="w-3.5 h-3.5" />
              <span>SELECTED PRODUCTION EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-[0.12em] text-zinc-900 dark:text-zinc-100 uppercase">
              SELECTED WORK
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light">
              Selected productions and visual effects experience.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-amber-400 text-zinc-950 font-bold shadow-md shadow-amber-400/20"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 shadow-sm"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Responsible Industry Notice Banner */}
        <div className="mb-10 p-4 rounded-md bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed shadow-sm">
          <Info className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold uppercase tracking-wider">
              Production Portfolio Notice:
            </span>{" "}
            The titles listed below represent selected productions associated with professional experience, studio training, and collaborative visual-effects workflows (Paint/Prep, wire removal, plate restoration, and shot preparation).
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Production Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 dark:bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden shadow-2xl cursor-default"
            >
              {/* Modal Banner Graphic */}
              <div className="relative aspect-[16/8] w-full bg-zinc-900 overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-zinc-300 hover:text-white hover:bg-black/90 border border-zinc-700 transition-colors cursor-pointer"
                  aria-label="Close Project Details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-amber-400/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold">
                    {selectedProject.year}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                    {selectedProject.productionType} • {selectedProject.vfxCategory}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.imdbUrl && (
                    <a
                      href={selectedProject.imdbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#f5c518] hover:bg-[#e2b616] text-black font-black text-xs tracking-tight transition-transform duration-200 hover:scale-105 shadow-md shrink-0"
                      title={`Open ${selectedProject.title} on IMDb`}
                      aria-label={`Open ${selectedProject.title} on IMDb`}
                    >
                      <span>IMDb</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                  <div className="p-3.5 rounded bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
                    <span className="block text-[11px] font-mono text-amber-600 dark:text-amber-400 font-medium uppercase tracking-wider mb-1">
                      Professional Contribution
                    </span>
                    <p className="text-zinc-800 dark:text-zinc-200">{selectedProject.role}</p>
                  </div>

                  <p>{selectedProject.description}</p>
                </div>

                {/* Tech Tags & IMDb Action */}
                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {selectedProject.imdbUrl && (
                    <a
                      href={selectedProject.imdbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      <span>View Title on IMDb</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

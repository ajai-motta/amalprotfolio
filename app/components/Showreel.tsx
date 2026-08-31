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
  RotateCcw,
  MonitorPlay,
  ExternalLink,
  HardDrive,
} from "lucide-react";

/**
 * Transforms any Google Drive URL, share link, or raw file ID into an embeddable preview URL.
 */
export function getGoogleDriveEmbedUrl(urlOrId: string): string {
  if (!urlOrId) return "";
  const trimmed = urlOrId.trim();

  // Match /file/d/{id} format
  const fileIdMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }

  // Match id={id} query parameter format
  const idParamMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch && idParamMatch[1]) {
    return `https://drive.google.com/file/d/${idParamMatch[1]}/preview`;
  }

  // If it's already an embed preview link
  if (trimmed.includes("drive.google.com") && trimmed.includes("/preview")) {
    return trimmed;
  }

  // If it's a raw Google Drive File ID (alphanumeric string)
  if (/^[a-zA-Z0-9_-]{20,}$/.test(trimmed)) {
    return `https://drive.google.com/file/d/${trimmed}/preview`;
  }

  return trimmed;
}

/**
 * Returns a direct viewable Google Drive link for opening in a new tab.
 */
export function getGoogleDriveDirectLink(urlOrId: string): string {
  if (!urlOrId) return "#";
  const trimmed = urlOrId.trim();

  const fileIdMatch =
    trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/view?usp=sharing`;
  }

  if (/^[a-zA-Z0-9_-]{20,}$/.test(trimmed)) {
    return `https://drive.google.com/file/d/${trimmed}/view?usp=sharing`;
  }

  return trimmed;
}

// Hardcoded permanent Google Drive Showreel URLs
const GOOGLE_DRIVE_SHOWREEL_VIEW_URL =
  "https://drive.google.com/file/d/1UFAmoh2_PFvhm0EQ2gTHm0a4Fit4H5at/view?usp=sharing";
const GOOGLE_DRIVE_SHOWREEL_EMBED_URL =
  "https://drive.google.com/file/d/1UFAmoh2_PFvhm0EQ2gTHm0a4Fit4H5at/preview";

export default function Showreel() {
  // View mode state: separated into mobile and desktop views using React state
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Playback states
  const [isDesktopPlayingInline, setIsDesktopPlayingInline] = useState(false);
  const [isDesktopPlayingModal, setIsDesktopPlayingModal] = useState(false);
  const [isMobilePlaying, setIsMobilePlaying] = useState(false);

  const embedSrc = GOOGLE_DRIVE_SHOWREEL_EMBED_URL;
  const directDriveSrc = GOOGLE_DRIVE_SHOWREEL_VIEW_URL;

  // Manage responsive view state dynamically
  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleViewportChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobileView(e.matches);
    };

    // Initialize state
    setIsMobileView(mediaQuery.matches);

    // Event listener for viewport changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleViewportChange);
      return () => mediaQuery.removeEventListener("change", handleViewportChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleViewportChange);
      return () => mediaQuery.removeListener(handleViewportChange);
    }
  }, []);

  // Lock body scroll and listen for Escape key when desktop modal is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDesktopPlayingModal(false);
      }
    };

    if (isDesktopPlayingModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDesktopPlayingModal]);

  return (
    <section
      id="showreel"
      className="relative py-10 sm:py-20 md:py-24 bg-zinc-50/70 dark:bg-[#08080b] border-t border-b border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[700px] h-[180px] sm:h-[350px] bg-amber-500/5 dark:bg-sky-950/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-amber-600 dark:text-amber-400 uppercase mb-3 sm:mb-4 shadow-sm"
          >
            <Film className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>FEATURED REEL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-serif font-black tracking-[0.12em] sm:tracking-[0.15em] text-zinc-900 dark:text-zinc-100 uppercase"
          >
            SHOWREEL
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2 text-zinc-600 dark:text-zinc-400 text-xs sm:text-base tracking-wide font-light max-w-2xl mx-auto leading-relaxed"
          >
            A curated selection of visual effects, cleanplate reconstruction, wire removal, and compositing work streamed via Google Drive.
          </motion.p>
        </div>

        {/* State-Separated Views Container */}
        {!isMounted ? (
          /* SSR Hydration Skeleton / Placeholder */
          <div className="relative aspect-video max-w-5xl mx-auto rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 animate-pulse flex items-center justify-center">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <HardDrive className="w-4 h-4 text-amber-500 animate-spin" />
              <span>Loading Google Drive Stream...</span>
            </div>
          </div>
        ) : isMobileView ? (
          /* ========================================================================= */
          /* MOBILE VIEW (Rendered exclusively when isMobileView is TRUE in state)     */
          /* ========================================================================= */
          <div key="mobile-showreel-view" className="w-full max-w-md mx-auto">
            <div className="rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-800/90 bg-zinc-950 shadow-xl">
              {/* Mobile Top Slate Header */}
              <div className="bg-zinc-900 px-3.5 py-2.5 border-b border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isMobilePlaying
                        ? "bg-amber-400 animate-pulse"
                        : "bg-emerald-500"
                    }`}
                  />
                  <span className="tracking-wider text-zinc-200 truncate font-semibold">
                    AMAL_MATHEW_REEL
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[9px] text-amber-400 font-mono font-semibold">
                    G-DRIVE HD
                  </span>
                </div>
              </div>

              {/* Mobile Video Area / Poster Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {isMobilePlaying ? (
                  
                  <div className="relative aspect-video overflow-hidden rounded-xl">
  <iframe
    src={embedSrc}
    className="absolute inset-0 w-full h-full border-0"
  />
</div>


                ) : (
                  <div
                    onClick={() => setIsMobilePlaying(true)}
                    className="relative w-full h-full block group touch-manipulation cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Play showreel from Google Drive on mobile"
                  >
                    <Image
                      src="/images/showreel_poster.svg"
                      alt="Amal B Mathew VFX Showreel Poster"
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />

                    {/* Center Mobile Touch Play Trigger */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4 z-20">
                      <div className="w-14 h-14 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center shadow-2xl shadow-amber-400/50 ring-4 ring-amber-400/30 active:scale-90 transition-transform">
                        <Play className="w-7 h-7 fill-current translate-x-0.5" />
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-zinc-700 text-[10px] font-mono tracking-wider text-amber-300 font-bold uppercase shadow-md flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>PLAY FROM DRIVE</span>
                      </span>
                    </div>

                    {/* Bottom Mobile Tag */}
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-[10px] text-zinc-300 font-mono z-20">
                      <span className="truncate text-zinc-300 font-medium">
                        VFX &amp; Cleanplate Reel
                      </span>
                      <span className="text-amber-400 font-mono font-semibold">
                        Google Drive Stream
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Controls & Specs Bar */}
              <div className="p-3.5 bg-zinc-900/90 border-t border-zinc-800 flex flex-col gap-3">
                {isMobilePlaying ? (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsMobilePlaying(false)}
                      className="flex-1 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                      <span>Show Poster / Reset</span>
                    </button>
                    <a
                      href={directDriveSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-zinc-300 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      title="Open in Google Drive"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsMobilePlaying(true)}
                      className="flex-1 py-3 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-95 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all touch-manipulation cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Play Showreel Here</span>
                    </button>
                    <a
                      href={directDriveSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
                      title="Open directly in Google Drive"
                    >
                      <ExternalLink className="w-4 h-4 text-amber-400" />
                    </a>
                  </div>
                )}

                {/* Mobile Spec Badges */}
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="p-1.5 rounded bg-zinc-800/60 border border-zinc-800">
                    <span className="block text-[8px] font-mono text-zinc-500 uppercase">
                      Discipline
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300 truncate block font-medium">
                      Paint / Prep
                    </span>
                  </div>
                  <div className="p-1.5 rounded bg-zinc-800/60 border border-zinc-800">
                    <span className="block text-[8px] font-mono text-zinc-500 uppercase">
                      Primary Tool
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300 truncate block font-medium">
                      Foundry Nuke
                    </span>
                  </div>
                  <div className="p-1.5 rounded bg-zinc-800/60 border border-zinc-800">
                    <span className="block text-[8px] font-mono text-zinc-500 uppercase">
                      Source
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 truncate block font-medium">
                      Google Drive HD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* DESKTOP VIEW (Rendered exclusively when isMobileView is FALSE in state)   */
          /* ========================================================================= */
          <div key="desktop-showreel-view" className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-800/80 bg-zinc-950 shadow-2xl dark:shadow-black/90 group"
            >
              {/* Desktop Top Letterbox Slate Header */}
              <div className="bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isDesktopPlayingInline
                        ? "bg-amber-400 animate-pulse"
                        : "bg-emerald-500"
                    }`}
                  />
                  <span className="tracking-wider text-zinc-200 truncate text-xs font-semibold">
                    AMAL_B_MATHEW_SHOWREEL
                  </span>
                </div>
                <div className="flex items-center gap-4 shrink-0 text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] tracking-wider text-amber-400 font-semibold font-mono">
                    GOOGLE DRIVE 1080P MASTER
                  </span>
                  <a
                    href={directDriveSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
                    title="Open Showreel on Google Drive in a new tab"
                  >
                    <span>Open in Drive</span>
                    <ExternalLink className="w-3 h-3 text-amber-400" />
                  </a>
                </div>
              </div>

              {/* Desktop Player Visual Area */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {isDesktopPlayingInline ? (
                  <iframe
                    src={embedSrc}
                    title="Amal B Mathew VFX Showreel - Google Drive Player"
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      src="/images/showreel_poster.svg"
                      alt="Amal B Mathew VFX Showreel Poster"
                      fill
                      priority
                      sizes="(max-width: 1200px) 90vw, 1100px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-500" />

                    {/* Center Interactive Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20"
                    >
                      <button
                        type="button"
                        onClick={() => setIsDesktopPlayingInline(true)}
                        className="flex flex-col items-center gap-3 cursor-pointer focus:outline-none group/btn"
                        aria-label="Play showreel inline from Google Drive"
                      >
                        <div className="w-20 md:w-24 h-20 md:h-24 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 flex items-center justify-center shadow-2xl shadow-amber-400/40 transition-all duration-300 ring-4 ring-amber-400/30">
                          <Play className="w-9 md:w-10 h-9 md:h-10 fill-current translate-x-1" />
                        </div>
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-zinc-700 text-xs font-mono tracking-[0.2em] text-zinc-200 uppercase group-hover/btn:border-amber-400/70 transition-colors shadow-lg">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>STREAM FROM GOOGLE DRIVE</span>
                        </div>
                      </button>
                    </motion.div>

                    {/* Bottom Controls Bar Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-zinc-300 font-mono z-20 gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        <span className="text-zinc-300 truncate text-xs font-medium">
                          VFX &amp; Paint/Prep Reel (Google Drive Stream)
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          type="button"
                          onClick={() => setIsDesktopPlayingModal(true)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-mono transition-colors cursor-pointer active:scale-95"
                          aria-label="Open Theatre mode"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Theatre Mode</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Quick Technical Highlights under Reel */}
              <div className="bg-zinc-100 dark:bg-zinc-950 px-6 py-4 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-4 gap-4 text-center transition-colors">
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-0.5">
                    DISCIPLINE
                  </span>
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300 block truncate">
                    Paint, Prep &amp; Comp
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-0.5">
                    PRIMARY TOOL
                  </span>
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300 block truncate">
                    Foundry Nuke
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-0.5">
                    RESOLUTION
                  </span>
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300 block truncate">
                    1080p Master
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-0.5">
                    SOURCE
                  </span>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 block truncate">
                    Google Drive Stream
                  </span>
                </div>
              </div>

              {/* Action Row if playing inline on Desktop */}
              {isDesktopPlayingInline && (
                <div className="bg-zinc-900 px-4 py-2.5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                  <button
                    type="button"
                    onClick={() => setIsDesktopPlayingInline(false)}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1"
                    aria-label="Return to poster view"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                    <span>Show Poster / Reset</span>
                  </button>
                  <div className="flex items-center gap-4">
                    <a
                      href={directDriveSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors py-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                      <span>Open in Drive</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsDesktopPlayingModal(true)}
                      className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer py-1"
                      aria-label="Switch to Theatre Mode"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Theatre Mode</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>

      {/* Cinematic Modal Player (Desktop Theatre Mode) */}
      <AnimatePresence>
        {isDesktopPlayingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDesktopPlayingModal(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 cursor-pointer"
            role="dialog"
            aria-modal="true"
            aria-label="VFX Showreel Theatre Mode Player"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl cursor-default flex flex-col my-auto"
            >
              {/* Modal Top Bar */}
              <div className="bg-zinc-900/95 px-4 py-3 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400 shrink-0">
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <MonitorPlay className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-zinc-200 font-semibold text-xs truncate">
                    AMAL B MATHEW // VFX SHOWREEL (GOOGLE DRIVE 1080P HD)
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={directDriveSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-amber-400 transition-colors mr-2"
                  >
                    <span>Open in Drive</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsDesktopPlayingModal(false)}
                    className="w-9 h-9 flex items-center justify-center rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer active:scale-95"
                    aria-label="Close Theatre Mode"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Stream Video Frame */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={embedSrc}
                  title="Amal B Mathew VFX Showreel - Theatre Mode Player"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="bg-zinc-950 px-4 py-3 border-t border-zinc-800/80 flex items-center justify-between gap-2.5 text-xs shrink-0">
                <div className="text-zinc-400 font-mono text-[11px] truncate">
                  <span>VFX Paint, Cleanplate Reconstruction &amp; Compositing</span>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <a
                    href={directDriveSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-mono font-semibold rounded transition-colors cursor-pointer text-[11px] active:scale-95 inline-flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Drive Link</span>
                  </a>
                  <Link
                    href="/work"
                    onClick={() => setIsDesktopPlayingModal(false)}
                    className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold uppercase tracking-wider rounded transition-colors cursor-pointer text-[11px] active:scale-95"
                  >
                    View Breakdowns
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsDesktopPlayingModal(false)}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer text-[11px] active:scale-95"
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




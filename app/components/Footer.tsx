"use client";

import React from "react";
import { Film, Mail, Phone, ArrowUp } from "lucide-react";

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050507] text-zinc-400 border-t border-zinc-900 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-12 border-b border-zinc-900">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                <Film className="w-3.5 h-3.5" />
              </div>
              <span className="font-serif font-bold text-lg tracking-[0.2em] text-white">
                AMAL B MATHEW
              </span>
            </div>
            <div className="text-xs font-mono tracking-[0.3em] text-amber-400 uppercase mb-3">
              VFX ARTIST
            </div>
            <p className="text-xs font-mono text-zinc-500 max-w-sm tracking-wider">
              Visual Effects • Compositing • Paint &amp; Prep • CGI
            </p>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a
              href="mailto:amalbmathew1@gmail.com"
              className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors py-1"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              <span>amalbmathew1@gmail.com</span>
            </a>

            <a
              href="tel:+919061152367"
              className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors py-1"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              <span>+91 9061152367</span>
            </a>

            <a
              href="https://linkedin.com/in/amalbmathew"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-sky-400 transition-colors py-1"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-zinc-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.imdb.com/name/nm18127511/?ref_=ttfc_fcr_19_62"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors py-1"
            >
              <Film className="w-3.5 h-3.5 text-amber-500" />
              <span>IMDb</span>
            </a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400/60 transition-colors flex items-center justify-center cursor-pointer shadow-lg shadow-black/40"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-600">
          <div>
            © {new Date().getFullYear()} Amal B Mathew. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Kasaragod, Kerala, India</span>
            <span>•</span>
            <span>ACEScg / DCI Color Pipeline</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

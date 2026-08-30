import React from "react";
import type { Metadata } from "next";
import Contact from "../components/Contact";
import { Mail, Sparkles, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Amal B Mathew - VFX Artist",
  description:
    "Get in touch with Amal B Mathew for visual effects, compositing, paint/prep, and film production collaborations.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 bg-[var(--background)] text-[var(--foreground)] min-h-screen transition-colors duration-300">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-600 dark:text-amber-400 uppercase mb-4 shadow-sm">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>DIRECT CONTACT PORTAL</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-[0.12em] text-zinc-900 dark:text-white uppercase mb-4">
          GET IN TOUCH
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
          Open for studio opportunities, freelance compositing, paint/prep contracts, and creative VFX projects.
        </p>
      </div>

      {/* Main Contact Section */}
      <Contact />
    </div>
  );
}

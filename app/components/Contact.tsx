"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";

// Crisp inline LinkedIn icon
function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#060608] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-amber-500/10 via-sky-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A COLLABORATION</span>
          </motion.div>

          {/* Dramatic Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-[0.08em] sm:tracking-[0.12em] text-white uppercase leading-tight"
          >
            LET&apos;S CREATE SOMETHING IMPOSSIBLE.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-zinc-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Available for VFX, compositing, paint/prep and creative collaborations.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:amalbmathew1@gmail.com"
              className="px-8 py-3.5 rounded-sm bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group"
            >
              <Mail className="w-4 h-4 text-zinc-900" />
              <span>SEND AN EMAIL</span>
            </a>

            <a
              href="https://linkedin.com/in/amalbmathew"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-semibold text-xs uppercase tracking-[0.2em] hover:border-zinc-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group"
            >
              <LinkedInIcon className="w-4 h-4 text-sky-400" />
              <span>CONNECT ON LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
            </a>

            <a
              href="tel:+919061152367"
              className="px-8 py-3.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-semibold text-xs uppercase tracking-[0.2em] hover:border-zinc-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>CALL ME</span>
            </a>
          </motion.div>

          {/* Contact Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
          >
            {/* Email Card */}
            <div className="p-5 rounded bg-[#0d0d12] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    EMAIL ADDRESS
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("amalbmathew1@gmail.com", "email")}
                    className="p-1 rounded text-zinc-500 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href="mailto:amalbmathew1@gmail.com"
                  className="text-sm font-mono text-zinc-200 hover:text-amber-300 transition-colors break-all cursor-pointer"
                >
                  amalbmathew1@gmail.com
                </a>
              </div>
              <div className="mt-4 pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-500">
                Direct Inquiries
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded bg-[#0d0d12] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    PHONE / WHATSAPP
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("+919061152367", "phone")}
                    className="p-1 rounded text-zinc-500 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                    title="Copy Phone Number"
                    aria-label="Copy Phone number to clipboard"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href="tel:+919061152367"
                  className="text-sm font-mono text-zinc-200 hover:text-amber-300 transition-colors"
                >
                  +91 9061152367
                </a>
              </div>
              <div className="mt-4 pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-500">
                Voice &amp; Instant Messaging
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded bg-[#0d0d12] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    PROFESSIONAL NETWORK
                  </span>
                  <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <a
                  href="https://linkedin.com/in/amalbmathew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-zinc-200 hover:text-amber-300 transition-colors block truncate"
                >
                  linkedin.com/in/amalbmathew
                </a>
              </div>
              <div className="mt-4 pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-500">
                Industry Profile &amp; Connect
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded bg-[#0d0d12] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    LOCATION &amp; TIMEZONE
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-sm font-mono text-zinc-200 block">
                  Kasaragod, Kerala, India
                </span>
              </div>
              <div className="mt-4 pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-500">
                IST (UTC +5:30) • Remote Ready
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

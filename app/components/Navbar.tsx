"use client";

import React, { useState, useEffect } from "react";
import Link from "next/navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Film } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#08080a]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl shadow-black/60"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-amber-400 group-hover:border-amber-400/60 transition-colors">
            <Film className="w-4 h-4 text-zinc-300 group-hover:text-amber-300 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base tracking-[0.25em] text-zinc-100 group-hover:text-white transition-colors">
              AMAL B MATHEW
            </span>
            <span className="text-[10px] tracking-[0.3em] text-zinc-400 font-mono">
              VFX ARTIST
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-zinc-300">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 hover:text-white ${
                  isActive ? "text-white font-semibold" : "text-zinc-400"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400/80 to-sky-400/80"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-sm shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-300 transform active:scale-95"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white rounded-md bg-zinc-900/80 border border-zinc-800 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0a0d]/95 backdrop-blur-xl border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-300 hover:text-amber-300 py-2 border-b border-zinc-900 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-zinc-600 font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-sm"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

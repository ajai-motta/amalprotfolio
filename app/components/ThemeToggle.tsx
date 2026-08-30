"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-md bg-zinc-800/40 border border-zinc-700/40 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 p-2 rounded-md transition-all duration-300 focus:outline-none cursor-pointer group ${
        isDark
          ? "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-zinc-800 hover:border-zinc-700 shadow-sm"
          : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-amber-600 border border-zinc-300 shadow-sm"
      } ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <motion.div
          key={theme}
          initial={{ rotate: isDark ? -90 : 90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: isDark ? 90 : -90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-amber-400" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-xs font-mono tracking-wider uppercase">
          {isDark ? "Dark Theme" : "Light Theme"}
        </span>
      )}
    </button>
  );
}

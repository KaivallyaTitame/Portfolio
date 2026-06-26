"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "AI Systems Builder",
  "MEAN Stack Developer",
  "Your Next Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl text-center relative z-10">
        {/* Monospace label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8]/70 text-sm md:text-base mb-4"
        >
          {"> hello, world! I'm"}
        </motion.p>

        {/* Big name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-[72px] font-bold text-white mb-4"
        >
          Kaivallya Titame
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-12 md:h-14 flex items-center justify-center mb-6"
        >
          <span className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-4xl font-semibold text-[#38BDF8]">
            {text}
          </span>
          <span className="w-[3px] h-8 md:h-10 bg-[#38BDF8] ml-1 animate-pulse" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          I build high-performance web apps, scalable APIs, and AI-powered automation tools. Let&apos;s bring your idea to life.
        </motion.p>

        {/* Green badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            Available for Freelance · Pune, India
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[#38BDF8] text-[#08101F] font-semibold rounded-md hover:bg-[#38BDF8]/90 hover:shadow-lg hover:shadow-[#38BDF8]/20 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#38BDF8] text-[#38BDF8] rounded-md hover:bg-[#38BDF8]/10 transition-all duration-300"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-[#1A2E4A]/50">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">6+</p>
            <p className="text-gray-500 text-sm mt-1">Projects Delivered</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-[#1A2E4A]/50">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">6 mo</p>
            <p className="text-gray-500 text-sm mt-1">Industry Exp</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-[#1A2E4A]/50">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">24h</p>
            <p className="text-gray-500 text-sm mt-1">Response Time</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-[#1A2E4A]/50">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">100%</p>
            <p className="text-gray-500 text-sm mt-1">Client Focus</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

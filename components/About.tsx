"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0D1528] relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#38BDF8]/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">01 / About Me</span>
          <div className="flex-1 h-px bg-[#1A2E4A]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              I&apos;m a freelance developer with 6 months of professional experience at Qualys, where I built an AI-driven agent framework using MCP servers and Playwright for autonomous UI navigation.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              I specialize in Java, Spring Boot, Angular, and full-stack web development. Whether you need a custom web app, REST API, or AI automation tool — I deliver clean, production-ready code on time.
            </p>

            {/* Inline badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08101F] border border-[#1A2E4A] text-gray-300 text-sm">
                📍 {portfolio.location}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08101F] border border-[#1A2E4A] text-gray-300 text-sm">
                💻 Freelance Developer
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                ● Open for Projects
              </span>
            </div>
          </motion.div>

          {/* Right side: What I offer card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#08101F] border border-[#1A2E4A] rounded-xl p-6 hover:border-[#38BDF8]/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Why Work With Me</h3>
                <p className="text-gray-400 text-sm">Professional freelance development</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#38BDF8]">▹</span>
                <span className="text-gray-300">6 months industry experience at Qualys</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#38BDF8]">▹</span>
                <span className="text-gray-300">Clean, well-documented, production-ready code</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#38BDF8]">▹</span>
                <span className="text-gray-300">Fast delivery with ongoing support</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#38BDF8]">▹</span>
                <span className="text-gray-300">Transparent communication &amp; updates</span>
              </div>
            </div>

            {/* Stat boxes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0D1528] border border-[#1A2E4A] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">6+</p>
                <p className="text-gray-500 text-xs mt-1">Projects Built</p>
              </div>
              <div className="bg-[#0D1528] border border-[#1A2E4A] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">100%</p>
                <p className="text-gray-500 text-xs mt-1">On-Time Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const filters = ["All", "Full Stack", "AI & Automation", "Systems"] as const;

export default function Projects() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0D1528] relative overflow-hidden">
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#38BDF8]/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">04 / Projects</span>
          <div className="flex-1 h-px bg-[#1A2E4A]"></div>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === filter
                  ? "bg-[#38BDF8] text-[#08101F]"
                  : "bg-[#08101F] text-gray-400 border border-[#1A2E4A] hover:text-[#38BDF8] hover:border-[#38BDF8]/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
          {filtered.map((project) => (
            <div
              key={project.name}
              className="bg-[#08101F] border border-[#1A2E4A] rounded-xl p-6 flex flex-col hover:border-[#38BDF8]/60 hover:-translate-y-[3px] transition-all duration-300 group"
            >
              {/* Top row: category + featured badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-gray-500 uppercase tracking-wider">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project name */}
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white group-hover:text-[#38BDF8] transition-colors mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                {project.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] px-2 py-1 bg-[#0D1528] text-gray-500 border border-[#1A2E4A] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-[#38BDF8] transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-[#38BDF8] transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

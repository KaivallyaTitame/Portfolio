"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#08101F] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">03 / Experience</span>
          <div className="flex-1 h-px bg-[#1A2E4A]"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#38BDF8]/30" />

          <div className="space-y-10">
            {portfolio.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[#38BDF8] bg-[#08101F]" />

                {/* Card */}
                <div className="bg-[#0D1528] border border-[#1A2E4A] rounded-xl p-6 hover:border-[#38BDF8]/40 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg font-[family-name:var(--font-space-grotesk)]">
                        {exp.role}
                      </h3>
                      <p className="text-[#38BDF8] text-sm">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-[family-name:var(--font-jetbrains-mono)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="text-[#38BDF8] mt-1 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-[family-name:var(--font-jetbrains-mono)] text-xs px-2.5 py-1 bg-[#08101F] text-gray-400 border border-[#1A2E4A] rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

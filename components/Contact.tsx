"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Freelance Project",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(form.subject);
    const mailtoBody = encodeURIComponent(
      `Hi Kaivallya,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${portfolio.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0D1528] relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38BDF8]/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">06 / Get In Touch</span>
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
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Have a project in mind? Need a custom web app, API, or automation tool?
              I&apos;m based in {portfolio.location} and ready to bring your ideas to life.
            </p>

            {/* Social links */}
            <div className="space-y-4">
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-[#38BDF8] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#08101F] border border-[#1A2E4A] flex items-center justify-center group-hover:border-[#38BDF8]/50 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">{portfolio.email}</span>
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#38BDF8] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#08101F] border border-[#1A2E4A] flex items-center justify-center group-hover:border-[#38BDF8]/50 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#38BDF8] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#08101F] border border-[#1A2E4A] flex items-center justify-center group-hover:border-[#38BDF8]/50 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={`https://wa.me/917378906749`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#38BDF8] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#08101F] border border-[#1A2E4A] flex items-center justify-center group-hover:border-[#38BDF8]/50 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#08101F] border border-[#1A2E4A] rounded-xl p-6 hover:border-[#38BDF8]/20 transition-colors duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0D1528] border border-[#1A2E4A] text-white text-sm focus:border-[#38BDF8] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0D1528] border border-[#1A2E4A] text-white text-sm focus:border-[#38BDF8] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0D1528] border border-[#1A2E4A] text-white text-sm focus:border-[#38BDF8] focus:outline-none transition-colors"
                >
                  <option value="Freelance Project">Freelance Project</option>
                  <option value="Web App Development">Web App Development</option>
                  <option value="API Development">API Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0D1528] border border-[#1A2E4A] text-white text-sm focus:border-[#38BDF8] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#38BDF8] text-[#08101F] font-semibold rounded-lg hover:bg-[#38BDF8]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
            <p className="text-gray-500 text-xs text-center mt-4">Response within 24 hours</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

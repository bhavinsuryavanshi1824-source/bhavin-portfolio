"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  ChevronDown, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  Cpu 
} from "lucide-react";
import { ResumeModal } from "@/components/ui/ResumeModal";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section 
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges / Availability Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 animate-in fade-in duration-700">
          {/* Identity Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-mono font-medium text-slate-300">
              AI Engineer &amp; Full-Stack Developer
            </span>
          </div>

          {/* Availability Indicator */}
          {personalInfo.isAvailableForHire && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availabilityText}</span>
            </div>
          )}
        </div>

        {/* Main Hero Typography */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl">
          {/* Name Display */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-sans">
            <span className="block text-slate-100">BHAVIN</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
              SURYAVANSHI
            </span>
          </h1>

          {/* Punchy Tagline */}
          <div className="border-l-2 border-violet-500/40 pl-4 sm:pl-6 py-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100 leading-snug">
              &ldquo;{personalInfo.tagline}&rdquo;
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Call to Actions & Social Icons */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
          {/* Primary CTA: Explore Projects */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-violet-600/25 transition-all duration-200 group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA: Download Resume */}
          <button
            onClick={() => setResumeOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
          >
            <Download className="w-4 h-4 text-violet-400" />
            <span>Download Resume</span>
          </button>

          {/* Tertiary CTA: Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-2 sm:ml-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/[0.08]">
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Pills under Hero */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Generative AI</div>
              <div className="text-[11px] text-slate-400">Agentic &amp; LLM Systems</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Full-Stack Scale</div>
              <div className="text-[11px] text-slate-400">FastAPI &amp; React.js</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Cybersecurity</div>
              <div className="text-[11px] text-slate-400">Defensive Architecture</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">LNCT Bhopal</div>
              <div className="text-[11px] text-slate-400">B.Tech IoT &amp; Cyber (23-27)</div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="group inline-flex flex-col items-center text-slate-400 hover:text-white transition"
            aria-label="Scroll down to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase mb-1">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-violet-400" />
          </a>
        </div>
      </div>

      {/* Resume Modal Instance */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}

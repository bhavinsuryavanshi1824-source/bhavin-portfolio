"use client";

import React, { useState } from "react";
import { personalInfo, aboutNarrative } from "@/data/portfolioData";
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Shield, 
  Layers, 
  FileText, 
  Download, 
  Eye, 
  ExternalLink 
} from "lucide-react";
import { ResumeModal } from "@/components/ui/ResumeModal";

export function About() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const pillarIcons = [
    <Sparkles key="ai" className="w-5 h-5 text-violet-400" />,
    <Layers key="stack" className="w-5 h-5 text-cyan-400" />,
    <Shield key="cyber" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <>
      <section
        id="about"
        aria-label="About Bhavin Suryavanshi"
        className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090e]/70 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 uppercase tracking-wider mb-3">
              01 // About Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Engineering with Purpose &amp; Rigor
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Bridging algorithmic intelligence, resilient backend architectures, and proactive cybersecurity fundamentals.
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Personal Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-5 hover:border-violet-500/30 transition-all duration-300">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {aboutNarrative.paragraph1}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {aboutNarrative.paragraph2}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {aboutNarrative.paragraph3}
                </p>

                {/* Belief Banner */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <blockquote className="text-lg sm:text-xl font-semibold text-white italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
                    &ldquo;{aboutNarrative.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Engineering Disciplines
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {aboutNarrative.pillars.map((pillar, idx) => (
                    <div
                      key={pillar.title}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-200"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-white/[0.04]">
                          {pillarIcons[idx]}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.05]">
                          {pillar.badge}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-100">{pillar.title}</h4>
                      <p className="mt-1.5 text-[11px] text-slate-400 leading-normal">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Education & Authentic Resume Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] hover:border-violet-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-2xl rounded-full pointer-events-none" />

                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Foundation</span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {personalInfo.education.degree}
                </h3>
                <div className="text-sm font-medium text-cyan-300 mt-0.5">
                  Specialization in {personalInfo.education.specialization}
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    <span>{personalInfo.education.institution}, {personalInfo.education.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="font-mono">{personalInfo.education.period}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-xs font-semibold text-slate-200">Key Focus Areas:</div>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {personalInfo.education.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Genuine Resume Card (PART 4 REAL ASSET INTEGRATION) */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-950/20 via-white/[0.02] to-transparent border border-violet-500/30 hover:border-violet-500/50 transition-all shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Curriculum Vitae</h4>
                      <p className="text-[11px] font-mono text-slate-400">Bhavin-Suryavanshi-Resume.pdf</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Official Document
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Comprehensive breakdown of AI engineering workflows, hackathon contributions (SIH 2025), and academic background.
                </p>

                {/* Resume Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition shadow-md shadow-violet-600/20"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Resume</span>
                  </button>

                  <a
                    href="/resume/Bhavin-Suryavanshi-Resume.pdf"
                    download="Bhavin-Suryavanshi-Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] rounded-xl transition"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

              {/* Genuine Data Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {aboutNarrative.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 transition-colors flex flex-col justify-center"
                  >
                    <div className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-cyan-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

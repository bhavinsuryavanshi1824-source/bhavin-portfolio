"use client";

import React from "react";
import { personalInfo, aboutNarrative } from "@/data/portfolioData";
import { GraduationCap, MapPin, Calendar, CheckCircle2, Sparkles, Shield, Layers } from "lucide-react";

export function About() {
  const pillarIcons = [
    <Sparkles key="ai" className="w-5 h-5 text-violet-400" />,
    <Layers key="stack" className="w-5 h-5 text-cyan-400" />,
    <Shield key="cyber" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section
      id="about"
      aria-label="About Bhavin Suryavanshi"
      className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090e]"
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
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-5">
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
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 transition-colors"
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

          {/* Right Column: Education & Genuine Stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] relative overflow-hidden">
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

            {/* Genuine Data Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {aboutNarrative.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-center"
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
  );
}

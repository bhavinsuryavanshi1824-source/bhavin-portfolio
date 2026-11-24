"use client";

import React, { useState } from "react";
import { projects } from "@/data/portfolioData";
import { Project, ProjectCategory } from "@/lib/types";
import { CaseStudyModal } from "./CaseStudyModal";
import { 
  ShieldAlert, 
  ExternalLink, 
  Github, 
  BookOpen, 
  CheckCircle, 
  Sparkles, 
  Cpu, 
  Layers, 
  ArrowUpRight,
  Database,
  Terminal,
  Activity
} from "lucide-react";

export function FeaturedProjects() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "flagship") return project.isFlagship;
    if (filter === "ai") return project.category === "ai";
    if (filter === "cybersecurity") return project.category === "cybersecurity";
    if (filter === "fullstack") return project.category === "fullstack";
    return true;
  });

  const flagshipProject = projects.find((p) => p.isFlagship) || projects[0];

  return (
    <section
      id="projects"
      aria-label="Featured Engineering Projects"
      className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-3">
              03 // Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured Software &amp; Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Concrete implementations spanning AI-driven cybersecurity scanners, multi-document research agents, and hackathon platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl self-start md:self-auto">
            {[
              { label: "All Projects", key: "all" },
              { label: "Flagship", key: "flagship" },
              { label: "AI & LLMs", key: "ai" },
              { label: "Cybersecurity", key: "cybersecurity" },
              { label: "Full-Stack & CV", key: "fullstack" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === tab.key
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FLAGSHIP SHOWCASE: SecureScope AI */}
        {flagshipProject && (filter === "all" || filter === "flagship" || filter === "cybersecurity") && (
          <div className="mb-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-violet-500/30 p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-violet-900/10">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Flagship Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship Project
                  </span>
                  <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    Cybersecurity Assessment Platform
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-violet-300 mt-1">
                    {flagshipProject.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Key Implemented Capabilities */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Implemented Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {flagshipProject.keyFeatures.slice(0, 6).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Engineered With:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {flagshipProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/[0.08] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Flagship Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedCaseStudyId(flagshipProject.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/25 transition"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Detailed Case Study</span>
                  </button>

                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  )}

                  <div className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Demo &amp; Real Scan Ready</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Pipeline Card */}
              <div className="lg:col-span-5 bg-[#0b0f17] border border-white/[0.08] rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-violet-400" />
                    <span className="text-xs font-mono font-bold text-white">System Architecture &amp; Scan Flow</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                    FastAPI + React
                  </span>
                </div>

                {/* Pipeline Steps Preview */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-violet-600/30 text-violet-300 text-[11px] flex items-center justify-center font-bold">1</span>
                    <div>
                      <div className="text-white font-medium">Target Input &amp; Demo Trigger</div>
                      <div className="text-[10px] text-slate-400">React Client • Sanitized Host Validation</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-600/30 text-cyan-300 text-[11px] flex items-center justify-center font-bold">2</span>
                    <div>
                      <div className="text-white font-medium">FastAPI Endpoint Dispatcher</div>
                      <div className="text-[10px] text-slate-400">Async Jobs • Real Nmap / Synthetic Demo Engine</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-300 text-[11px] flex items-center justify-center font-bold">3</span>
                    <div>
                      <div className="text-white font-medium">Rule-Based Risk Engine</div>
                      <div className="text-[10px] text-slate-400">CVSS Scoring • Vulnerability Remediation Logic</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600/30 text-emerald-300 text-[11px] flex items-center justify-center font-bold">4</span>
                    <div>
                      <div className="text-white font-medium">SQLite Persistence &amp; CSV Exporter</div>
                      <div className="text-[10px] text-slate-400">Historical Audit Records • Downloadable Reports</div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-xs">
                  {flagshipProject.metrics?.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                      <div className="font-semibold text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* OTHER FEATURED PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects
            .filter((p) => p.id !== "securescope-ai")
            .map((project) => (
              <div
                key={project.id}
                className="group p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-violet-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category and Tags */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-violet-300 border border-white/[0.08]">
                      {project.highlightBadge || project.category.toUpperCase()}
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white p-1"
                        aria-label={`${project.title} repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-1">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  {project.metrics && project.metrics[0] ? (
                    <span className="text-xs font-mono text-slate-400">
                      {project.metrics[0].label}: <strong className="text-slate-200">{project.metrics[0].value}</strong>
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">Autonomous Core</span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-violet-300 group-hover:translate-x-0.5 transition"
                    >
                      <span>Code Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        isOpen={!!selectedCaseStudyId}
        onClose={() => setSelectedCaseStudyId(null)}
      />
    </section>
  );
}

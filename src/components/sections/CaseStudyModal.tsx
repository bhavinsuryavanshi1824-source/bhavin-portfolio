"use client";

import React, { useEffect } from "react";
import { secureScopeCaseStudy } from "@/data/caseStudies";
import { 
  X, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Database, 
  FileText,
  Activity,
  ArrowRight
} from "lucide-react";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const data = secureScopeCaseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#090d16] border border-violet-500/30 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 z-10 text-slate-200">
        {/* Top Navigation / Close Bar */}
        <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 px-2.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                Flagship Case Study
              </span>
              <span className="text-xs font-mono text-cyan-400">
                Architecture Breakdown
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {data.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              {data.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="mt-6 space-y-8 text-sm">
          {/* Executive Summary */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Executive Summary
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {data.summary}
            </p>
          </div>

          {/* Problem vs. Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-red-950/10 border border-red-500/20 space-y-2">
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono uppercase tracking-wider font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {data.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/10 border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Proposed Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {data.proposedSolution}
              </p>
            </div>
          </div>

          {/* System Architecture Flow */}
          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-violet-400">
                End-to-End Pipeline
              </div>
              <h3 className="text-lg font-bold text-white">
                {data.architectureDetails.title}
              </h3>
              <p className="text-xs text-slate-400">
                {data.architectureDetails.description}
              </p>
            </div>

            <div className="space-y-3 font-mono">
              {data.architectureDetails.steps.map((s) => (
                <div
                  key={s.step}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-violet-500/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{s.label}</div>
                      <div className="text-xs text-slate-400 font-sans mt-0.5">{s.description}</div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-white/[0.04] text-cyan-300 border border-white/[0.06] shrink-0 self-start sm:self-auto">
                    {s.tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Implemented Features Grid */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Validated Capabilities
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5"
                >
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{f.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal pl-6">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges Solved */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Technical Hurdles &amp; Solutions
            </div>
            <div className="space-y-3">
              {data.technicalChallenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1"
                >
                  <div className="text-xs font-bold text-rose-300">
                    Challenge {idx + 1}: {item.challenge}
                  </div>
                  <div className="text-xs text-slate-300 pl-3 border-l-2 border-emerald-500/40">
                    <strong className="text-emerald-400">Engineered Fix:</strong> {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Technology Stack Matrix */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technical Stack Breakdown
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {data.techStackDetailed.map((cat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className="text-xs font-bold text-violet-300 mb-2 font-mono">
                    {cat.category}
                  </div>
                  <ul className="space-y-1 text-xs text-slate-400 font-mono">
                    {cat.items.map((item, j) => (
                      <li key={j} className="truncate">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            SecureScope AI • Case Study Review
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

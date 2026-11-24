"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/portfolioData";
import { SkillCategoryKey } from "@/lib/types";
import { 
  Code, 
  Sparkles, 
  Layers, 
  Database, 
  ShieldCheck, 
  Wrench, 
  Check, 
  Terminal 
} from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getCategoryIcon = (key: SkillCategoryKey) => {
    switch (key) {
      case "programming":
        return <Code className="w-4 h-4 text-violet-400" />;
      case "genai":
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case "frameworks":
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case "databases":
        return <Database className="w-4 h-4 text-blue-400" />;
      case "cybersecurity":
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case "tools":
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-slate-400" />;
    }
  };

  const filteredCategories = selectedCategory === "all"
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 uppercase tracking-wider mb-3">
              02 // Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Core Competencies &amp; Toolkit
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Organized by engineering discipline. Concrete, hands-on capabilities applied across production-grade projects.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === "all"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-violet-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-violet-500/20 transition-colors">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-violet-200 transition">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {cat.skills.length} competencies
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        skill.highlight
                          ? "bg-violet-500/10 text-violet-200 border border-violet-500/30 hover:border-violet-400/50 shadow-sm shadow-violet-500/5"
                          : "bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:border-white/[0.15]"
                      }`}
                    >
                      {skill.highlight && (
                        <Check className="w-3 h-3 text-violet-400 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in code</span>
                <span className="text-emerald-400/80">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

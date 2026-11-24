"use client";

import React from "react";
import { githubProfileData, personalInfo } from "@/data/portfolioData";
import { Github, ExternalLink, GitBranch, Star, Code, Terminal, CheckCircle2 } from "lucide-react";

export function GithubSection() {
  const data = githubProfileData;

  return (
    <section
      id="github"
      aria-label="GitHub and Open Source"
      className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-3">
              05 // Open Source &amp; Codebase
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              GitHub Repositories &amp; Artifacts
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Authentic software repositories, implementation architectures, and continuous code commit discipline.
            </p>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit @{data.username}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* GitHub Overview Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] mb-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px] shrink-0">
                <div className="w-full h-full bg-[#0b0f17] rounded-[15px] flex items-center justify-center">
                  <Github className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{data.username}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{data.bio}</p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400 font-mono">
                  <span>📍 {data.location}</span>
                  <span>•</span>
                  <span>{data.publicReposCount} Published Repositories</span>
                </div>
              </div>
            </div>

            {/* Language Breakdown Bar */}
            <div className="md:w-72 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Language Breakdown</span>
                <span className="text-violet-400">Primary Stack</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden flex bg-slate-800">
                {data.languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: lang.percentage,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-[11px] font-mono text-slate-400">
                {data.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span>{lang.name} ({lang.percentage})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#090d16] border border-white/[0.06] hover:border-violet-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-violet-400" />
                      <span className="text-sm font-bold text-white group-hover:text-violet-300 transition">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition" />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.05]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <span className="text-slate-500">Public Repo</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { certifications } from "@/data/portfolioData";
import { 
  Award, 
  ExternalLink, 
  Cpu, 
  ShieldAlert, 
  Lock, 
  Code2, 
  CheckCircle2, 
  Calendar 
} from "lucide-react";

export function Certifications() {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-cyan-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section
      id="certifications"
      aria-label="Certifications & Credentials"
      className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 uppercase tracking-wider mb-3">
            04 // Validated Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Certifications &amp; Training
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Verified technical coursework from Cisco Networking Academy and Udemy covering AI architectures, cybersecurity operations, and full-stack engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-violet-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Issuer and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                      {getBadgeIcon(cert.badgeIcon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-violet-300 uppercase tracking-wider font-mono">
                        {cert.issuer}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-snug">
                  {cert.title}
                </h3>

                {/* Skills Learned Badges */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Competencies Evaluated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Link */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500">Curriculum Track: {cert.category}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-violet-400 hover:text-violet-300 font-medium transition"
                  >
                    <span>Issuer Verification</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

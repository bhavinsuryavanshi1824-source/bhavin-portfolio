"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05070a] pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Editorial Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#05070a] rounded-[7px] flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-violet-300">BS</span>
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>
            <p className="text-xs font-mono text-slate-500">
              Designed with curiosity. Built with purpose.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-violet-400 transition">About Journey</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-violet-400 transition">Technical Matrix</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-violet-400 transition">Featured Projects</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-violet-400 transition">Certifications</a>
              </li>
              <li>
                <a href="#github" className="hover:text-violet-400 transition">GitHub Activity</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-violet-400 transition">Contact & Hire</a>
              </li>
            </ul>
          </div>

          {/* Social and Direct Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Direct Connect
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <Mail className="w-3.5 h-3.5 text-violet-400" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} Bhavin Suryavanshi. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-slate-600">
              LNCT Bhopal • IoT &amp; Cybersecurity
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-violet-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

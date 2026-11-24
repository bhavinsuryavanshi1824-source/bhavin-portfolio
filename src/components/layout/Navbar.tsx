"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { ResumeModal } from "@/components/ui/ResumeModal";

interface NavbarProps {
  onOpenResume?: () => void;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <a
              href="#"
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-violet-600/25">
                <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center transition-colors group-hover:bg-[#0e131f]">
                  <span className="font-mono text-sm font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
                    BS
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-100 tracking-tight leading-none group-hover:text-white transition">
                  Bhavin Suryavanshi
                </span>
                <span className="text-[10px] font-mono text-violet-400/90 leading-tight mt-1">
                  AI & Full-Stack
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Group */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Availability Indicator */}
              {personalInfo.isAvailableForHire && (
                <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for work</span>
                </div>
              )}

              {/* Resume Button */}
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] rounded-full transition duration-150 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                <span>Resume</span>
              </button>

              {/* Direct Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-full transition duration-150 shadow-md shadow-violet-600/25"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setResumeOpen(true)}
                className="px-2.5 py-1 text-xs text-slate-200 bg-white/[0.06] border border-white/[0.1] rounded-full"
              >
                Resume
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/[0.04] border border-white/[0.08] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0b0f17] border border-white/10 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition"
                >
                  Get in Touch
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Resume Preview & Download Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

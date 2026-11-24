"use client";

import React, { useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { X, Download, ExternalLink, Mail, Phone, MapPin, GraduationCap, Award, Shield, CheckCircle } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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

  const handleDownload = () => {
    // Generate text/markdown resume or trigger download
    const resumeContent = `BHAVIN SURYAVANSHI
AI Engineer | Full-Stack Developer | Cybersecurity Enthusiast
Bhopal, India | ${personalInfo.email} | ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedInUrl}
GitHub: ${personalInfo.githubUrl}

EDUCATION:
B.Tech in Computer Science Engineering (IoT & Cybersecurity)
Lakshmi Narain College of Technology (LNCT), Bhopal (2023 - 2027)

TECHNICAL SKILLS:
- Languages: Python, JavaScript, TypeScript, Java Basics, HTML, CSS
- Generative AI & LLMs: LangGraph, Groq API, Agentic AI, Llama 3.3, Conversational AI, Vector Embeddings
- Frameworks: React.js, FastAPI, Django, NumPy, Pandas
- Databases: SQL, Firebase, Supabase, SQLite
- Cybersecurity: Network Security, Vulnerability Assessment, OWASP Top 10, Nmap, Wireshark, Kali Linux

FEATURED PROJECTS:
1. SecureScope AI - AI-Powered Security Assessment Platform (React, FastAPI, Nmap, SQLite)
2. ResearchHub AI - Intelligent Research Paper Management System (FastAPI, Llama 3.3 70B, Vector Embeddings)
3. Saathi - AI Mental Wellness Application | SIH 2025 (React.js, Django, LangGraph, Sarvam AI, Firebase)
4. Quotes Recommendation Chatbot (Rasa NLU, Python, React.js)
5. Smart Number Plate Detection System (Python, OpenCV, OCR)

CERTIFICATIONS:
- Introduction to Modern AI - Cisco Networking Academy (Nov 2025)
- Junior Cybersecurity Analyst Career Path - Cisco Networking Academy (2025)
- Cybersecurity Essentials - Cisco Networking Academy (Dec 2025)
- Java Mastery: Beginner's Guide & Full-Stack AI Projects - Udemy (Nov 2025)
`;

    const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Bhavin_Suryavanshi_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0b0f17] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-slate-200">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400">Curriculum Vitae</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Bhavin Suryavanshi</h2>
            <p className="text-sm text-slate-400">AI Engineer • Full-Stack Developer • Cybersecurity Enthusiast</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition shadow-lg shadow-violet-600/20"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="mt-6 space-y-6 text-sm">
          {/* Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-violet-400 shrink-0" />
              <a href={`mailto:${personalInfo.email}`} className="truncate hover:text-white underline">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-white mb-2">
              <GraduationCap className="w-4 h-4 text-violet-400" />
              Education
            </h3>
            <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-medium">
                <span className="text-white">{personalInfo.education.degree} ({personalInfo.education.specialization})</span>
                <span className="text-xs font-mono text-slate-400">{personalInfo.education.period}</span>
              </div>
              <p className="text-slate-400 text-xs mt-1">{personalInfo.education.institution}, {personalInfo.education.location}</p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                {personalInfo.education.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-white mb-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              Technical Core
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="font-medium text-xs text-violet-300 uppercase tracking-wider mb-1">AI & LLM Systems</div>
                <p className="text-xs text-slate-300">Generative AI, LangGraph, Groq API, Llama 3.3, Vector Embeddings, Semantic Search, Conversational NLP</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="font-medium text-xs text-cyan-300 uppercase tracking-wider mb-1">Full-Stack & Backend</div>
                <p className="text-xs text-slate-300">Python, TypeScript, React.js, FastAPI, Django, SQLite, Firebase, RESTful API Engineering</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="font-medium text-xs text-emerald-300 uppercase tracking-wider mb-1">Cybersecurity & Defensibility</div>
                <p className="text-xs text-slate-300">Vulnerability Assessment, OWASP Top 10, Network Security, Nmap, Wireshark, Cryptography Basics</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="font-medium text-xs text-amber-300 uppercase tracking-wider mb-1">Tools & Platforms</div>
                <p className="text-xs text-slate-300">Git, GitHub, Postman, Kali Linux, Cisco Packet Tracer, VS Code</p>
              </div>
            </div>
          </div>

          {/* Key Projects Summary */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-white mb-2">
              <Award className="w-4 h-4 text-emerald-400" />
              Verified Key Projects
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">SecureScope AI</span>
                  <span className="text-xs font-mono text-violet-400">FastAPI • React • Nmap • SQLite</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  AI-powered cybersecurity vulnerability scanner with automated remediation roadmaps, rule-based risk engines, and CSV audit exports.
                </p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">ResearchHub AI</span>
                  <span className="text-xs font-mono text-cyan-400">FastAPI • Llama 3.3 70B • Vector Search</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Agentic academic research paper organizer with dense vector embeddings and contextual question answering.
                </p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Saathi Mental Wellness Platform</span>
                  <span className="text-xs font-mono text-emerald-400">SIH 2025 • LangGraph • Sarvam AI</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Student mental wellness solution with Indic multilingual chatbot, PHQ-9/GAD-7 clinical tests, and zero-knowledge booking.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-white mb-2">
              <CheckCircle className="w-4 h-4 text-violet-400" />
              Verified Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                <div className="font-medium text-white">Introduction to Modern AI</div>
                <div className="text-slate-400">Cisco Networking Academy • Nov 2025</div>
              </div>
              <div className="p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                <div className="font-medium text-white">Junior Cybersecurity Analyst Career Path</div>
                <div className="text-slate-400">Cisco Networking Academy • 2025</div>
              </div>
              <div className="p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                <div className="font-medium text-white">Cybersecurity Essentials</div>
                <div className="text-slate-400">Cisco Networking Academy • Dec 2025</div>
              </div>
              <div className="p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                <div className="font-medium text-white">Java Mastery & Full-Stack AI Projects</div>
                <div className="text-slate-400">Udemy • Nov 2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            Ready to collaborate or hire? <a href={`mailto:${personalInfo.email}`} className="text-violet-400 underline">Get in touch directly</a>.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

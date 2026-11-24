"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { 
  X, 
  Download, 
  ExternalLink, 
  Eye, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ZoomIn, 
  ZoomOut,
  Maximize2
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"image" | "pdf">("image");

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-[#0b0f17] border border-violet-500/30 rounded-2xl sm:rounded-3xl shadow-2xl z-10 text-slate-200 overflow-hidden">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 sm:px-6 border-b border-white/[0.08] bg-[#07090e]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold px-2.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                Official Curriculum Vitae
              </span>
              <span className="text-xs font-mono text-cyan-400">
                Verified Document
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
              {personalInfo.name}
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              AI Engineer • Full-Stack Developer • Cybersecurity Enthusiast
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* View Switcher */}
            <div className="flex items-center p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl text-xs font-mono">
              <button
                onClick={() => setViewMode("image")}
                className={`px-3 py-1 rounded-lg transition ${
                  viewMode === "image"
                    ? "bg-violet-600 text-white font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Document
              </button>
              <button
                onClick={() => setViewMode("pdf")}
                className={`px-3 py-1 rounded-lg transition ${
                  viewMode === "pdf"
                    ? "bg-violet-600 text-white font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                PDF Embed
              </button>
            </div>

            {/* Download PDF button */}
            <a
              href="/resume/Bhavin-Suryavanshi-Resume.pdf"
              download="Bhavin-Suryavanshi-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition shadow-md shadow-violet-600/25"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open in new tab */}
            <a
              href="/resume/Bhavin-Suryavanshi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition"
              title="Open full PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Zoom Controls Bar for image mode */}
        {viewMode === "image" && (
          <div className="px-6 py-2 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-4">
              <span>Aspect Ratio: 100% Original Document</span>
              <span>•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-violet-300 transition"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((prev) => Math.max(0.75, prev - 0.15))}
                className="p-1 rounded hover:bg-white/[0.06] text-slate-300 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => setZoomLevel((prev) => Math.min(1.6, prev + 0.15))}
                className="p-1 rounded hover:bg-white/[0.06] text-slate-300 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="px-2 py-0.5 rounded text-[10px] bg-white/[0.04] hover:bg-white/[0.08] text-slate-300"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        {/* Document Display Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#06080d] flex items-center justify-center min-h-[500px]">
          {viewMode === "image" ? (
            <div
              className="transition-transform duration-200 ease-out max-w-full flex justify-center"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: "top center" }}
            >
              <img
                src="/resume/Bhavin-Suryavanshi-Resume-preview.jpg"
                alt="Bhavin Suryavanshi Official Resume"
                className="max-w-full h-auto rounded-lg shadow-2xl border border-white/[0.1] object-contain max-h-[75vh]"
              />
            </div>
          ) : (
            <iframe
              src="/resume/Bhavin-Suryavanshi-Resume.pdf"
              title="Bhavin Suryavanshi Resume PDF"
              className="w-full h-[72vh] rounded-xl border border-white/[0.1]"
            />
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-[#07090e] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-violet-400" />
              <span>{personalInfo.email}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.phone}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume/Bhavin-Suryavanshi-Resume.pdf"
              download="Bhavin-Suryavanshi-Resume.pdf"
              className="font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Original PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

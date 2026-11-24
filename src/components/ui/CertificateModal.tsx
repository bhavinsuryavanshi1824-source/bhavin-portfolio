"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Download, Award, Calendar, CheckCircle } from "lucide-react";

export interface CertificateModalData {
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  skills?: string[];
  credentialUrl?: string;
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: CertificateModalData | null;
}

export function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
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

  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0b0f17] border border-violet-500/30 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-7 md:p-8 z-10 text-slate-200">
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 px-2.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                {certificate.issuer}
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {certificate.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Issued: {certificate.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Image Preview (Preserving Aspect Ratio) */}
        <div className="mt-5 rounded-xl overflow-hidden bg-black/40 border border-white/[0.06] flex items-center justify-center p-2 sm:p-4">
          <img
            src={certificate.imageSrc}
            alt={certificate.title}
            className="w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Skills Tagged */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-400 mr-2">Competencies:</span>
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <a
            href={certificate.imageSrc}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Image</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] rounded-lg transition"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

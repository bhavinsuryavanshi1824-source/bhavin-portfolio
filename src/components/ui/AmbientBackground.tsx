"use client";

import React from "react";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" aria-hidden="true">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top Hero Ambient Glow (Electric Violet & Cyber Indigo) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] md:w-[900px] h-[450px] bg-gradient-to-tr from-purple-600/15 via-violet-600/20 to-cyan-500/10 blur-[120px] rounded-full" />

      {/* Mid-page Accent Glow */}
      <div className="absolute top-[40%] -left-48 w-[400px] h-[400px] bg-violet-600/10 blur-[130px] rounded-full" />
      <div className="absolute top-[65%] -right-48 w-[450px] h-[450px] bg-cyan-600/10 blur-[140px] rounded-full" />

      {/* Subtle Noise / Texture overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15" />
    </div>
  );
}

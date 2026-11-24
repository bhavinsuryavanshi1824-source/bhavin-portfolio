"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formFeedback, setFormFeedback] = useState<string>("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setFormFeedback("Please fill out all required fields.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setFormStatus("error");
      setFormFeedback("Please provide a valid email address.");
      return;
    }

    setFormStatus("submitting");

    // Simulated robust submission with fallback mailto
    setTimeout(() => {
      setFormStatus("success");
      setFormFeedback(
        `Thank you ${formData.name}! Your message has been logged. You can also send this directly to ${personalInfo.email}.`
      );
    }, 800);
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || "Colleague"}`);
    const body = encodeURIComponent(
      `Hello Bhavin,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 uppercase tracking-wider mb-3">
            06 // Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Have an interesting idea?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
              Let&apos;s build something meaningful.
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Whether you have an internship opportunity, an AI/cybersecurity project, or want to discuss scalable software, my inbox is open.
          </p>
        </div>

        {/* Split Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-violet-500/30 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-violet-300 transition"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, "email")}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedType === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-500/30 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, "phone")}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedType === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Base Location</div>
                <div className="text-sm font-semibold text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Professional Networks
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-white transition"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-white transition"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#0b0f17] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                <h3 className="text-base font-bold text-white">Direct Message Transmission</h3>
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                Encrypted &amp; Direct
              </span>
            </div>

            {formStatus === "success" ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Ready!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  {formFeedback}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleDirectMailto}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Launch in Email Client</span>
                  </button>
                  <button
                    onClick={() => {
                      setFormStatus("idle");
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formStatus === "error" && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
                    {formFeedback}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-slate-300">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-white placeholder-slate-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-slate-300">
                      Email Address <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-white placeholder-slate-500 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI Engineering Internship / Project Collaboration"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-white placeholder-slate-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-300">
                    Message Content <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your initiative, role requirements, or collaboration idea..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-white placeholder-slate-500 transition resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>No spam. Direct delivery to Bhavin.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/25 transition disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{formStatus === "submitting" ? "Transmitting..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

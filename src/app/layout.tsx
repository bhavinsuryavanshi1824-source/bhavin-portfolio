import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { personalInfo } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | AI Engineer & Full-Stack Developer`,
  description: personalInfo.subtitle,
  keywords: [
    "Bhavin Suryavanshi",
    "AI Engineer",
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "Generative AI",
    "Agentic AI",
    "LangGraph",
    "FastAPI",
    "React",
    "LNCT Bhopal",
    "Portfolio",
    "SecureScope AI",
    "ResearchHub AI",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.linkedInUrl }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhavinsuryavanshi.dev",
    title: `${personalInfo.name} | AI Engineer & Full-Stack Developer`,
    description: personalInfo.subtitle,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | AI Engineer & Full-Stack Developer`,
    description: personalInfo.subtitle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-violet-600/30 selection:text-white">
        <AmbientBackground />
        <Navbar />
        <main id="main-content" className="relative z-10 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { CaseStudyData } from "@/lib/types";

export const secureScopeCaseStudy: CaseStudyData = {
  projectId: "securescope-ai",
  title: "SecureScope AI",
  tagline: "Architecting an AI-Powered Vulnerability Assessment & Remediation Platform",
  summary: "A production-oriented security assessment suite designed to bridge the communication gap between raw automated penetration scanners and software developers. SecureScope AI detects vulnerabilities, evaluates risk metrics, explains vulnerabilities in plain language, and generates prioritized remediation roadmaps.",
  problemStatement: "Traditional network vulnerability scanners (such as raw Nmap or CLI audit tools) output dense, technical, unformatted logs that require deep cybersecurity expertise to interpret. Junior engineers and development teams frequently face 'alert fatigue' and struggle to prioritize which vulnerabilities expose immediate risk or how to remediate them effectively.",
  proposedSolution: "SecureScope AI automates vulnerability scanning through an intuitive modern web interface. It combines scanner execution (with safe mock demo modes alongside authentic Nmap scans), a rule-based risk evaluation engine, and structured remediation recommendations. Results are persisted to an audit database and can be exported as structured CSV reports for compliance reviews.",
  architectureDetails: {
    title: "System Architecture & Scan Pipeline",
    description: "The system decouples scanner execution, security evaluation, persistence, and presentation across a resilient client-server boundary.",
    steps: [
      {
        step: 1,
        label: "Client Target Input",
        description: "User submits an IP address, domain, or chooses interactive demo scan mode via the React/TypeScript dashboard with input validation.",
        tech: "React 18, TypeScript, Tailwind CSS",
      },
      {
        step: 2,
        label: "REST API Dispatcher",
        description: "FastAPI receives the scan request, validates sanitized network targets, and dispatches the job to the scanning subprocess.",
        tech: "FastAPI, Pydantic, Python AsyncIO",
      },
      {
        step: 3,
        label: "Scanning Engine Execution",
        description: "Executes Nmap network scan queries to inspect open ports, service versions, banner headers, and network exposures.",
        tech: "Python Subprocess, Nmap, Network Sockets",
      },
      {
        step: 4,
        label: "Risk Engine & Remediation",
        description: "Parses port data against known CVE exposure patterns, evaluates CVSS severity levels, and attaches actionable remediation steps.",
        tech: "Rule-Based Security Engine, Python Data Processing",
      },
      {
        step: 5,
        label: "Persistence & Audit Export",
        description: "Persists scan results, timestamp, host details, and remediation advice into SQLite database. Prepares dynamic CSV report downloads.",
        tech: "SQLite, SQLModel / SQLAlchemy, CSV Streamer",
      },
    ],
  },
  keyFeatures: [
    {
      title: "Real & Demo Scan Workflows",
      description: "Allows users without local Nmap binary or root permissions to explore realistic security findings via an integrated mock sandbox, while supporting live scans on authorized hosts.",
      icon: "ShieldAlert",
    },
    {
      title: "Intelligent Risk Assessment Engine",
      description: "Classifies vulnerabilities into Critical, High, Medium, and Low severity tiers using calibrated scoring models rather than raw unstructured output.",
      icon: "Activity",
    },
    {
      title: "Contextual Plain-English Explanations",
      description: "Transforms cryptic banner disclosures and open port warnings into concise explanations of what attackers could exploit and why it matters.",
      icon: "FileText",
    },
    {
      title: "Actionable Remediation Guidance",
      description: "Provides step-by-step configuration fixes, firewall rules, and patch suggestions for every detected security weakness.",
      icon: "CheckCircle",
    },
    {
      title: "Historical Audit Log & CSV Export",
      description: "Maintains a full timeline of previous scans with instantaneous one-click CSV report generation for security audits and progress tracking.",
      icon: "Database",
    },
  ],
  technicalChallenges: [
    {
      challenge: "Safe execution of network scanning tools without blocking API threads",
      solution: "Implemented asynchronous background job dispatching in FastAPI, allowing the client to query scan progress without thread starvation or timeouts.",
    },
    {
      challenge: "Handling environment constraints where Nmap may not be installed",
      solution: "Designed a dual-engine architecture: an authentic live scanner when system dependencies are satisfied, and a deterministic synthetic scan engine for safe testing, demos, and evaluation.",
    },
    {
      challenge: "Translating heterogeneous raw port scans into structured remediation data",
      solution: "Engineered a normalized schema that maps port and service fingerprints to known security weaknesses with pre-indexed remediation advice.",
    },
  ],
  techStackDetailed: [
    {
      category: "Frontend Architecture",
      items: ["React.js", "TypeScript", "Tailwind CSS", "Lucide React", "Responsive Data Tables"],
    },
    {
      category: "Backend & API",
      items: ["Python 3.11", "FastAPI", "Uvicorn", "Pydantic V2", "RESTful Endpoints"],
    },
    {
      category: "Security & Auditing",
      items: ["Nmap Network Engine", "Port Fingerprinting", "Vulnerability Rules", "CSV Audit Generator"],
    },
    {
      category: "Storage & Persistence",
      items: ["SQLite Database", "Transactional Writes", "Historical Log Management"],
    },
  ],
};

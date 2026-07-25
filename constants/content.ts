export const profile = {
  name: "Parnika Sarbahi",
  firstName: "Parnika",
  lastName: "Sarbahi",
  title:"Building things I don't yet know how to build",
  subline: "Graduating UPES Dehradun, June 2027.",
  location: "Dehradun, Uttarakhand, IN",
  email: "parnikasarbahi29@gmail.com",
  phone: "7380380002",
  github: "https://github.com/ParnikaSarbahi",
  linkedin: "https://linkedin.com/in/parnika-sarbahi",
  leetcodeUsername: "parnikasarbahi29",
  leetcodeUrl: "https://leetcode.com/u/parnikasarbahi29/",
  status: "4th year undergrad, graduating June 2027",
  photo: "/photo/parnika.jpg",
};

export const education = [
  {
    degree: "B.Tech · Computer Science (Cyber Security & Digital Forensics)",
    school: "University of Petroleum and Energy Studies (UPES)",
    location: "Dehradun",
    duration: "Jul 2023 — Jun 2027",
    detail: "CGPA 8.91 / 10.0 · No backlogs",
    logo: "/logos/upes.png",
  },
  {
    degree: "CBSE Higher Secondary (Class XII)",
    school: "Army Public School",
    location: "",
    duration: "Mar 2021 — May 2023",
    detail: "85.0%",
    logo: "/logos/school.png",
  },
  {
    degree: "ICSE Secondary (Class X)",
    school: "Loreto Convent Intermediate College",
    location: "Lucknow",
    duration: "Mar 2019 — Mar 2021",
    detail: "97.0%",
    logo: "/logos/school.png",
  },
];

export const experience = [
  {
    role: "Cybersecurity & Software Development Intern",
    company: "AERSPL (Abhima Energy Recovery System Pvt. Ltd.)",
    duration: "May 2025 — Jul 2025",
    type: "Remote",
    logo: "/logos/aerspl.png",
    tags: ["Python", "MySQL", "Security", "Automation"],
    bullets: [
      "Developed Python modules for structured MySQL data management on a DST-funded industrial robotic automation system",
      "Replaced fragile ad-hoc scripts with clean, configuration-managed code",
      "Enforced input validation, access control, and credential management across the Python codebase",
      "Reduced attack surface in a system where software directly influences physical operations",
    ],
  },
  {
    role: "Core Member — Google Developer Groups (GDG)",
    company: "UPES",
    duration: "Dec 2023 — Aug 2025",
    type: "Part Time",
    logo: "/logos/gdg.png",
    tags: ["Python", "ML", "Community", "Content"],
    bullets: [
      "Designed and delivered Python & ML workshop for 80+ students at GDG ML Bootcamp",
      "Managed GDG LinkedIn page, grew community by 200+ followers over 1.5 years",
      "Created technical content and event promotions",
    ],
  },
  {
    role: "Social Intern",
    company: "Samajik Unnati Sanstha",
    duration: "June 2024",
    type: "8 weeks",
    logo: "/logos/school.png",
    tags: ["Research", "Community Outreach", "Communication"],
    bullets: [
      "Conducted research on improving education quality in slums and led a community project on environmental awareness",
      "Enhanced communication and analytical skills through report writing and presentations",
    ],
  },
];

export const featuredProjects = [
  {
    key: "watermarking",
    category: "HYBRID CNN–TRANSFORMER WATERMARKING",
    title: "Covert, tamper-resistant digital watermarking.",
    status: "IEEE INCRYPOL 2026 · Accepted",
    featured: true,
    description:
      "Frequency-domain embedding built entirely from scratch after self-teaching deep learning over one summer. CNN captures local features, Transformer captures global dependencies, DWT-DCT embeds data in coefficients that survive attacks.",
    metrics: ["PSNR ≈ 52 dB", "SSIM ≈ 0.999", "5+ adversarial attack conditions"],
    tags: ["Python", "PyTorch", "CNN", "Transformer", "DWT-DCT"],
    githubUrl: "https://github.com/ParnikaSarbahi",
  },
  {
    key: "xai-firewall",
    category: "EXPLAINABLE AI IOT FIREWALL",
    title: "Intrusion detection that explains its verdicts.",
    status: "Research paper forthcoming",
    featured: true,
    description:
      "Classifies network traffic as Safe/Risk and explains why using SHAP (global) and LIME (local) with plain-English summaries. Trained on IoT-23 — 1,494,624 rows balanced to 158,964, on an NVIDIA H100 HPC cluster.",
    metrics: ["97% accuracy", "AUC-ROC 0.9964", "Macro F1 0.97"],
    tags: ["TensorFlow", "CNN-BiLSTM", "SHAP", "LIME", "Flask", "Scapy"],
    githubUrl: "https://github.com/ParnikaSarbahi",
  },
];

export const projects = [
  {
    key: "vulnagent",
    category: "VULNAGENT",
    title: "Autonomous LLM vulnerability triage agent.",
    description:
      "Ingests SAST/container/DAST scanner output and triages each finding through a code-driven 4-tool pipeline without per-finding human review. Model-agnostic architecture, confidence-based human escalation.",
    tags: ["Python", "Ollama", "Bandit", "pydantic", "GitHub Actions"],
    metrics: ["85% within-one-severity accuracy", "100% recall on CRITICAL findings"],
    githubUrl: "https://github.com/ParnikaSarbahi",
  },
  {
    key: "jscansec",
    category: "JSCANSEC V2.0",
    title: "Network security & forensics toolkit.",
    description:
      "Enterprise-grade Java toolkit for network reconnaissance and forensic analysis. Strategy Pattern architecture with 10 pluggable modules — port scanning, DNS recon, SSL/TLS analysis, auth testing, and more.",
    tags: ["Java 17+", "MySQL", "Sockets", "SSL/TLS"],
    metrics: ["~60x throughput vs sequential scanning"],
    githubUrl: "https://github.com/ParnikaSarbahi/Projects",
  },
  {
    key: "watermark-eval",
    category: "WATERMARK SECURITY EVALUATION",
    title: "Automated adversarial evaluation toolkit.",
    description:
      "Modular adversarial attack simulation engine with 6+ configurable distortions and standardised PSNR/SSIM/NC evaluation pipeline. Extensible — new attack modules plug in without touching core logic.",
    tags: ["Python", "OpenCV", "scikit-image"],
    metrics: [],
    githubUrl: "https://github.com/ParnikaSarbahi",
  },
  {
    key: "notebookos",
    category: "NOTEBOOKOS",
    title: "Chrome extension for URL-linked notes.",
    description:
      "Links notes to URLs, organises into subject notebooks, syncs via Chrome storage. Built in 6 development phases with post-launch debugging.",
    tags: ["JavaScript", "Chrome APIs", "HTML/CSS"],
    metrics: [],
    githubUrl: "https://github.com/ParnikaSarbahi",
  },
  {
    key: "secure-transfer",
    category: "SECURE FILE TRANSFER SYSTEM",
    title: "Hardened file transfer application.",
    description:
      "Secure file transfer application built with Flask. Diagnosed and fixed 10 bugs spanning CORS, SSE reconnection, XSS sanitisation, and process state desync.",
    tags: ["Python", "Flask", "HTML/JS"],
    metrics: [],
    githubUrl: "https://github.com/ParnikaSarbahi",
  },
];

export const skillGroups = [
  {
    label: "LANGUAGES",
    skills: ["Python", "Java", "Bash", "SQL"],
  },
  {
    label: "DEEP LEARNING & ML",
    skills: [
      "PyTorch",
      "TensorFlow/Keras",
      "CNN",
      "Transformers",
      "BiLSTM",
      "Attention Mechanisms",
      "DWT-DCT",
      "SMOTE",
    ],
  },
  {
    label: "EXPLAINABILITY & XAI",
    skills: ["SHAP", "LIME", "Feature Attribution", "Model Interpretability"],
  },
  {
    label: "AI AGENTS & LLM TOOLING",
    skills: [
      "LLM Tool-Use",
      "Agentic Pipelines",
      "Structured Output",
      "Eval Frameworks",
      "Ollama",
    ],
  },
  {
    label: "SECURITY",
    skills: [
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "OWASP Top 10",
      "SSL/TLS",
      "DNS",
      "IDS/IPS",
      "PKI",
      "Bandit (SAST)",
      "Secure Coding",
    ],
  },
  {
    label: "EVALUATION & BENCHMARKING",
    skills: ["PSNR", "SSIM", "NC", "AUC-ROC", "Precision/Recall/F1"],
  },
  {
    label: "ENGINEERING",
    skills: [
      "REST APIs",
      "GitHub Actions",
      "Flask",
      "MySQL",
      "Multithreading",
      "Socket Programming",
      "OOP",
    ],
  },
];

export const certifications = [
  {
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    year: "Jun 2026",
    badge: "/certs/cisco-junior-analyst.png",
    description:
      "Covers threat analysis, IDS/IPS, security alert triage, firewall and cloud security fundamentals, network defense, and SOC workflows — a full career-path certification from Cisco Networking Academy.",
  },
  {
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    year: "May 2026",
    badge: "/certs/cisco-network-defense.png",
    description:
      "Focused on network security posture, firewall configuration, PKI, identity lifecycle management, endpoint security, and secure data transport, including simulated firewall configuration exercises.",
  },
  {
    name: "Foundations of Cybersecurity",
    issuer: "Google",
    year: "2024",
    badge: "/certs/google-foundations.png",
    description:
      "Introductory Google certification covering the CIA triad, access control principles, threat classification, and applied Python and SQL for security analysis workflows.",
  },
  {
    name: "OCI AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    badge: "/certs/oracle-oci-ai.png",
    description:
      "Oracle Cloud Infrastructure certification covering core AI, machine learning, deep learning, and generative AI concepts, and how they map onto OCI's cloud services.",
  },
];

export const stats = [
  { value: "IEEE", label: "INCRYPOL 2026", context: "JNU New Delhi · Oct 2026" },
  { value: "8.91", label: "CGPA", context: "No backlogs, 6 semesters" },
  { value: "97%", label: "IDS Accuracy", context: "IoT-23, 1.4M rows, H100" },
  { value: "0.9964", label: "AUC-ROC", context: "XAI Firewall" },
  { value: "52dB", label: "PSNR", context: "Watermarking, adversarial" },
  { value: "0.999", label: "SSIM", context: "Watermarking, adversarial" },
  { value: "60x", label: "JScanSec speedup", context: "Multithreaded vs sequential" },
  { value: "80+", label: "GDG Workshop", context: "ML Bootcamp students" },
  { value: "100%", label: "VulnAgent recall", context: "CRITICAL findings" },
];

export const writing = [
  {
    type: "Paper",
    date: "2026",
    title: "Hybrid CNN–Transformer Image Watermarking System",
    venue: "IEEE INCRYPOL 2026 · JNU New Delhi",
    status: "accepted" as const,
  },
  {
    type: "Paper",
    date: "In progress",
    title: "Explainable AI-Powered IoT Firewall",
    venue: "Target venue TBD",
    status: "forthcoming" as const,
  },
];

export const toolkit = [
  "PyTorch",
  "TensorFlow",
  "SHAP",
  "LIME",
  "Flask",
  "Scapy",
  "Nmap",
  "Wireshark",
  "Burp Suite",
  "Bandit",
  "Ollama",
  "MySQL",
  "Java",
  "Python",
];

export const contact = {
  heading: "Let's build something.",
  subtext:
    "Open to cybersecurity engineering, AI/ML research, and applied AI roles. Graduating June 2027.",
};

// Curated static playlist for the "Now Playing" widget — NOT connected to
// live listening activity. Edit this list to change what shows on the site.
// `art` is optional; leave the file out and the widget just shows a plain
// icon instead of album art.
export const favoriteSongs = [
  {
    title: "End of Beginning",
    artist: "Djo",
    durationSec: 159, // 2:39
    art: "/music/end-of-beginning.jpg",
  },
  {
    title: "Riptide",
    artist: "Vance Joy",
    durationSec: 204, // 3:24
    art: "/music/riptide.jpg",
  },
  {
    title: "Self Aware",
    artist: "Temper City",
    durationSec: 181, // 3:01
    art: "/music/self-aware.jpg",
  },
  {
    title: "Daylight",
    artist: "David Kushner",
    durationSec: 213, // 3:33
    art: "/music/daylight.jpg",
  },
  {
    title: "Pumped Up Kicks",
    artist: "Foster The People",
    durationSec: 240, // 4:00
    art: "/music/pumped-up-kicks.jpg",
  },
  {
    title: "Running Up That Hill (A Deal With God)",
    artist: "Kate Bush",
    durationSec: 299, // 4:59
    art: "/music/running-up-that-hill.jpg",
  },
  {
    title: "Mirrors",
    artist: "Justin Timberlake",
    durationSec: 486, // 8:06
    art: "/music/mirrors.jpg",
  },
  {
    title: "Gone, Gone, Gone",
    artist: "Phillip Phillips",
    durationSec: 210, // 3:30
    art: "/music/gone-gone-gone.jpg",
  },
  {
    title: "Notion",
    artist: "The Rare Occasions",
    durationSec: 195, // 3:15
    art: "/music/notion.jpg",
  },
];

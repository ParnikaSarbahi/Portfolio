# Parnika Sarbahi — Profile Data

## Identity & Contact
- Name: Parnika Sarbahi (She/Her)
- Email: parnikasarbahi29@gmail.com
- LinkedIn: linkedin.com/in/parnika-sarbahi
- GitHub: github.com/ParnikaSarbahi
- Location: Dehradun, Uttarakhand, India

## Academic Profile
- Degree: B.Tech Computer Science (Cyber Security & Digital Forensics), UPES Dehradun
- Duration: July 2023 – June 2027 (graduating June 2027)
- Relevant Coursework, Data Structures and Algorithms, Object-Oriented Programming,Computer Networks, Operating Systems, Database Management Systems, Software Engineering, Network Security, 

- CGPA: 8.91/10.0, no backlogs, post 6th semester
- Class XII: Army Public School, CBSE, 85%
- Class X: Loreto Convent Intermediate College, Lucknow, ICSE, 95.83%

## Most Impressive / Flagship Achievement
When asked about Parnika's best, most impressive, proudest, or flagship work, the answer is
unambiguously the **Hybrid CNN-Transformer Image Watermarking System**, for these reasons:
- She had zero deep learning background when she started, and self-taught DL from scratch
  over a single summer specifically to build this.
- It was entirely her own idea — not an assigned coursework or team-assigned project.
- She designed and implemented novel research: combining CNN (local spatial features),
  Transformer (global dependencies), and DWT-DCT frequency-domain embedding into one
  watermarking pipeline, then rigorously validated it under 5+ simultaneous adversarial
  attack conditions (noise injection, JPEG compression, geometric distortion, spatial
  filtering, combined attacks).
- The result was formally validated externally: the paper was ACCEPTED at IEEE INCRYPOL 2026
  (JNU New Delhi, October 8-10, 2026), the strongest external validation of any of her projects.
- Results: PSNR ~52 dB, SSIM ~0.999 held even under adversarial conditions.
This is her flagship, most significant, and most personally meaningful project — rank it above
her other projects (VulnAgent, JScanSec, IoT Firewall, etc.) whenever a question asks for her
single best, most impressive, or most notable piece of work.

## Career Goals
- Primary target: Cybersecurity roles (network security, security engineering, SOC)
- Secondary: AI/ML research, applied AI engineering, LLM agent engineering
- Tertiary: SWE at product companies
- Geography: India or remote
- Priority: Product companies over service companies, high pay and reputation
- Placement season: August–November 2026

## Core Strengths
- Independent research execution from problem identification to publication
- End-to-end ML system design, training, and deployment
-	Network security tool development in Java and Python
-	Explainability and interpretability methods (SHAP, LIME)
-	Adversarial robustness evaluation and systematic benchmarking
-	Strong communication and technical writing (research paper, GDG workshops)
## Major Technical Domains
-	Deep Learning (CNN, Transformer, BiLSTM architectures)
-	Cybersecurity (network security, vulnerability assessment, penetration testing concepts)
-	Explainable AI (SHAP, LIME, XAI methods)
-	Software Engineering (Java, Python, modular design, OOP)
-	Database Engineering (MySQL, structured data pipelines)

## Experience

### Cybersecurity and Software Development Intern — AERSPL (Abhima Energy Recovery System Pvt. Ltd.)
- Duration: May–July 2025, Remote
- DST-funded industrial automation project, Tata Steel collaboration
- Actually did: Python modules for structured MySQL database management of operational data; secure coding (input validation, access control, credential management via config files)
- Certificate available, offer letter verified
- DPIIT recognised company, ISO 45001:2018 certified

### Google Developer Groups (GDG) — UPES, Core Member
- Duration: December 2023 – August 2025
- Delivered a Python and ML workshop for 80+ students at GDG ML Bootcamp — owned curriculum design, logistics, and technical delivery end-to-end
- Grew GDG LinkedIn presence by 200+ followers over 1.5 years through consistent technical content and event promotion
- Collaborated with student leads and faculty

## Projects

### 1. VulnAgent — Autonomous LLM Vulnerability Triage Agent (flagship project)
- **Status:** Built end-to-end, GitHub repo exists. Built using Claude Code as the primary AI coding agent.
- **Stack:** Python, Ollama (local LLM runtime — Llama 3.2), Bandit (SAST), pydantic (schema validation), matplotlib (reporting), GitHub Actions (CI/CD)
- **What it is:** An autonomous, LLM-powered vulnerability triage and remediation agent. Ingests Bandit SAST scanner output, runs each finding through a 4-tool agentic pipeline, and produces severity ratings, code-level fixes, GitHub issue drafts, and human escalations — without manual per-finding triage.
- **Note on scope:** Final/confirmed build uses Bandit (SAST) only. Trivy (container scanning) and simulated OWASP ZAP (DAST) were earlier exploration, not part of the final shipped project — do not overstate scope.
- **Note on runtime model:** Local Llama 3.2 via Ollama (NOT Qwen3, NOT Anthropic API for the runtime — Claude Code was used as the coding/dev agent to *build* VulnAgent, but the deployed agent's inference runs on local Llama 3.2).

**Architecture / pipeline:**
1. Ingests raw Bandit JSON output and normalizes it into a common `Finding` schema via a dedicated parser layer.
2. Triages each finding autonomously through a deterministic, code-controlled agent loop calling four purpose-built LLM tools in sequence:
   - `classify_severity` — severity rating, CVSS score, business impact, confidence
   - `suggest_remediation` — fix description, corrected code snippet, reference links
   - `generate_ticket` — GitHub issue title, markdown body, priority, assignee placeholder
   - `escalate_to_human` — reason, context, urgency
3. Applies guardrails: auto-triages only when severity is non-critical and model confidence is sufficient; otherwise escalates to a human reviewer with full context, persistently logged.
4. Evaluates itself against a 20-finding hand-labelled eval set.
5. Reports to stakeholders in Markdown (plain-English) and JSON (machine-readable), plus a matplotlib severity distribution chart.
6. Runs continuously in CI: GitHub Actions runs Bandit on every push and fails the build on high-severity findings — the project scans itself live.

**Eval results (20 hand-labelled findings):**
- 50% exact-match severity accuracy
- 85% within-one-severity-level accuracy
- 95% escalation accuracy
- 100% recall on CRITICAL findings

**Key engineering decisions / debugging substance:**
- **Deterministic control flow, LLM-driven content:** Early versions let the model freely decide which tool to call next; this failed because a small local model would classify a finding and then simply stop instead of continuing. Redesigned so Python code enforces the triage sequence (classify → branch → remediate+ticket, or escalate) while the LLM only supplies reasoning/content within each forced step.
- **Confidence elicited as a category, not a float:** Asking the model for a continuous 0.0–1.0 self-confidence score produced degenerate output (defaulted to 0 in most real runs) — a general LLM introspection limitation, not a bug. Redesigned the schema to elicit a LOW/MEDIUM/HIGH label instead, mapped to a numeric value in code. This fixed a false-escalation rate that had spiked to 70%.
- **Root-caused a 100% silent tool-failure rate:** `suggest_remediation` failed on every finding. Built a standalone diagnostic script to capture the raw model response, which revealed the model was emitting a well-formed (if slightly malformed) function call as JSON text inside the plain response instead of the API's structured tool-call field — likely triggered by multi-line code-snippet arguments pushing the model off its structured-output path. Fixed with a fallback parser that recovers and repairs these near-miss JSON payloads instead of discarding them.
- **Multi-turn tool-use degradation:** Found that multi-turn tool-use degrades once conversation history includes prior tool calls (model reverts to prose instead of acting) — fixed with explicit per-step instructions instead of relying on implicit context.
- **No silent failures anywhere in the pipeline:** Every forced tool call has an explicit, logged fallback path if the model fails to respond correctly, so weak model output degrades a finding's quality rather than dropping it from the report entirely.
- **Model-agnostic by design:** Built against a free, local model via Ollama (no API cost or key), but the tool-use architecture is directly portable to hosted APIs (Anthropic/OpenAI) with no structural changes.

**Example failure log (real, illustrative):** In one run, `classify_severity` returned a proper structured `tool_calls` block. The next forced step, `suggest_remediation`, failed to emit a `tool_calls` block at all — the model instead dumped a full prose explanation into `content`, including its own severity classification and remediation advice, unstructured. This is the exact "well-formed but structurally derailed" failure mode the fallback parser was built to catch.

**Why it matters:** Most "I used an LLM" projects stop at a working demo. VulnAgent's value is in what happened after the first version worked — systematically finding and fixing real, reproducible failure modes in autonomous LLM tool-use (control-flow drift, unreliable self-confidence, malformed structured output) through diagnostics rather than guesswork, and building defensive fallbacks so the system stays useful even when the model underperforms.

### 2. Explainable AI-Powered IoT Intrusion Detection System
- **Stack:** Python, TensorFlow/Keras, CNN-BiLSTM, SHAP, LIME, Flask, Scapy, scikit-learn
- **Status:** Built and working. Paper written. Not yet submitted to conference.
- **Team:** Parnika Sarbahi, Divyanshu Arora, Yashraj Kumar Gupta. Guide: Dr. Richa Kumari, UPES
- **Dataset:** IoT-23, 1,494,624 raw rows, 17.8x class imbalance, corrected to 158,964 balanced samples (50/50) via undersampling + SMOTE
- **Architecture:** Conv1D(64) → Conv1D(128) → BiLSTM(128) → BiLSTM(64) → Dense(128) → Dense(64) → Dense(1, sigmoid)
- **Training:** NVIDIA H100 HPC cluster (UPES HPC, server 10.16.1.50)
- **Results:** 97% accuracy, AUC-ROC 0.9964, macro F1 0.97
- **Attack types detected:** DDoS, port scan, C&C, botnet, Okiru
- **Explainability:** SHAP KernelExplainer (global), LIME LimeTabularExplainer (local, discretize_continuous=False fix)
- **Deployment:** Flask web app, .csv and .pcap upload, real-time verdict + confidence + plain-English explanation
- **Key bugs fixed:** LIME KeyError:98, shape mismatches, class imbalance causing 100% risk, RAM issues
- **Scope limits:** NO edge deployment, NO real-time sniffing, NO .exe scanning
- 24 features, sliding window size 10, 70/15/15 train/val/test split

### 3. JScanSec v2.0 — Network Security & Forensics Toolkit
- **Stack:** Java 17+, MySQL, Multithreading, Sockets, SSL/TLS, DNS, HTTP
- **Status:** Complete. Public on GitHub.
- **Architecture:** Strategy Pattern — `ForensicAnalyzer` interface, 10 pluggable modules
- **Modules:** Port Scanner (50 threads, banner grabbing, service fingerprinting, 60x throughput), DNS Scanner, SSL/TLS Certificate Analyzer, Web Vulnerability Scanner (exposed files, leaky headers, dangerous HTTP methods), Authentication Tester (11 default credentials), Log Analyzer, Metadata Extractor, Logger (INFO/ERROR/WARN/DEBUG), Config Manager (properties file, no hardcoded creds), Database (MySQL scan_results table), Validator (IP, domain, URL, port range), SimpleTest (unit tests)
- **Performance:** ~60x faster than sequential scanning; port scan of range 1–1000 completes in ~45s

Short summary
- ScanSec is a Java 17 command-line network security & forensics toolkit that combines network reconnaissance, web vulnerability scanning, log forensics, SSL/TLS inspection and simple authentication testing into one interactive tool. It persists scan history to MySQL and is designed for offline/authorized testing only.

What it does (high level)
- Port scanner (multithreaded TCP scanning, banner grabbing)  
- Web vulnerability scanner (checks exposed files, missing security headers, dangerous methods, verifies response bodies)  
- DNS reconnaissance (A records, reverse DNS, common subdomain checks)  
- SSL/TLS certificate analyzer (handshake, chain, expiry, cipher assessment)  
- Log analyzer (parses auth logs and detects brute-force patterns)  
- Metadata extractor (image metadata)  
- Authentication tester (11 common default HTTP Basic credential pairs)  
- Scan history persisted to MySQL with timestamps/duration

### 4. Automated Watermark Security Evaluation Toolkit
- **Stack:** Python, OpenCV, scikit-image
- **Status:** Complete.
- 6+ adversarial distortions tested (noise, JPEG, rotation, scaling, filtering, geometric)
- Standardised PSNR/SSIM/NC metrics with automated reporting
- Extensible: new attack modules plug in without touching core logic

### 5. Hybrid CNN-Transformer Image Watermarking System
- **Stack:** Python, PyTorch, CNN, Transformer, DWT-DCT
- **Status:** ACCEPTED — IEEE INCRYPOL 2026, JNU New Delhi, October 8–10, 2026 (Conference Record: 70801)
- Her own idea, not assigned. Self-taught deep learning from zero over one summer before building.
- CNN handles local spatial features, Transformer handles global dependencies, DWT-DCT for frequency-domain embedding
- Adversarial attacks simulated: noise injection, JPEG compression, geometric distortions, spatial filtering
- Results: PSNR ≈ 52 dB, SSIM ≈ 0.999 under all attack conditions
- End-to-end PyTorch pipeline: data loading, architecture, loss, evaluation
- Trained on H100/PBS cluster; earlier metrics during development were PSNR≈48.30dB, SSIM≈0.99891, NC≈0.9988 (superseded by final published values above)

### 6. NotebookOS
- Chrome Extension linking notes to URLs, subject notebooks, Chrome storage sync
- Built in 6 phases with post-launch bug fixes (manifest errors, CSP-blocked handlers, async messaging)

### 7. Secure File Transfer System
- Python, AES-256-CBC, RSA-2048, Flask GUI — mirrors TLS hybrid encryption
- Full working implementation with benchmark verification
- Fixed 10 bugs: CORS, SSE reconnection, XSS sanitisation, process state desync

### 8. Digital Exposure Analyzer
- Built April 2026, limited details known

### 9. Environmental Learning Platform
- Built September 2025, limited details known

## Certifications
1. **Junior Cybersecurity Analyst Career Path — Cisco Networking Academy** (June 2026) — Threat analysis, IDS/IPS, security alerts, firewall and cloud security, network defense, SOC workflows
2. **Network Defense — Cisco Networking Academy** (May 2026) — Network security posture, firewall configuration, PKI, identity lifecycle management, endpoint security, secure data transport, simulated firewall config
3. **Foundations of Cybersecurity — Google** (2024) — CIA triad, access control, threat classification, Python and SQL in security
4. **Oracle Cloud Infrastructure – AI Foundations Associate — Oracle** (2025) — AI, ML, deep learning, Generative AI, cloud applicability

## Skills (Honest Self-Assessment)

| Skill | Level | Notes |
|---|---|---|
| Python | Advanced | All projects, daily driver |
| Java | Advanced | JScanSec proves it |
| PyTorch | Advanced | Full training pipelines |
| TensorFlow/Keras | Advanced | IoT Firewall H100 training |
| SHAP/LIME | Intermediate | Applied in production |
| LLM tool-use/agents | Intermediate | VulnAgent — Claude Code (build) + Ollama/Llama 3.2 (runtime) |
| Bandit/SAST | Intermediate | VulnAgent |
| Nmap/Wireshark/Burp Suite | Intermediate | Listed, JScanSec adjacent |
| MySQL | Intermediate | AERSPL + JScanSec |
| Flask | Intermediate | IoT Firewall full-stack |
| Git/Linux | Intermediate | Daily usage |
| GitHub Actions CI/CD | Intermediate | VulnAgent |
| pydantic | Intermediate | VulnAgent schema validation |
| DSA | 7/10 | LeetCode 202 solved (76 Easy / 101 Medium / 25 Hard), 414 submissions in past year |
| System Design | 2/10 | Not started — critical gap |
| DL theory depth | 6/10 | Can build, theory/derivations need work |
| Pandas/NumPy | Intermediate | Used in DL work, not practiced standalone |


## Key Gaps (Self-Aware)

- AERSPL internship limited scope — do not overstate (no OLP, no website dev)
- VulnAgent runtime is Llama 3.2 via Ollama, NOT Anthropic API/Claude — Claude Code was used to *build* the agent, not to run it
- VulnAgent final scope is Bandit (SAST) only — Trivy/DAST were early exploration, not shipped
- Pandas/NumPy implied from DL work, not practiced standalone
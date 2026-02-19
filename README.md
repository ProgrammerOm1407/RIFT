

# PharmaGuard: AI-Powered Pharmacogenomic Risk Prediction 🧬💊

**RIFT 2026 National Hackathon | HealthTech & Explainable AI Track** **Team Members:** Om Chavan, Bhagyesh Karwande, Kunal Dusane, Atul Shankar Jadhao, Uddhav Bhople.

---

## 🚀 Links

* **Live Application:** [PASTE_YOUR_VERCEL_OR_RENDER_URL_HERE]
* **LinkedIn Demo Video:** [PASTE_YOUR_LINKEDIN_VIDEO_URL_HERE]
* **API Documentation:** `GET /docs` (FastAPI Swagger)

---

## 📋 Project Overview

Adverse drug reactions (ADRs) are responsible for over 100,000 deaths annually in the US alone. **PharmaGuard** is a precision medicine algorithm designed to mitigate this crisis. By analyzing patient genetic data in **Variant Call Format (VCF)**, the system identifies variants in six critical metabolic genes and provides clinically actionable drug-dosing recommendations aligned with **CPIC (Clinical Pharmacogenetics Implementation Consortium)** guidelines.

### Core Features

* **VCF v4.2 Parsing:** High-performance genomic data extraction using `cyvcf2`.
* **Precision Risk Assessment:** Real-time analysis of 6 core genes: `CYP2D6`, `CYP2C19`, `CYP2C9`, `SLCO1B1`, `TPMT`, and `DPYD`.
* **Explainable AI (XAI):** LLM-generated clinical summaries that cite specific biological mechanisms and star-allele variants.
* **Structured JSON Output:** Full compliance with the RIFT mandatory data schema.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, TailwindCSS (Clinical-grade UI)
* **Backend:** Python 3.10, FastAPI (Genomic Pipeline)
* **Genomics:** `cyvcf2` (HTSLib wrapper for VCF parsing)
* **AI/LLM:** OpenAI GPT-4o / Google Gemini 1.5 Pro
* **Deployment:** Vercel (Frontend), Render (Backend)

---

## 🏗️ Architecture

1. **Ingestion:** User uploads a `.vcf` file (max 5MB) and selects target drugs.
2. **Genomic Mapping:** The Python backend parses the VCF for specific `rsID` markers associated with CPIC star-alleles.
3. **Phenotype Engine:** Translates diplotypes (e.g., `*1/*4`) into metabolizer phenotypes (e.g., Poor Metabolizer).
4. **Clinical Logic:** Cross-references phenotypes against the drug-risk matrix to assign severity (Safe, Toxic, etc.).
5. **Explainability:** LLM processes the raw genetic data into a human-readable clinical explanation.

---

## 🚦 Usage Example

```json
{
  "patient_id": "PATIENT_001",
  "drug": "CODEINE",
  "risk_assessment": {
    "risk_label": "Toxic",
    "severity": "critical"
  },
  "pharmacogenomic_profile": {
    "primary_gene": "CYP2D6",
    "phenotype": "URM (Ultra-rapid Metabolizer)"
  }
}

```

---

## ⚙️ Installation & Setup

### Prerequisites

* Python 3.9+
* Node.js 18+

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

```

### Frontend Setup

```bash
cd frontend
npm install
npm start

```

---

## 🧪 Test Cases

A sample VCF file is located in `/samples/test_patient.vcf`. This file contains a **CYP2D6 Ultra-rapid Metabolizer** variant, which should trigger a **"Toxic"** risk label when **CODEINE** is selected.

---

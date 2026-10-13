# Med Review AI

**An AI-assisted clinical report review portal with doctor-controlled verification.**

Med Review AI is a Human-Computer Interaction (HCI) semester project designed to help clinicians organize patient records, upload medical reports, and prepare AI-generated draft summaries for review. The clinician remains in control: AI output can be edited, accepted, or rejected, and a summary is saved to the patient's record only after acceptance.

> **Project/demo notice:** This is an educational prototype, not a certified medical device and not a substitute for professional medical judgment. Use fictional or synthetic patient data only.

**Live demo:** https://med-review-ai.vercel.app  
**Repository:** https://github.com/Wania-Alam/med-review-ai

## Contents

- [Key features](#key-features)
- [User workflow](#user-workflow)
- [Technology stack](#technology-stack)
- [Architecture](#architecture)
- [Requirements](#requirements)
- [Run locally](#run-locally)
- [Environment configuration](#environment-configuration)
- [Deployment](#deployment)
- [Current limitations](#current-limitations)
- [Safety and privacy](#safety-and-privacy)

## Key features

- **Doctor accounts:** registration using a configured registration code, hashed passwords, cookie-based sessions, and rate limiting for authentication routes.
- **Patient records:** create patient records, search the patient list, and open individual records.
- **Consultations:** share a patient record with another doctor so the record can appear in that doctor's consultation list.
- **Report uploads:** attach PDF, TXT, PNG, or JPG reports and images to a patient record.
- **AI-assisted drafts:** send report content to a configured OpenAI-compatible AI endpoint to draft a clinical summary.
- **Prompt shortcuts:** use built-in prompts for general summaries, abnormal values, radiology-style impressions, and consultation briefs; custom prompts can also be saved.
- **Human verification:** review and edit generated text, then accept or reject it.
- **PDF export and history:** accepted summaries are stored with the patient record and can be viewed or downloaded as PDFs.

## User workflow

```text
Sign in / Create account
          ↓
Select or create a patient
          ↓
Upload report(s) or image(s)
          ↓
Generate an AI draft
          ↓
Clinician reviews and edits the draft
          ↓
       Accept or Reject
        ↙          ↘
Accepted             Rejected
PDF saved            Draft discarded
to patient record    and not saved
          ↓
View or download saved summaries
```

## Technology stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, JavaScript |
| Backend | Node.js, Express |
| Database | MongoDB Atlas, Mongoose |
| Authentication | bcryptjs, JSON Web Tokens, cookie-parser |
| AI integration | Configurable OpenAI-compatible API; Ollama can be used for local inference |
| PDF handling | pdf-parse, PDFKit |
| Deployment | Vercel configuration included in the repository |

The configured AI provider and model depend on the environment variables. The repository's example configuration uses a hosted Llama model; **the README and configuration do not establish that Google MedGemma is currently integrated**. To use a different model, configure a compatible endpoint and confirm that the selected model supports the required text or image inputs.

## Architecture

```text
React + Vite frontend
        │
        ▼
Express backend / API
   ├── Authentication and sessions
   ├── Patient and consultation records
   ├── Report upload and text extraction
   ├── AI request handling
   └── Summary PDF generation
        │
        ├────────► MongoDB
        │          Patients, reports, prompts, summaries
        │
        └────────► Configured AI endpoint
                   Draft clinical text
```

Main directories and files:

```text
backend/
  server.js          Express API, database models, AI and PDF logic
  package.json       Backend dependencies and scripts
  .env.example       Example environment configuration
frontend/
  package.json       Frontend dependencies and scripts
  src/               React application source
vercel.json          Deployment/build and routing configuration
package.json         Root scripts
```

## Requirements

- Node.js 18 or later
- A MongoDB Atlas database (or another compatible MongoDB connection)
- An AI provider API key, or a locally running Ollama-compatible endpoint
- Git, if cloning the repository

## Run locally

### 1. Clone the repository

```bash
git clone https://github.com/Wania-Alam/med-review-ai.git
cd med-review-ai
```

### 2. Configure the backend

```bash
cd backend
```

Create a file named `.env` by copying `.env.example`, then fill in your own values:

**Windows Command Prompt**
```bat
copy .env.example .env
```

**PowerShell**
```powershell
Copy-Item .env.example .env
```

Install backend dependencies and start the server:

```bash
npm install
npm start
```

### 3. Start the frontend

Open a **second terminal** from the repository root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Create an account using the registration code configured in the backend environment.

## Environment configuration

Set these values in `backend/.env` for local development. In a hosted deployment, configure them in the hosting provider's environment-variable settings. Do not commit real secrets to GitHub.

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign session tokens; use a long random value |
| `REGISTRATION_CODE` | Code required for doctor registration |
| `AI_BASE_URL` | Base URL for an OpenAI-compatible API |
| `AI_API_KEY` | API key for the selected AI provider |
| `AI_MODEL` | Text model identifier |
| `AI_VISION_MODEL` | Optional image-capable model identifier |

The example configuration includes a hosted Llama endpoint and an alternative Ollama configuration. Use the values appropriate to your chosen provider. An image-capable model is needed for image analysis; support and reliability vary by provider and model.

## Deployment

The repository includes a `vercel.json` configuration for the frontend and backend.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables in the Vercel project settings.
4. Deploy and check the application's health endpoint at `/api/health`.
5. Test registration, sign-in, patient records, report upload, AI draft generation, accept/reject behavior, and PDF downloads in the deployed environment.

Deployment can fail if required environment variables, database network access, or provider configuration are missing. Never place private API keys in frontend variables or client-side code.

## Current limitations

- Report uploads are limited to **4 MB per file** in the current deployment setup.
- DICOM (`.dcm`) files are not supported directly; export supported image formats such as PNG or JPG when appropriate for a demo.
- Image analysis depends on the configured vision model and should be treated as a preliminary aid, not a reliable radiology interpretation.
- Hosted AI providers may process or retain prompts according to their own policies. Do not upload real patient information to this educational project.
- Free hosting or model tiers may be slow, rate-limited, or unavailable at times.
- AI output may be incomplete or incorrect and must be checked against the original report.

## Safety and privacy

- AI-generated content is a **draft**, not a diagnosis or treatment recommendation.
- Clinicians should compare generated text with the original report and correct errors before accepting it.
- Rejected drafts are not intended to be saved as approved summaries.
- Use only synthetic or fictional patient data for coursework and demonstrations.
- Keep database credentials, authentication secrets, and AI API keys private.

## Academic context

Developed as an HCI semester project to demonstrate a clinician-oriented interface, patient/report workflows, AI-assisted summarization, and human verification before saving output.

## Author

**Wania Alam**

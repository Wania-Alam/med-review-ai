# Med Review AI

An AI-assisted clinical review portal where doctors manage patient records, upload reports and scans, and get an AI-generated summary of the main problem, which the doctor must **verify before anything is saved**.

**Live demo:** https://med-review-ai.vercel.app

> Built as a Human-Computer Interaction (HCI) semester project. Use fictional patient data only. This is a demo, not a certified medical device.

## Features

- **Secure doctor accounts:** registration protected by a hospital code, hashed passwords, cookie-based sessions, and login rate limiting
- **Patient management:** add patients with a proper form, search the list, and view each patient's full record
- **Consultations:** share a patient with another doctor (the dropdown shows each doctor's name and specialty), so they appear in the other doctor's list as a consult
- **Report uploads:** PDF, TXT, PNG and JPG files (lab reports, X-rays, CT/MRI exports) stored with the patient
- **AI summaries:** the AI reads the selected reports and drafts a summary of the actual problem
- **Quick prompts:** ready-made prompts (general summary, abnormal values, radiology impression, consult brief) plus your own saved prompts
- **Human verification:** the doctor can edit the draft, then **Accept** or **Reject**
  - Accept: the summary is converted to a PDF and saved with the patient's record
  - Reject: nothing is saved
- **History:** saved summaries stay viewable and downloadable as PDFs

## Workflow

```
Login -> Select patient -> Upload reports/scans -> Generate AI draft
      -> Doctor edits and reviews -> Accept (PDF saved) / Reject (discarded)
      -> View saved summaries anytime
```

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite |
| Backend | Node.js, Express (runs as a serverless function on Vercel) |
| Database | MongoDB Atlas via Mongoose (files and PDFs stored in the database) |
| AI | Any OpenAI-compatible API (OpenRouter free models in production, Ollama for local use) |
| PDF | PDFKit and pdf-parse |
| Hosting | Vercel |

## Project structure

```
api/index.js          Vercel entry point
backend/server.js     Express API, models, AI and PDF logic
frontend/             React app (Vite)
vercel.json           Vercel configuration
package.json          Dependencies and build scripts
```

## Run locally

Requirements: Node.js 18+, a free MongoDB Atlas cluster, and an AI API key (or Ollama).

```bash
# 1. Backend
cd backend
cp .env.example .env      # then fill in the values below
npm install
npm start                 # http://localhost:5000

# 2. Frontend (new terminal)
cd frontend
npm install
npm run dev               # http://localhost:5173
```

Open the site, choose **Create an account**, and enter your `REGISTRATION_CODE`.

## Environment variables

| Name | Purpose |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Long random string used to sign login sessions |
| `REGISTRATION_CODE` | Code doctors must enter to create an account |
| `AI_BASE_URL` | AI provider endpoint, e.g. `https://openrouter.ai/api/v1` |
| `AI_API_KEY` | API key for that provider |
| `AI_MODEL` | Text model, e.g. `openrouter/free` |
| `AI_VISION_MODEL` | Optional. A model that accepts images, so X-rays and scans can be analysed |

To use a local Ollama model instead, set `AI_BASE_URL=http://localhost:11434/v1`, `AI_API_KEY=ollama` and `AI_MODEL=llama3.1:8b`.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import it in Vercel with the **Other** framework preset and default settings.
3. Add the environment variables above.
4. Deploy, then open `/api/health` to confirm the API is running.

## Limitations

- Uploads are limited to 4 MB per file (Vercel request limit)
- Image analysis depends on the vision model configured; free general-purpose models are **not** reliable for radiology and their output is only a preliminary description
- DICOM (`.dcm`) files are not supported; export slices as PNG or JPG
- Free-tier AI providers may log prompts, so never use real patient data
- Free hosting can be slow on the first request after a quiet period

## Safety and ethics

AI output is a draft, never a diagnosis. Every summary requires explicit doctor approval before it is stored, and rejected drafts are never saved.

## Author

Wania Alam

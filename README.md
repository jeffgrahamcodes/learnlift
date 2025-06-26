# LearnLift

**LearnLift** is an AI-powered learning platform designed to support middle school students—especially from underrepresented communities—in improving their writing skills. It provides real-time, encouraging feedback using OpenAI's GPT model and tracks student progress in a clean, accessible interface.

---

## Live Demo

🔗 Frontend: [learnlift.vercel.app](https://learnlift.vercel.app)

---

## Features

- Submit student writing for instant, personalized AI feedback
- Select grade level to tailor feedback appropriately (5th–9th)
- Responsive, accessible UI built with Tailwind CSS
- Backend securely calls OpenAI API using environment variables
- Deployed with Vercel (frontend) and Render (backend)

---

## Tech Stack

| Layer            | Technology                         |
| ---------------- | ---------------------------------- |
| Frontend         | Next.js (App Router), Tailwind CSS |
| Backend          | FastAPI (Python), OpenAI SDK       |
| API Hosting      | Render                             |
| Frontend Hosting | Vercel                             |
| Infra Tools      | GitHub Actions (CI/CD coming soon) |

---

## Example Prompt

```json
{
  "text": "I like math it fun and I do good in it...",
  "grade_level": "6th"
}
```

Returns structured, encouraging feedback appropriate to reading level and tone.

---

## Local Development

### Backend

```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --env-file .env
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Deployment

### Frontend (Vercel)

- Auto-deployed from `/frontend` via GitHub

### Backend (Render)

- Deployed as Python Web Service
- Start Command: `uvicorn app.main:app --host 0.0.0.0 --port 10000`
- `.env` variable: `OPENAI_API_KEY`

---

## Author

**Jeff Graham**
Cloud Developer · Educator · Builder
[jeffgraham.codes](https://www.jeffgraham.codes)
[LinkedIn](https://linkedin.com/in/jeffgrahamcodes)
[Portfolio](https://www.jeffgraham.codes/#projects)

---

> Built to uplift learners—and showcase modern full-stack skills.

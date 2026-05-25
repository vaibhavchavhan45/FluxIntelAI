# FluxIntelAI

Ask anything about any YouTube video and get precise, context-aware answers with exact timestamps. No scrubbing, No guessing.

---

## What it does

Most of the knowledge shared in long-form videos like podcasts, lectures, interviews, tutorials etc. are hard to access quickly. You either watch the entire thing or miss it entirely.

FluxIntelAI takes any YouTube video, processes its transcript, and turns it into a conversational AI system. You ask a question, it finds the exact answer from the video and tells you where in the video that moment is.

---

## How it works

1. Paste a YouTube URL
2. Ask your question
3. Get a precise answer with clickable timestamps that jump to the exact moment in the video

The system builds a vector index from the video transcript using VoyageAI embeddings, retrieves the most relevant chunks using MMR retrieval, reranks them for precision, and streams the final answer using Open AI model.

---

## Tech Stack

**Frontend**
- React + Vite
- React Router
- Deployed on Vercel

**Node Backend**
- Express.js
- Google OAuth via Passport
- JWT authentication
- PostgreSQL (Neon)
- Deployed on Render

**Python Backend**
- FastAPI
- LangChain
- VoyageAI embeddings and reranking
- Pinecone vector store
- Open AI LLM with streaming
- PostgreSQL (Neon)
- Deployed on Render

---

## Project Structure

```
FluxIntelAI/
├── frontend/          React + Vite frontend
├── backend/           Node.js + Express API
└── python-backend/    FastAPI RAG pipeline
```

---

## Features

- Answers grounded strictly in the video, No hallucination
- Exact timestamps with every response
- Persistent chat history per video
- Multi-turn conversations with automatic memory summarization
- Shareable chat sessions via public link
- Rename and delete chats
- Google OAuth login
- Mobile responsive

---


---
## Local Development

**Python backend**
```bash
cd python-backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

**Node backend**
```bash
cd backend
npm install
node src/index.js
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

---

Built by [Vaibhav Chavhan](https://github.com/vaibhavchavhan45)
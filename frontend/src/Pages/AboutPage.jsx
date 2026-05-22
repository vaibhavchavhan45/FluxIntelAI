import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3f8] via-[#f1edf6] to-[#ece7f4] text-neutral-900">

      {/* ================= NAVBAR ================= */}
      <div className="sticky top-6 z-50 flex justify-center">
  <div className="w-[95%] max-w-6xl h-[64px] rounded-full px-6 flex items-center justify-between backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <img src={logo} alt="FluxIntelAI Logo" className="h-11 w-11 rounded-xl object-contain" />
      <div className="flex flex-col leading-tight">
        <span className="tracking-wide text-[22px] font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          FluxIntelAI
        </span>
        <span className="text-[12px] text-neutral-500 tracking-[0.15em]">The AI Knowledge Engine</span>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-8">

      <button onClick={() => navigate("/")} className="inline-flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      </button>

      <button onClick={() => navigate("/app")} className="px-6 py-2 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm hover:scale-105 cursor-pointer transition-transform duration-300">
        Get Started
      </button>

    </div>
  </div>
</div>

      {/* ================= HERO ================= */}
      <div className="relative flex flex-col items-center text-center px-6 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.2),transparent_60%)]" />

        <div className="relative -top-[10px] mb-8 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-red-200 text-sm font-medium shadow-sm">
            The Core Idea
        </div>
{/* AI*/}
        <h1
  className="text-[64px] md:text-[72px] font-semibold leading-[1.1]"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  Engineering{" "}

  <span className="relative inline-block w-[105px]">
    <span className="opacity-0">AI</span>

    <span className="absolute left-0 -top-[56px]">
      <svg
        width="150"
        height="125"
        viewBox="0 0 144 110"
      >
        <text
          x="0"
          y="115"
          fontSize="104"
          fontFamily="'Playfair Display', serif"
          fill="none"
          stroke="#222"
          strokeWidth="2"
          strokeDasharray="1 5"
          strokeLinecap="round"
        >
          AI
        </text>
      </svg>
    </span>
  </span>
  {" "}

  <span className="bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent">
    clarity
  </span>

  <br />

  from long-form{" "}
  <span className="text-red-600">
    knowledge
  </span>
</h1>

<p className="mt-10 text-xl text-neutral-600 max-w-3xl">
  FluxIntelAI transforms dense YouTube lectures into searchable, verifiable,
  timestamp-backed intelligence powered by a precision-built RAG architecture.
</p>

        
      </div>

      {/* ================= WHAT IS IT ================= */}
<div className="max-w-5xl mx-auto px-6 pb-24">
  <div
   className="
  group
  relative
  rounded-3xl
  p-10
  backdrop-blur-xl
  bg-white/70
  border border-white/40
  shadow-[0_16px_28px_-12px_rgba(0,0,0,0.10)]
  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
  hover:-translate-y-2
  hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(220,38,38,0.12))]
  hover:border-red-400/60
  hover:shadow-[0_35px_65px_-18px_rgba(0,0,0,0.18)]
"
  >
    {/* subtle clarity layer */}
    <div className="
      absolute inset-0 rounded-3xl
      bg-white/0
      transition-all duration-500
      group-hover:bg-white/5
      pointer-events-none
    " />

    {/* 3D top light edge */}
    <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-3xl bg-gradient-to-r from-transparent via-white to-transparent" />

    {/* 3D left light edge */}
    <div className="absolute top-0 left-0 bottom-0 w-[1px] rounded-l-3xl bg-gradient-to-b from-white/80 via-white/30 to-transparent" />

    <h2 className="text-3xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
      What is FluxIntelAI?
    </h2>

    <p className="text-lg text-neutral-600 leading-relaxed mb-6 text-justify">
      FluxIntelAI is a <span className="text-neutral-900 font-medium">YouTube RAG (Retrieval Augmented Generation)</span> system built for one purpose. Precision. You provide a YouTube URL, ask a question and it answers strictly from what the video actually says. No hallucinations. No guessing. Pure transcript-backed intelligence.
    </p>

    <p className="text-lg text-neutral-600 leading-relaxed text-justify">
      Under the hood: transcripts are strategically chunked, embedded and stored per video. Retrieved chunks are re-ranked with a CrossEncoder before reaching the LLM. The model is explicitly instructed to stay within the retrieved context. Every response includes timestamps so you can verify everything yourself.
    </p>
  </div>
</div>

      {/* ================= TECH STACK ================= */}
      <div className="max-w-5xl mx-auto px-6 pb-24 mt-10">
        <h2
  className="text-4xl md:text-5xl font-semibold mb-6 text-center"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  System Architecture
</h2>

<p className="text-lg text-neutral-600 max-w-2xl mx-auto text-center mb-16">
  A carefully engineered pipeline designed for accuracy, speed, and grounded intelligence.
</p>

        <div className="grid md:grid-cols-2 gap-6">

  {/* Card 1: Node.js Gateway */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">Node.js + Express</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Gateway</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">API gateway layer. Validates YouTube URLs across all formats (watch, shorts, embed, youtu.be), detects video language by scraping YouTube HTML, and forwards enriched requests to the Python engine.</p>
  </div>

  {/* Card 2: Python FastAPI RAG Engine */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">Python + FastAPI</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">RAG Engine</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">Core intelligence layer. Exposes /query, /process-video, and /video-status routes. Orchestrates the full RAG pipeline from transcript ingestion to final answer formatting.</p>
  </div>

  {/* Card 3: LangChain + Chroma Vector Store */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">LangChain + Chroma</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Vector Store</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">One isolated Chroma vector store per video at vector_store/{"{videoId}"}. Adaptive chunking based on transcript length. Embeddings skip re-processing if already stored for that video.</p>
  </div>

  {/* Card 4: MMR Retrieval + CrossEncoder Re-ranker */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">MMR Retrieval + CrossEncoder</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Retrieval</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">MMR retriever fetches 12 candidates, returns top 6. Chunks are deduplicated and token-limited, then re-ranked by <span className="font-mono text-[12px] text-neutral-800">cross-encoder/ms-marco-MiniLM-L-6-v2</span> before reaching the LLM.</p>
  </div>

  {/* Card 5: LLM + Voyage AI Embeddings */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">OpenAI Chat + Voyage Embeddings</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">LLM</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">Groq API key powers fast inference with an OpenAI-compatible chat model. Voyage AI handles embeddings independently. Both are provider-swappable via a central factory. The chat model is strictly instructed to answer only from transcript content.</p>
  </div>

  {/* Card 6: Chat Memory System */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">Chat Memory System</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Memory</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">Per-user, per-video memory stored in DB. Auto-summarizes when token threshold is crossed. Rejects queries if chat grows too large. Preserves essential context only across the entire session.</p>
  </div>

  {/* Card 7: Video State Machine */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">Video State Machine</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Lifecycle</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">Every video tracks: NOT_FOUND, PROCESSING, READY, with FAILED retrying up to 2 times before becoming permanent. RAG executes only on READY state. No partial answers ever served.</p>
  </div>

  {/* Card 8: Timestamp Extraction */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">Timestamp Extraction</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Timestamps</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">Every chunk preserves its start_time and end_time from the original transcript. Answers are formatted with exact video timestamps so users can jump directly to the source moment.</p>
  </div>

  {/* Card 9: SQLAlchemy + Database */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">SQLAlchemy + Database</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Persistence</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">Persistent DB layer tracks video state, retry counts, errors, and language per videoId. Chat memory is persisted per user and video session for continuity across every request.</p>
  </div>

  {/* Card 10: Response Formatter */}
  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">Response Formatter</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Formatter</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">Dedicated service that cleans raw LLM output, strips meta-commentary, injects timestamps in a frontend-friendly format, and ensures every response is precise and readable.</p>
  </div>

  {/*
    ********* VIDEO REPAIR CARD *********
    Feature: Video Repair feature is added.
    Requires: user account system + chat history storage per user.

  <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
    </div>
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-neutral-900">Auto-Repair Scheduler</h3>
      <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">Resilience</span>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed text-justify">Background job runs every 30 minutes. Picks up FAILED videos, marks them PROCESSING, and re-runs the full ingestion pipeline automatically. Max 2 retries enforced before permanent failure.</p>
  </div>

    ===================== VIDEO REPAIR CARD END =====================
  */}


  {/*
  ********Card 12: CHAT HISTORY CARD************
  Feature : Chat History is added per user account.
  Requires: user account system + chat history storage per user.

<div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
    <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
  </div>
  <div className="flex items-start justify-between mb-3">
    <h3 className="text-lg font-semibold text-neutral-900">Chat History</h3>
    <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">History</span>
  </div>
  <p className="text-sm text-neutral-600 leading-relaxed text-justify">Every conversation is saved per user account just like ChatGPT. Users can revisit past video sessions, pick up where they left off, and browse their full question and answer history across all videos they have explored.</p>
</div>

  ===================== CHAT HISTORY CARD END =====================
*/}

</div>
      </div>


{/* ================= FOUNDER ================= */}
<div id="contact-section" className="max-w-5xl mx-auto px-6 pb-24 mt-10">

  <div className="text-center mb-10">
    <h2
      className="text-4xl md:text-5xl font-semibold"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      About Me
    </h2>
  </div>

  <div className="relative group perspective-[1800px]">

    <div
      className="
        relative rounded-3xl p-12
        backdrop-blur-xl bg-white/70
        border border-white/40
        shadow-[0_15px_30px_rgba(0,0,0,0.08)]
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        transform-gpu
        group-hover:rotate-x-[6deg]
        group-hover:rotate-y-[-6deg]
        group-hover:scale-[1.02]
        group-hover:shadow-[18px_28px_60px_rgba(0,0,0,0.25)]
      "
    >

      <div className="
        pointer-events-none absolute inset-0 rounded-3xl
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_40%)]
        opacity-40
        transition-opacity duration-700
        group-hover:opacity-70
      " />

      <div className="
        pointer-events-none absolute inset-0 rounded-3xl
        bg-gradient-to-br from-white/40 via-transparent to-red-200/20
        opacity-60
      " />

      {/* Top row */}
      <div className="flex items-center gap-5 mb-10">
        <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-50 border border-red-200 flex items-center justify-center shadow-inner">
          <span className="text-red-600 font-bold text-2xl">VC</span>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Vaibhav Chavhan
            </h3>

            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 font-semibold tracking-[0.15em] uppercase">
              Founder
            </span>
          </div>

          <p className="text-sm text-neutral-500 mt-2 font-light">
            Full Stack Developer &nbsp;&nbsp;·&nbsp;&nbsp; AI Builder
          </p>
        </div>
      </div>

      <div className="space-y-5 text-neutral-600 leading-relaxed text-justify text-lg">
        <p>
          I built FluxIntelAI to make learning from long videos faster and more efficient.
          Important ideas are often spread across hours of content, making it difficult to quickly find clear answers.
        </p>

        <p>
          FluxIntelAI transforms videos into an intelligent system you can directly interact with.
          Ask a question and receive a precise, context-aware text response delivered in seconds effortlessly.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-8 mt-10">

  {/* LinkedIn */}
  <div
    onClick={() => window.open("https://www.linkedin.com/in/vaibhavchavhan/", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </div>

  {/* GitHub */}
  <div
    onClick={() => window.open("https://github.com/vaibhavchavhan45", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#000000">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </div>

  {/* Twitter */}
  <div
    onClick={() => window.open("https://x.com/vaibhav7chavhan", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#000000">
      <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.88l-5.39-7.04L3.9 22H1l7.03-8.03L1.5 2h6.98l4.87 6.5L18.244 2z"/>
    </svg>
  </div>

  {/* Email */}
  <div
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=chavhanvaibhav708@gmail.com", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  </div>

</div>

    </div>
  </div>
</div>
      {/* ================= CTA ================= */}
      <div className="relative py-10 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10" />
        <h2 className="text-4xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to try it?
        </h2>
        <p className="text-lg text-neutral-600 mb-8">Paste a YouTube link. Ask anything.</p>
        <button
          onClick={() => navigate("/app")}
          className="px-12 py-4 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm hover:scale-105 cursor-pointer transition-transform duration-300"
        >
          Start Exploring →
        </button>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="relative bg-[#242424] text-neutral-400 overflow-hidden">

  {/* Glow effects */}
  <div className="absolute top-0 left-0 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_top_left,rgba(200,20,20,0.12),transparent_70%)] pointer-events-none" />
  <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_top_right,rgba(200,20,20,0.08),transparent_70%)] pointer-events-none" />
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-700/60 to-transparent" />

  <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">

    {/* Top section - centered */}
    <div className="flex flex-col items-center text-center gap-4 mb-10">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="h-9 w-9 rounded-lg object-contain" />
        <span className="text-white font-black text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>FluxIntelAI</span>
      </div>

      {/* Tagline */}
      <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
        AI-powered contextual intelligence built to extract meaningful insights from long-form YouTube content. So, you learn faster and think deeper.
      </p>

      {/* Social icons */}
      <div className="flex gap-8 mt-5">

  {/* LinkedIn */}
  <div
    onClick={() => window.open("https://www.linkedin.com/in/vaibhavchavhan/", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </div>

  {/* GitHub */}
  <div
    onClick={() => window.open("https://github.com/vaibhavchavhan45", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </div>

  {/* Twitter */}
  <div
    onClick={() => window.open("https://x.com/vaibhav7chavhan", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.88l-5.39-7.04L3.9 22H1l7.03-8.03L1.5 2h6.98l4.87 6.5L18.244 2z"/>
    </svg>
  </div>

  {/* Email */}
  <div
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=chavhanvaibhav708@gmail.com", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  </div>

</div>

    </div>

    {/* Divider */}
    <div className="w-full h-[1px] bg-white/5 mb-6" />

    {/* Bottom bar */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
      <span>© 2026 FluxIntelAI. All rights reserved.</span>
      <span className="tracking-widest uppercase">Built for Learning & Research</span>
<button 
  onClick={() => navigate("/")} 
  className="px-5 py-2 rounded-full border border-neutral-600 text-neutral-300 text-xs tracking-widest uppercase hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-transform duration-300"
>
  ← Back to Home
</button>   
</div>

  </div>
</footer>

    </div>
  );
}

export default AboutPage;
export const architectureData = [
  {
    title: "Node.js + Express",
    tag: "Gateway",
    subtitle: "API gateway layer. Validates YouTube URLs across all formats and forwards enriched requests to the Python engine.",
  },
  {
    title: "Python + FastAPI",
    tag: "RAG Engine",
    subtitle: "Core intelligence layer. Handles ingestion, querying, and full RAG pipeline orchestration.",
  },
  {
    title: "LangChain + Chroma",
    tag: "Vector Store",
    subtitle: "Stores embeddings per video with adaptive chunking and efficient retrieval.",
  },
  {
    title: "MMR + CrossEncoder",
    tag: "Retrieval",
    subtitle: "Fetches multiple candidates and re-ranks them to ensure the most relevant context reaches the LLM.",
  },
  {
    title: "OpenAI Chat + Voyage",
    tag: "LLM",
    subtitle: "Fast inference with an OpenAI-compatible model and Voyage embeddings, fully swappable via provider abstraction.",
  },
  {
    title: "Chat Memory System",
    tag: "Memory",
    subtitle: "Maintains per-user, per-video context with summarization and strict token control.",
  },
  {
    title: "Video State Machine",
    tag: "Lifecycle",
    subtitle: "Tracks video states like NOT_FOUND, PROCESSING, READY, and FAILED with retry logic.",
  },
  {
    title: "Timestamp Extraction",
    tag: "Timestamps",
    subtitle: "Preserves exact timestamps from transcripts, enabling precise answer verification.",
  },
  {
    title: "SQLAlchemy + Database",
    tag: "Persistence",
    subtitle: "Stores video state, errors, retries, and chat memory for persistent and reliable sessions.",
  },
  {
    title: "Response Formatter",
    tag: "Formatter",
    subtitle: "Cleans and structures LLM output, injects timestamps, and ensures clarity and readability.",
  },
  {
    title: "Auto-Repair Scheduler",
    tag: "Resilience",
    subtitle: "Background job runs every 30 minutes. Picks up FAILED videos, marks them PROCESSING, and re-runs the full ingestion pipeline automatically. Max 2 retries enforced before permanent failure.",
  },
  {
    title: "Chat History",
    tag: "History",
    subtitle: "Every conversation is saved per user account just like ChatGPT. Users can revisit past video sessions, pick up where they left off, and browse their full question and answer history across all videos they have explored.",
  },
];
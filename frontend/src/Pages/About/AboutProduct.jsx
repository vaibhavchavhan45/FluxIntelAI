function AboutProduct( {productRef} ) {
  return (
    <div ref={productRef} className="max-w-5xl mx-auto px-6 mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
      <div
        className="group relative rounded-3xl p-10 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_16px_28px_-12px_rgba(0,0,0,0.10)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(220,38,38,0.12))] hover:border-red-400/60 hover:shadow-[0_35px_65px_-18px_rgba(0,0,0,0.18)]" >
        {/* light effects */}
        <div className="absolute inset-0 rounded-3xl bg-white/0 transition-all duration-500 group-hover:bg-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-3xl bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-0 bottom-0 w-[1px] rounded-l-3xl bg-gradient-to-b from-white/80 via-white/30 to-transparent" />

        {/* Title */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-neutral-900 mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What is FluxIntelAI?
        </h2>

        {/* Content */}
        <p className="text-sm md:text-lg xl:text-xl text-neutral-600 leading-relaxed text-justify font-sans mb-6">
          FluxIntelAI is a <span className="text-neutral-900 font-medium">YouTube RAG (Retrieval Augmented Generation)</span> system built for one purpose. Precision. You provide a YouTube URL, ask a question and it answers strictly from what the video actually says. No hallucinations. No guessing. Pure transcript-backed intelligence.
        </p>

        <p className="text-sm md:text-lg xl:text-xl text-neutral-600 leading-relaxed text-justify font-sans">
          Under the hood: transcripts are strategically chunked, embedded and stored per video. Retrieved chunks are re-ranked with a CrossEncoder before reaching the LLM. The model is explicitly instructed to stay within the retrieved context. Every response includes timestamps so you can verify everything yourself.
        </p>

      </div>
    </div>
  );
}

export default AboutProduct;
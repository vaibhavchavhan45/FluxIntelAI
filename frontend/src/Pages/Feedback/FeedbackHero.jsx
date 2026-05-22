function FeedbackHero({ submitted }) {
  return (
    <div className="relative flex flex-col items-center text-center px-6 pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.2),transparent_60%)]" />

      <div className="relative -top-[10px] mb-8 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-red-200 text-sm font-medium shadow-sm">
        Community Feedback
      </div>

      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-[1.1] tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Perspectives on{" "}
        <span className="bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent">
          FluxIntelAI
        </span>
        <br />
        from the <span className="text-red-600">community</span>
      </h1>

      <p className="mt-10 text-base sm:text-lg md:text-xl text-neutral-600 max-w-4xl leading-relaxed text-center">
        Share your experience using FluxIntelAI and suggestions that could improve the system.
        <br className="hidden sm:block" />
        Your insights help us evolve the product and strengthen the learning experience.
      </p>

      {!submitted && (
        <div className="relative top-20 flex flex-col items-center text-neutral-500 text-sm">
          <span>Share your feedback below</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mt-2 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default FeedbackHero;
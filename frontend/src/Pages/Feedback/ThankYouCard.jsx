function ThankYouCard({ thankYouRef, onSubmitAnother }) {
  return (
    <div ref={thankYouRef} className="flex justify-center">
      <div className="bg-white border border-neutral-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-14 max-w-md w-full text-center">

        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2
          className="text-2xl font-bold text-neutral-800 mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Thank you!
        </h2>

        <p className="text-neutral-500 text-sm leading-relaxed mb-8">
          Your feedback has been submitted. We appreciate you helping us to improve FluxIntelAI.
        </p>

        <button
          onClick={onSubmitAnother}
          className="px-8 py-3 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm font-semibold hover:scale-105 cursor-pointer transition-transform duration-300"
        >
          Submit another
        </button>
      </div>
    </div>
  );
}

export default ThankYouCard;
import { handleGetStarted } from "../../utils/authUtils";
import { useNavigate } from "react-router-dom";

export default function CTASection({ ctaRef }) {
  const navigate = useNavigate();

  return (
    <div
      ref={ctaRef}
      className="relative pt-12 sm:pt-12 md:pt-20 lg:pt-24 xl:pt-28 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10" />
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-neutral-900 mb-4">
          Turn <span className="text-red-600 italic">YouTube Videos</span><br />
          Into Actionable Knowledge
        </h2>

        <p className="mt-4 text-sm md:text-lg xl:text-xl text-neutral-600 max-w-[90%] sm:max-w-[500px] md:max-w-5xl mx-auto font-sans text-center">
          Ask deeper questions. Extract real insights.
          Transform any YouTube video into structured intelligence, refined to
          crystal clarity explanation and delivered with precision in seconds.
        </p>
        <button
          onClick={() => handleGetStarted(navigate)}
          className="mt-6 sm:mt-7 xl:mt-7 px-10 sm:px-12 py-3 sm:py-4 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm hover:scale-105 cursor-pointer transition-transform duration-300"
        >
          Start Exploring →
        </button>
      </div>
    </div>
  );
}
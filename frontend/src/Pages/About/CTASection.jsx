import { useNavigate } from "react-router-dom";

function CTASection() {
  const navigate = useNavigate();

  return (
    <div className="relative py-10 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10" />

      <h2
        className="text-3xl sm:text-4xl font-semibold mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Ready to try it?
      </h2>

      <p className="text-base sm:text-lg text-neutral-600 mb-8">
        Paste a YouTube link. Ask anything.
      </p>

      <button
        onClick={function () { navigate("/app"); }}
        className="px-10 sm:px-12 py-4 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm hover:scale-105 cursor-pointer transition-transform duration-300"
      >
        Start Exploring →
      </button>
    </div>
  );
}

export default CTASection;
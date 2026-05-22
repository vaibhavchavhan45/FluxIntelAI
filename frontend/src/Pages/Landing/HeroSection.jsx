import Pill from "../../Components/Pill";
import { handleGetStarted } from "../../utils/authUtils.js";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ heroRef }) => {
  const navigate = useNavigate();

  return (
    <div ref={heroRef} className="relative flex flex-col items-center text-center px-6 pt-28 md:pt-32 lg:pt-36 pb-0 xl:pb-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_70%)]" />

      <div className="relative -top-[70px] md:-top-[40px]">
        <Pill>AI for YouTube Videos</Pill>
      </div>
      <h1
        className="-mt-8 md:mt-10 text-[36px] md:text-[64px] lg:text-[72px] font-semibold leading-[1.1] whitespace-nowrap"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Smart{" "}
        <span className="bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent">

          <span className="relative inline-block w-[50px] md:w-[100px] mx-1 md:mx-2">
            <span className="opacity-0">AI</span>

            <span className="absolute left-0 -top-[28px] md:-top-[56px]">
              <svg
                width="150"
                height="140"
                viewBox="0 0 144 125"
                className="w-[75px] md:w-[150px] h-auto"
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
          </span>{" "}

          Cognition
        </span>
        <br />
        Built for <span className="text-red-600">YouTube</span>
      </h1>

      <p className="mt-10 text-sm md:text-lg xl:text-xl text-neutral-600 max-w-[90%] sm:max-w-[500px] md:max-w-3xl font-sans">
        AI crafted to extract deep contextual insights from long-form YouTube
        content including lectures, podcasts, interviews, and more.
      </p>

      <button
        onClick={() => handleGetStarted(navigate)}
        className="mt-10 sm:mt-12 lg:mt-16 xl:mt-20 px-10 py-3 rounded-full bg-black text-white text-sm cursor-pointer"
      >
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
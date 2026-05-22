import { solutionLines } from "../../Data/Landing/solutionData";
import useSolutionAnimation from "../../Hooks/Landing/useSolutionAnimation";
import { lineBase, lineHover } from "../../Styles/solutionStyles";
import CoreCapabilities from "./CoreCapabilities";

export default function SolutionLeft() {
  const { hoveredIndex, setHoveredIndex } = useSolutionAnimation();

  return (
    <div className="flex flex-col pt-2 w-full mx-auto lg:max-w-3xl lg:mx-auto xl:max-w-3xl xl:mx-auto">
      {/* Heading */}
      <h3
        className="text-center mb-3 lg:text-center"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        <span
          className="text-2xl sm:text-3xl font-black italic"
          style={{
            background: "linear-gradient(90deg, #f97204, #fe2a05)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FluxIntelAI
        </span>

        <span className="text-2xl sm:text-3xl text-neutral-400 font-extralight italic ml-2">
          in Action
        </span>
      </h3>

      {/* Lines */}
      <div className="flex flex-col mt-6 sm:mt-10 gap-4 sm:gap-6">
        {solutionLines.map((line, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative group ${lineBase}`}
          >
            <div
              className={`absolute inset-0 rounded-xl transition-all duration-500
                ${hoveredIndex === i ? lineHover : "opacity-0"}
              `}
            />

            <div className="relative flex gap-3 sm:gap-4 px-2 sm:px-3">
              <span className="text-xs sm:text-sm text-red-400/60 w-6 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="text-sm sm:text-base italic leading-relaxed text-neutral-400 group-hover:text-neutral-700 transition-colors duration-300 text-justify break-words" >
                {line}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-8 sm:mt-10 h-[1px] bg-neutral-200" />

      {/* Core */}
      <div className="mt-10 sm:mt-12 lg:mt-14">
        <CoreCapabilities />
      </div>

    </div>
  );
}
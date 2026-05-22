import { coreCapabilities } from "../../Data/Landing/coreCapabilitiesData";
import useCoreCapabilities from "../../Hooks/Landing/useCoreCapabilities";

export default function CoreCapabilities() {
  const { sectionRef, visible } = useCoreCapabilities();

  const offsets = [
    "ml-0",
    "lg:ml-[50px]",
    "ml-0",
    "lg:ml-[50px]",
    "ml-0"
  ];

  return (
    <div ref={sectionRef} className="my-8 hidden xl:block xl:flex xl:flex-col">

      {/* Heading */}
      <h3
        className="text-center mb-3"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        <span className="text-2xl sm:text-3xl text-neutral-400 font-extralight italic">
          Core
        </span>

        <span
          className="text-2xl sm:text-3xl font-black italic ml-2"
          style={{
            background: "linear-gradient(90deg, #f97204, #fe2a05)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Capabilities
        </span>
      </h3>

      {/* Rows */}
      <div className="relative flex flex-col gap-4">
        {coreCapabilities.map((row, i) => {
          const clipId = `cardShape-${i}`;
          const isLast = i === coreCapabilities.length - 1;

          return (
            <div
              key={i}
              className={`
                ${offsets[i]}
                transition-all duration-600
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 250}ms` }}
            >

              {/* CARD */}
              <div className="relative w-[520px] h-[90px] group">

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 520 90"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <clipPath id={clipId}>
                      <path d="M8 12 L508 8 L512 78 L10 82 Z"/>
                    </clipPath>
                  </defs>

                  <path
                    d="M5 10 L510 6 L514 80 L8 84 Z"
                    stroke="#9ca3af"
                    strokeWidth="0.9"
                    fill="none"
                  />

                  <path
                    d="M8 12 L508 8 L512 78 L10 82 Z"
                    stroke="#9ca3af"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>

                <div
                  className="relative h-full px-8 flex items-center bg-[rgba(255,255,255,0.7)] backdrop-blur-lg border border-black/5 overflow-hidden"
                  style={{ clipPath: `url(#${clipId})` }}
                >

                  <div className="grid grid-cols-2 gap-10 w-full">

                    {/* Left */}
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-neutral-400 mb-1">
                        {row.leftLabel}
                      </div>
                      <div className="text-xl font-semibold text-neutral-900">
                        {row.leftValue}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="text-right">
                      <div className="text-[11px] uppercase tracking-wide text-neutral-400 mb-1">
                        {row.rightLabel}
                      </div>
                      <div className="text-xl font-semibold text-red-600">
                        {row.rightValue}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* LAST TEXT */}
              {isLast && (
                <div className="w-[520px] flex justify-end">
                  <p
                    className="text-sm italic text-neutral-400 mt-2 pr-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    -- and much more.....
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
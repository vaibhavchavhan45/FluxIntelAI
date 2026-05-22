import { useFeatures } from "../../Hooks/Landing/useFeatures";

function FeaturesSection({ featuresRef }) {

  const {
    features,
    hovered,
    isLarge,
    handleMouseEnter,
    handleMouseLeave
  } = useFeatures();

  return (
    <section ref={featuresRef} className="px-6 pt-20 md:pt-24 lg:pt-28 xl:pt-28">
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-neutral-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span
              className="block text-red-600"
              style={{ WebkitTextStroke: "0.6px #111" }}
            >
              <i>FluxIntelAI</i>
            </span>

            <span className="block text-neutral-900">
              Premium Features
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-lg xl:text-xl text-neutral-600 max-w-[90%] sm:max-w-[500px] md:max-w-5xl mx-auto font-sans text-center">
            Premium capabilities engineered for intelligent video understanding.
            <br className="hidden sm:block" />
            Ask questions, follow context, and reach answers instantly with precise clarity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-8 md:gap-y-10 xl:gap-y-14">
          {features.map((f, i) => {

            const isLastOddMd =
              features.length % 2 !== 0 &&
              i === features.length - 1;

            return (
              <div
                key={f.title}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
                className={`
                  relative overflow-hidden rounded-2xl border p-6 sm:p-7
                  transition-all duration-500 ease-in-out

                  ${/* XL BENTO ONLY */""}
                  ${isLarge(i) ? "xl:col-span-2 xl:min-h-[220px]" : "xl:col-span-1"}

                  ${/* Hover effects only on XL */""}
                  ${hovered === null
                    ? "border-gray-300"
                    : hovered === i
                      ? "xl:border-[#FF0000]/40 xl:shadow-[0_4px_24px_rgba(255,0,0,0.12)] xl:scale-[1.05] xl:bg-[#f8f8ff]"
                      : "border-gray-300"
                  }

                  ${isLastOddMd ? "md:col-span-2 lg:col-span-1 xl:col-span-1" : ""}
                `}
              >

                {/* Glow ONLY XL */}
                <div className={`hidden xl:block absolute -top-8 -right-8 w-36 h-36 rounded-full bg-[#FF0000]/10 blur-3xl transition-opacity duration-500
                  ${hovered === i ? "opacity-80" : "opacity-0"}`}
                />

                {/* Mobile-lg inline, XL vertical */}
                <div className="flex items-center gap-3 mb-4 xl:block">

                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FF0000]/10 text-[#FF0000] xl:mb-5">
                    <f.icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className={`font-bold text-gray-900 leading-snug
                    ${isLarge(i) ? "xl:text-2xl" : "text-base sm:text-lg"}
                  `}>
                    {f.title}
                  </h3>

                </div>

                <p className="text-gray-500 text-sm leading-relaxed font-light text-justify">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
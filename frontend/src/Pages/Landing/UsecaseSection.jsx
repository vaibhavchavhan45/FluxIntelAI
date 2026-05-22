import { usecaseImgs } from "../../Data/Landing/usecaseData";
import { useUsecaseCarousel } from "../../Hooks/Landing/useUsecaseCarousel";
import UsecaseCard from "./UsecaseCard";

export default function UsecaseSection() {
  const { activeImg, total, prev, next, goTo, getCardLayout } = useUsecaseCarousel();

  return (
    <section className="px-6 py-24">
      <div className="w-full max-w-7xl mx-auto">

        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-20">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-neutral-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="block">
              Real <span className="text-red-600 italic">Workflows.</span>
            </span>
            <span className="block">Real Results.</span>
          </h2>

          <p className="mt-10 text-sm md:text-lg xl:text-xl text-neutral-600 max-w-[90%] sm:max-w-[500px] md:max-w-5xl mx-auto font-sans text-center">
            Every usecase below is a real workflow.
            <br />
            Pure intelligence over endless effort. FluxIntelAI handles it all.
          </p>
        </div>

        <div className="relative flex items-center justify-center h-[280px] sm:h-[380px] lg:h-[500px] xl:h-[560px]">

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-red-500/10 hover:bg-red-500/20 transition-all duration-200 border-none cursor-pointer"
          >
            ◀
          </button>

          {usecaseImgs.map((img, i) => {
            const layout = getCardLayout(i);
            if (!layout) return null;

            return (
              <UsecaseCard
                key={i}
                img={img}
                index={i}
                layout={layout}
                onClick={() => goTo(i)}
              />
            );
          })}

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-red-500/10 hover:bg-red-500/20 transition-all duration-200 border-none cursor-pointer"
          >
            ▶
          </button>
        </div>

        <div className="flex justify-center overflow-hidden -mt-5 md:mt-4">
          <p
            key={activeImg}
            className="text-md font-medium"
            style={{ fontFamily: "Playfair Display, serif", color: "#1a1a1a" }}
          >
            <i>{usecaseImgs[activeImg].label}</i>
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: activeImg === i ? "28px" : "8px",
                background: activeImg === i ? "#FF0000" : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
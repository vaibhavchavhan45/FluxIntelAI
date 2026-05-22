import SolutionLeft from "./SolutionLeft";
import WorkflowSection from "./WorkflowSection";

export default function SolutionSection() {
  return (
    <section className="mt-20 md:mt-24 lg:-mt-115 xl:mt-28 px-4 sm:px-6 lg:px-16 mb-16 sm:mb-18 md:mb-20 lg:mb-24 xl:mb-28">

      <div className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-neutral-900">Meet </span>
          <span
            className="text-red-600 italic"
            style={{ WebkitTextStroke: "0.6px #111" }}
          >
            FluxIntelAI.
          </span>
        </h2>

        <p className="mt-4 text-sm md:text-lg xl:text-xl text-neutral-400 font-sans max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
          Built on RAG. Powered by AI. Designed for people who value their time.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <SolutionLeft />
        <WorkflowSection />
      </div>
    </section>
  );
}
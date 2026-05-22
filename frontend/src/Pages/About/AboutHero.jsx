import Pill from "../../Components/Pill";

function AboutHero({ heroRef }) {
  return (
    <div ref={heroRef} className="relative flex flex-col items-center text-center px-6 pt-28 md:pt-32 lg:pt-36 pb-0 xl:pb-10 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_70%)]" />

      {/* Pill */}
      <div className="relative -top-[70px] md:-top-[40px]">
        <Pill>The Core Idea</Pill>
      </div>

      {/* Title */}
      <h1
        className="-mt-12 md:mt-0 text-[36px] md:text-[64px] lg:text-[72px] font-semibold leading-[1.1]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Engineering{" "}
        <span className="bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent">
          clarity
        </span>
        <br />
        from long-form{" "}
        <span className="text-red-600">
          knowledge
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-10 text-sm md:text-lg xl:text-xl text-neutral-600 max-w-[90%] sm:max-w-[500px] md:max-w-3xl font-sans">
        FluxIntelAI transforms dense YouTube lectures into searchable, verifiable,
        timestamp-backed intelligence powered by a precision-built RAG architecture.
      </p>

    </div>
  );
}

export default AboutHero;
import AboutCard from "./AboutCard";
import { architectureData } from "../../Data/About/architectureData";

function AboutArchitecture( {architectureRef} ) {
  return (
    <div ref={architectureRef} className="max-w-5xl mx-auto px-6 mt-20 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-neutral-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          System Architecture
        </h2>

        <p className="sm:mt-1 md:mt-2 lg:mt-3 mt-4 text-sm md:text-lg xl:text-xl text-neutral-600 max-w-[90%] sm:max-w-[500px] md:max-w-5xl mx-auto text-center font-sans">
          A carefully engineered pipeline designed for accuracy, speed, and grounded intelligence.
        </p>
      </div>

      {/* Grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2
        gap-6
      ">
        {architectureData.map((item, i) => (
          <AboutCard
            key={i}
            title={item.title}
            subtitle={item.subtitle}
            tag={item.tag}
          />
        ))}
      </div>

    </div>
  );
}

export default AboutArchitecture;
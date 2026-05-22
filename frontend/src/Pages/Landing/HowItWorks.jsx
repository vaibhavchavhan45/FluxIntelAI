import { howItWorksSteps } from "../../Data/Landing/howItWorks";

export default function HowItWorks({ howItWorksRef }) {
  return (
    <div ref={howItWorksRef} className="max-w-7xl mx-auto px-6 mt-0 sm:mt-[-300px] md:mt-[0px] xl:mt-0 pb-10" >
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-14 lg:mb-16 xl:mb-20">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-neutral-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          How It <span className="italic text-red-600">Works</span>
        </h2>

        <p className="mt-4 text-sm md:text-lg xl:text-xl text-neutral-600 max-w-[90%] sm:max-w-[500px] md:max-w-5xl mx-auto font-sans text-center">
          Powerful AI. Simple flow. Designed for deep YouTube videos understanding.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {howItWorksSteps.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl p-10 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]" >
            {/* Shine */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" /> 
            </div>

            {/* Step */}
            <div className="absolute -top-6 left-8 h-12 w-12 rounded-full flex items-center justify-center text-sm font-semibold text-white shadow-lg bg-gradient-to-br from-red-600 to-red-800">
              {item.step}
            </div>

            {/* Content */}
            <div className="mt-10 relative z-10">
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed text-justify break-words">
                {item.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
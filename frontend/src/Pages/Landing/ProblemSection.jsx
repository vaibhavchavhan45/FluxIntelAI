import { problemData } from "../../Data/Landing/problemData";

function ProblemSection({ filmsImg, videoImg, audioImg }) {

  const imageMap = {
    films: filmsImg,
    video: videoImg,
    audio: audioImg
  };

  return (
    <div className="relative min-h-screen px-6 overflow-hidden mt-16 sm:mt-16 md:mt-24 lg:mt-24 xl:-mt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-red-50/50 to-transparent -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-24" >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-neutral-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hours of <span className="text-red-600 italic">Video Content.</span><br />
            Still Zero Answers.
          </h2>

          <p className="mt-10 text-sm md:text-xl lg:text-xl xl:text-xl text-neutral-600 max-w-5xl mx-auto font-sans">
            The knowledge exists. It's{" "}
            <span className="font-semibold text-neutral-800">
              buried inside hours of video
            </span>{" "}
            you simply never get around to watching.
            <br />
            YouTube was built for views not for understanding.{" "}
            <span className="font-semibold text-neutral-800">
              We fix that.
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-15 xl:gap-24">
          {problemData.map((p, i) => (
            <div
              key={i}
              className="group bg-white border border-neutral-200/60 rounded-[32px] shadow-sm hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] hover:border-red-100 transition-all duration-500 flex flex-col h-[480px] hover:-translate-y-2"
            >
              {/* Title */}
              <div className="flex items-center gap-4 px-8 pt-8 pb-4 shrink-0">
                <h3
                  className="text-[18px] font-semibold text-neutral-800 whitespace-nowrap"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {p.title}
                </h3>
              </div>

              <div className="mx-8 h-px bg-red-100 shrink-0" />

              {/* Image */}
              <div className="h-[250px] w-full px-6 py-4 flex items-center justify-center shrink-0">
                <img
                  src={imageMap[p.key]}
                  alt={p.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              <div className="mx-8 h-px bg-red-100 shrink-0" />

              {/* Description */}
              <div className="px-8 py-5 flex-1">
                <p className="text-[15px] text-neutral-500 leading-relaxed text-justify">
                  {p.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProblemSection;
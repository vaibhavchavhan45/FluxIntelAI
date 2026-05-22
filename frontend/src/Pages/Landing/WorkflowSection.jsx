import { workflowSteps } from "../../Data/Landing/workflowData";

export default function WorkflowSection() {
  return (
    <div className="relative pt-0 xl:pt-2">
      {/* Heading */}
      <h3
        className="text-center mb-2 sm:mb-3 lg:mb-4 xl:mb-3"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        <span
          className="text-2xl sm:text-3xl xl:text-3xl font-black italic"
          style={{
            background: "linear-gradient(90deg, #f97204, #fe2a05)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FluxIntelAI
        </span>

        <span className="text-2xl sm:text-3xl xl:text-3xl text-neutral-400 font-extralight italic ml-2">
          Workflow
        </span>
      </h3>

      {workflowSteps.map((item, i) => {
        const isLast = i === workflowSteps.length - 1;

        return (
          <div
            key={i}
            className={`group relative ${
              isLast
                ? "pt-6 sm:pt-7 lg:pt-8 xl:pt-10 pb-0"
                : "py-6 sm:py-7 lg:py-8 xl:py-10"
            }`}
          >
            <span
              className="absolute left-0 -top-2 text-[40px] sm:text-[48px] xl:text-[56px] font-semibold text-neutral-200 select-none transition-colors duration-300 group-hover:text-red-400"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {item.num}
            </span>

            {/* Content */}
            <div className="pl-10 sm:pl-12 xl:pl-14">
              <h3
                className="text-[18px] sm:text-[18px] xl:text-[20px] font-semibold text-neutral-900 mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {item.title}
              </h3>

              <p
                className="text-[14px] sm:text-[14px] xl:text-[15px] text-neutral-600 leading-[1.7] text-justify break-words" >
                {item.desc}
              </p>
            </div>

            {/* Divider */}
            {!isLast && (
              <div className="mt-4 sm:mt-5 lg:mt-6 xl:mt-8 h-[1px] bg-gradient-to-r from-transparent via-red-800/60 to-transparent" />
            )}
          </div>
        );
      })}
    </div>
  );
}
import { faqs } from "../../Data/Landing/faqData";
import { useFaqAccordion } from "../../Hooks/Landing/useFaqAccordion";

export default function FaqSection() {
  const { toggle, isOpen } = useFaqAccordion();

  return (
    <section className="mt-4 sm:mt-4 md:mt-8 lg:mt-10 xl:mt-12 px-6">
      <div className="w-full max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-4 md:mb-6 lg:mb-10 xl:mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-neutral-900 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Frequently Asked{" "}
            <span className="italic text-[#FF0000]">Questions</span>
          </h2>
          <p className="mt-4 text-sm md:text-lg xl:text-xl text-neutral-600 max-w-[90%] sm:max-w-[500px] md:max-w-5xl mx-auto font-sans text-center">
            Everything you need to know before getting started with FluxIntelAI.
          </p>
        </div>

        {/* Accordion */}
        <div className="px-2 sm:px-4 md:px-10">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 py-5">

              {/* Question row */}
              <div
                onClick={() => toggle(i)}
                className="flex items-center justify-between gap-4 cursor-pointer"
              >
                <p
                  className={`text-md font-medium transition-colors duration-200 ${
                    isOpen(i) ? "text-neutral-900" : "text-neutral-700"
                  }`}
                >
                  {faq.q}
                </p>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(255,0,0,0.08)", color: "#FF0000" }}
                >
                  <span
                    className="text-lg font-light leading-none"
                    style={{
                      transform: isOpen(i) ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    +
                  </span>
                </span>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen(i) ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-md text-neutral-500 leading-relaxed pr-10 text-justify">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
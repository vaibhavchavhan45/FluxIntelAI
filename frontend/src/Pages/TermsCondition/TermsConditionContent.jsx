import { tandcIntro, tandcSections } from "../../Data/TermsCondition/tAndCData";

function TandCContent() {
  return (
    <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">

      <h1
        className="text-3xl sm:text-4xl font-bold mb-12 text-neutral-900"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Terms & Conditions
      </h1>

      <div className="space-y-8 text-neutral-700 leading-relaxed text-[16px] sm:text-[17px]">

        <p className="text-justify">{tandcIntro}</p>

        {tandcSections.map((section) => (
          <div key={section.id}>
            <h2 className="text-[19px] sm:text-[21px] font-semibold text-neutral-900 mb-2">
              {section.title}
            </h2>

            {section.body ? (
              <p className="text-justify">{section.body}</p>
            ) : (
              <>
                {section.intro && (
                  <p className="text-justify mb-3">{section.intro}</p>
                )}

                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-1.5 text-justify">
                    {section.bullets.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.outro && (
                  <p className="mt-3 text-justify">{section.outro}</p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default TandCContent;
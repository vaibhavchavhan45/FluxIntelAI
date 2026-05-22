import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.jpeg";

function PrivacyPolicyPage() {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f5f3f8] via-[#f1edf6] to-[#ece7f4] text-neutral-900">

      {/* NAVBAR */}

      <div className="sticky top-6 z-50 flex justify-center">
        <div className="w-[95%] max-w-6xl h-[64px] rounded-full px-6 flex items-center justify-between backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="FluxIntelAI Logo" className="h-11 w-11 rounded-xl object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="tracking-wide text-[22px] font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                FluxIntelAI
              </span>
              <span className="text-[12px] text-neutral-500 tracking-[0.15em]">
                The AI Knowledge Engine
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">

            <button onClick={() => navigate("/")} className="inline-flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </button>

            <button onClick={() => navigate("/about")} className="text-sm font-semibold text-neutral-600 cursor-pointer transition-transform duration-300 hover:text-black hover:scale-105">
              About
            </button>

            <button onClick={() => navigate("/app")} className="px-6 py-2 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm hover:scale-105 cursor-pointer transition-transform duration-300">
              Get Started
            </button>

          </div>
        </div>
      </div>


      {/* CONTENT */}

      <main className="flex-1 max-w-5xl mx-auto px-8 py-16">

        <h1 className="text-4xl font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
          Privacy Policy
        </h1>

        <div className="space-y-8 text-neutral-700 leading-relaxed text-[17px]">

          <p className="text-justify">
            This Privacy Policy explains how FluxIntelAI collects, uses, and protects
            information when you use our website and services. It also explains your privacy
            rights and how applicable laws protect your data. By using FluxIntelAI, you agree
            to the practices described in this Privacy Policy.
          </p>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">Information We Collect</h2>
            <p className="text-justify mb-3">
              We may collect limited technical and usage data in order to operate and improve
              the platform. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-justify">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Interaction data related to the service</li>
            </ul>
            <p className="mt-3 text-justify">
              This data helps us understand how the platform is used and allows us to improve
              system performance and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">How We Use Information</h2>
            <p className="text-justify mb-3">
              We use collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-justify">
              <li>To operate and maintain the platform</li>
              <li>To process user requests such as analyzing YouTube videos</li>
              <li>To improve system performance and reliability</li>
              <li>To monitor usage patterns and detect misuse or abuse</li>
              <li>To respond to support requests or inquiries</li>
            </ul>
            <p className="mt-3 text-justify">
              We do not sell or rent personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">Data Generated by the Service</h2>
            <p className="text-justify mb-3">
              When you submit a YouTube video link, the system may temporarily process the
              following information:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-justify">
              <li>Video transcript data</li>
              <li>Generated embeddings</li>
              <li>Retrieved text segments</li>
              <li>AI-generated responses</li>
            </ul>
            <p className="mt-3 text-justify">
              This data is used only to generate answers within the system and improve
              retrieval accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">Data Storage and Retention</h2>
            <p className="text-justify mb-3">
              We retain information only for as long as necessary to operate the service
              or comply with legal obligations. Examples may include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-justify">
              <li>Chat session data associated with a specific user</li>
              <li>Video processing metadata used to prevent repeated processing</li>
            </ul>
            <p className="mt-3 text-justify">
              Usage data may be retained for a longer period for system diagnostics and
              security monitoring.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">Data Security</h2>
            <p className="text-justify">
              We implement reasonable security practices to protect user data from unauthorized
              access, misuse, or disclosure. However, no internet-based system can guarantee
              complete security, and users should understand that transmission of data over
              the internet carries inherent risks.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">Third-Party Services</h2>
            <p className="text-justify mb-3">
              FluxIntelAI may rely on third-party infrastructure or services such as:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-justify">
              <li>AI model providers</li>
              <li>Embedding providers</li>
              <li>Hosting infrastructure</li>
            </ul>
            <p className="mt-3 text-justify">
              These services process data only as necessary to deliver the functionality
              of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">External Links</h2>
            <p className="text-justify">
              The platform may contain links to third-party websites or services. We are not
              responsible for the privacy practices of those websites. Users should review
              the privacy policies of any external site they visit.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">Children's Privacy</h2>
            <p className="text-justify">
              FluxIntelAI is not intended for children under the age of 13. We do not knowingly
              collect personal data from children. If such information is discovered, it will
              be removed promptly.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">Updates to This Privacy Policy</h2>
            <p className="text-justify">
              We may update this Privacy Policy periodically to reflect changes in the service,
              technology, or legal requirements. Updated versions will be posted on this page.
              Continued use of the platform after updates indicates acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-neutral-900 mb-2">Contact</h2>
            <p className="text-justify">
              If you have any questions regarding this Privacy Policy, you may contact us
              through the official communication channels provided on the website.
            </p>
          </div>

        </div>
      </main>


      {/* FOOTER */}

      <footer className="relative bg-[#242424] text-neutral-400 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_top_left,rgba(200,20,20,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_top_right,rgba(200,20,20,0.08),transparent_70%)] pointer-events-none" />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-700/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">

          <div className="flex flex-col items-center text-center gap-4 mb-10">

            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-9 w-9 rounded-lg object-contain" />
              <span className="text-white font-black text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                FluxIntelAI
              </span>
            </div>

            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              AI-powered contextual intelligence built to extract meaningful insights from long-form YouTube content. So, you learn faster and think deeper.
            </p>

            <div className="flex gap-8 mt-5">

              <div onClick={() => window.open("https://www.linkedin.com/in/vaibhavchavhan/", "_blank")} className="cursor-pointer hover:scale-125 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>

              <div onClick={() => window.open("https://github.com/vaibhavchavhan45", "_blank")} className="cursor-pointer hover:scale-125 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>

              <div onClick={() => window.open("https://x.com/vaibhav7chavhan", "_blank")} className="cursor-pointer hover:scale-125 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.88l-5.39-7.04L3.9 22H1l7.03-8.03L1.5 2h6.98l4.87 6.5L18.244 2z"/>
                </svg>
              </div>

              <div onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=chavhanvaibhav708@gmail.com", "_blank")} className="cursor-pointer hover:scale-125 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>

            </div>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
            <span>© 2026 FluxIntelAI. All rights reserved.</span>
            <span className="tracking-widest uppercase">Built for Learning & Research</span>
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2 rounded-full border border-neutral-600 text-neutral-300 text-xs tracking-widest uppercase hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-transform duration-300"
            >
              ← Back to Home
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default PrivacyPolicyPage;
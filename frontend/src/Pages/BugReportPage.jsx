import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import emailjs from "@emailjs/browser";


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REPORT_A_BUG_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function BugReportPage() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const thankYouRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bugFormErrorMsg, setBugFormErrorMsg] = useState("");

  const handleClear = () => {
    if (formRef.current) formRef.current.reset();
    setSelectedSeverity("");
    setBugFormErrorMsg("");
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(formRef.current);
  const templateParams = {
    name: formData.get("name"),
    email: formData.get("email"),
    bug_title: formData.get("bug_title"),
    description: formData.get("description"),
    page_url: formData.get("page_url") || "Not provided",
    video_url: formData.get("video_url") || "Not provided",
    severity: selectedSeverity,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    })
    .catch(() => {
      setIsSubmitting(false);
      setBugFormErrorMsg("Something went wrong. Please try again.");
    });
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (submitted && thankYouRef.current) {
      thankYouRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitted]);

  const inputCls =
    "w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-200 transition-all duration-200 bug-input";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3f8] via-[#f1edf6] to-[#ece7f4] text-neutral-900">

      <style>{`
        .bug-input:focus::placeholder { color: #737373; }
        .bug-input:focus::-webkit-input-placeholder { color: #737373; }
        .bug-input:focus::-moz-placeholder { color: #737373; }
      `}</style>

      {/* NAVBAR */}
      <div className="sticky top-6 z-50 flex justify-center">
        <div className="w-[95%] max-w-6xl h-[64px] rounded-full px-6 flex items-center justify-between backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

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

      {/* HERO */}
      <div className="relative flex flex-col items-center text-center px-6 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.2),transparent_60%)]" />

        <div className="relative -top-[10px] mb-8 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-red-200 text-sm font-medium shadow-sm">
          Report & Resolve
        </div>

        <h1 className="font-semibold leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
  <span className="text-[64px] md:text-[72px]">Good{" "}
    <span className="bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent">Catches</span>
  </span>
  <br />
  <span className="text-[66px] md:text-[76px]">
    <span className="text-neutral-900">Great</span>{" "}
    <span className="text-red-600">Products</span>
  </span>
</h1>

        <p className="mt-10 text-xl text-neutral-600 max-w-4xl leading-relaxed text-center">
          Quality is not a feature. It is a commitment we make to every user.
          <br />
          Help us honor that commitment by telling us exactly what went wrong?
        </p>

        {!submitted && (
          <div className="relative top-20 flex flex-col items-center text-neutral-500 text-sm">
            <span>Log the issue below</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>

      {/* FORM / THANK YOU */}
      <div className="max-w-[52rem] mx-auto px-6 pb-32 mt-10">

        {submitted ? (
          <div ref={thankYouRef} className="flex justify-center">
            <div className="bg-white border border-neutral-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-14 max-w-md w-full text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Bug Received.
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Your report has been logged. We'll look into it and make sure it gets fixed.
              </p>
              <button
                onClick={() => { setSubmitted(false); handleClear(); }}
                className="px-8 py-3 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm font-semibold hover:scale-105 cursor-pointer transition-transform duration-300"
              >
                Submit another
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-neutral-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 md:p-14">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-9">

              {/* NAME */}
              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-2 block">
                  Name <span className="text-red-600">*</span>
                </label>
                <input required placeholder="Enter your full name" className={inputCls} name="name"/>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-2 block">
                  Email <span className="text-red-600">*</span>
                </label>
                <input required type="email" placeholder="Enter your email address" className={inputCls} name="email"/>
              </div>

              {/* BUG TITLE */}
              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-2 block">
                  Report Bug<span className="text-red-600">*</span>
                </label>
                <input required placeholder="Give the bug a short title" className={inputCls} name="bug_title"/>
              </div>

              {/* DESCRIBE THE BUG */}
              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-2 block">
                  Describe the Bug / Issue <span className="text-red-600">*</span>
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Describe what went wrong in detail..."
                  className={`${inputCls} resize-none`}
                  name="description"
                />
              </div>

              {/* PAGE URL */}
              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-2 block">
                  Page URL <span className="text-neutral-400">(optional)</span>
                </label>
                <input placeholder="Where did this issue occur?" className={inputCls} name="page_url" />
              </div>

              {/* VIDEO URL */}
              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-2 block">
                  Video URL <span className="text-neutral-400">(optional)</span>
                </label>
                <input placeholder="Paste the related YouTube video link" className={inputCls} name="video_url"/>
              </div>

              {/* SEVERITY */}
              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-3 block">
                  Severity <span className="text-red-600">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Low", "Medium", "High", "Critical"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setSelectedSeverity(level === selectedSeverity ? "" : level)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold border transition-transform duration-200 ${
                        selectedSeverity === level
                          ? "border-red-500 bg-red-50 text-red-600 shadow-sm"
                          : "border-neutral-300 bg-white text-neutral-600 hover:border-red-400 hover:text-red-600"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <input type="text" required readOnly value={selectedSeverity} className="sr-only" tabIndex={-1} />
              </div>

              {/* BUTTONS */}
              <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-7 px-10 py-3 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm font-semibold hover:scale-105 active:scale-95 cursor-pointer transition-transform duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-sm text-neutral-500 hover:text-red-600 hover:scale-105 cursor-pointer transition-transform duration-200 font-medium"
                >
                  Clear form
                </button>
              </div>

              {/* Error msg*/}
              {bugFormErrorMsg && (
                <p className="text-sm text-red-500 mt-3">{bugFormErrorMsg}</p>
              )}

            </form>
          </div>
        )}

        {/* FOR DEVELOPERS */}
        {!submitted && (
          <div className="relative top-15 flex flex-col items-center gap-3">
            <p className="text-xs text-neutral-400 tracking-wide">Are you a developer?</p>
            <button
              onClick={() => window.open("https://github.com/vaibhavchavhan45/latest_memory/issues/new", "_blank")}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
            >
              <span className="text-base">⚠️</span>
              Report issue on GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </button>
          </div>
        )}

      </div>

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

export default BugReportPage;
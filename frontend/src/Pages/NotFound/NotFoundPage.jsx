import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function NotFoundPage() {
  const navigate = useNavigate();

  const links = [
    { label: "Home", onClick: function () { navigate("/"); } },
  ];

  const footerColumns = [
    {
      heading: "Studio",
      links: [
        { label: "Home", action: function () { navigate("/"); window.scrollTo(0, 0); } },
        { label: "About", action: function () { navigate("/about"); window.scrollTo(0, 0); } },
        { label: "Report a Bug", action: function () { navigate("/report-bug"); window.scrollTo(0, 0); } },
        { label: "Feedback", action: function () { navigate("/feedback"); window.scrollTo(0, 0); } },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", action: function () { navigate("/privacy-policy"); window.scrollTo(0, 0); } },
        { label: "Terms of Service", action: function () { navigate("/terms-conditions"); window.scrollTo(0, 0); } },
      ],
    },
  ];

  const footerBottomRight = (
    <button
      onClick={function () { navigate("/"); window.scrollTo(0, 0); }}
      className="px-5 py-2 rounded-full border border-neutral-600 text-neutral-300 text-xs tracking-widest uppercase hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all duration-300"
    >
      ← Back to Home
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f5f3f8] via-[#f1edf6] to-[#ece7f4] text-neutral-900">

      <Navbar links={links} onGetStarted={function () { navigate("/app"); }} />

      <main className="flex-1 flex flex-col items-center text-center px-6 pt-32 sm:pt-48 pb-32 sm:pb-40">

        <h1
          className="text-[80px] sm:text-[112px] font-bold leading-none text-neutral-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </h1>

        <h2 className="text-[22px] sm:text-[26px] font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-neutral-600 mt-6 max-w-lg text-[15px] sm:text-[17px] leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          The knowledge engine is still running.
        </p>

        <div className="flex gap-4 sm:gap-6 mt-12 sm:mt-14">
          <button
            onClick={function () { navigate("/"); }}
            className="px-6 sm:px-7 py-2 rounded-full border border-neutral-400 text-neutral-700 hover:bg-black hover:text-white transition-colors duration-200 text-sm sm:text-base cursor-pointer"
          >
            Go Home
          </button>

          <button
            onClick={function () { navigate("/app"); }}
            className="px-6 sm:px-7 py-2 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white transition-colors duration-200 text-sm sm:text-base cursor-pointer"
          >
            Open App
          </button>
        </div>

      </main>

      <Footer linkColumns={footerColumns} bottomRight={footerBottomRight} />

    </div>
  );
}

export default NotFoundPage;
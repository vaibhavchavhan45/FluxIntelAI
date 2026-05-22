import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import TandCContent from "./TermsConditionContent";

function TandCPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const links = [
    { label: "Home", onClick: function () { navigate("/"); } },
    { label: "About", onClick: function () { navigate("/about"); } },
    { label: "Docs", onClick: function () { }  },
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

      <TandCContent />

      <Footer linkColumns={footerColumns} bottomRight={footerBottomRight} />
    </div>
  );
}

export default TandCPage;
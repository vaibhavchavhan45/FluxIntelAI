import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../../Components/Navbar";
import AboutHero from "./AboutHero";
import AboutProduct from "./AboutProduct";
import AboutArchitecture from "./AboutArchitecture";
import FounderSection from "./FounderSection";
import Footer from "../../Components/Footer";

function AboutPage() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const architectureRef = useRef(null);

  const links = [
    { label: "Home", onClick: function () { navigate("/"); } },
    { label: "Feedback", onClick: function () { navigate("/feedback"); } },
    { label: "Bug Report", onClick: function () { navigate("/report-bug"); } },
    { label: "Docs", onClick: function () { } },
  ];

  const scrollTo = function (ref, offset = 160) {
    const top = ref.current?.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const footerColumns = [
    {
      heading: "Discover",
      links: [
        { label: "Intro", action: function () { scrollTo(heroRef); } },
        { label: "Product", action: function () { scrollTo(productRef); } },
        { label: "Architecture", action: function () { scrollTo(architectureRef); } },
      ],
    },
    {
      heading: "Studio",
      links: [
        { label: "Home", action: function () { navigate("/"); window.scrollTo(0, 0); } },
        { label: "Contact", action: function () { scrollTo(architectureRef); window.scrollTo(0, document.getElementById("contact-section")?.getBoundingClientRect().top + window.scrollY - 120); } },
        { label: "Feedback", action: function () { navigate("/feedback"); window.scrollTo(0, 0); } },
        { label: "Report a Bug", action: function () { navigate("/report-bug"); window.scrollTo(0, 0); } },
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
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3f8] via-[#f1edf6] to-[#ece7f4] text-neutral-900">
      <Navbar links={links} onGetStarted={function () { navigate("/app"); }} />
      <AboutHero heroRef={heroRef} />
      <AboutProduct productRef={productRef} />
      <AboutArchitecture architectureRef={architectureRef} />
      <FounderSection />
      <Footer linkColumns={footerColumns} bottomRight={footerBottomRight} />
    </div>
  );
}

export default AboutPage;
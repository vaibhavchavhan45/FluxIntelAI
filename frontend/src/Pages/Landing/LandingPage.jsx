import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "./HeroSection";
import filmsImg from "../../assets/films.jpg";
import videoImg from "../../assets/vid.png";
import audioImg from "../../assets/audio.jpeg";
import ProblemSection from "./ProblemSection"
import SolutionSection from "./SolutionSection";
import HowItWorks from "./HowItWorks";
import CTASection from "./CTASection";
import FeaturesSection from "./FeaturesSection";
import UsecaseSection from "./UsecaseSection";
import FaqSection from "./FAQSection";
import Footer from "../../Components/Footer";
import { API_URLS } from "../../Config/urlConfig";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
  if (sessionStorage.getItem("visited_app")) return;
  fetch(API_URLS.authMe, { credentials: "include" })
    .then((res) => {
      if (res.ok) navigate("/app");
    });
}, []);

  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const ctaRef = useRef(null);

  const links = [
    { label: "About", onClick: function () { navigate("/about"); } },
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
      heading: "Product",
      links: [
        { label: "Explore", action: function () { scrollTo(heroRef); } },
        { label: "Features", action: function () { scrollTo(featuresRef); } },
        { label: "How It Works", action: function () { scrollTo(howItWorksRef); } },
        { label: "Get Started", action: function () { scrollTo(ctaRef, 145); } },
      ],
    },
    {
      heading: "Studio",
      links: [
        { label: "About", action: function () { navigate("/about"); window.scrollTo(0, 0); } },
        {
          label: "Contact",
          action: function () {
            document.body.style.visibility = "hidden";
            navigate("/about");
            setTimeout(function () {
              const el = document.getElementById("contact-section");
              const y = el.getBoundingClientRect().top + window.scrollY - 120;
              window.scrollTo(0, y);
              document.body.style.visibility = "visible";
            }, 100);
          },
        },
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
    <div
      onClick={function () { window.open("https://mail.google.com/mail/?view=cm&to=chavhanvaibhav708@gmail.com", "_blank"); }}
      className="cursor-pointer tracking-widest uppercase hover:text-white"
    >
      chavhanvaibhav708@gmail.com
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3f8] via-[#f1edf6] to-[#ece7f4] text-neutral-900">
      <Navbar links={links} onGetStarted={function () {
        fetch(API_URLS.authMe, { credentials: "include" })
          .then(function (res) {
            if (res.ok) { navigate("/app"); }
            else { window.location.href = API_URLS.googleAuth; }
          })
          .catch(function () { window.location.href = API_URLS.googleAuth; });
      }}
      />
      <HeroSection heroRef={heroRef} />
      <ProblemSection filmsImg={filmsImg} videoImg={videoImg} audioImg={audioImg} />
      <SolutionSection />
      <HowItWorks howItWorksRef={howItWorksRef} />
      <CTASection ctaRef={ctaRef} />
      <FeaturesSection featuresRef={featuresRef} />
      <UsecaseSection />
      <FaqSection />
      <Footer linkColumns={footerColumns} bottomRight={footerBottomRight} />
    </div>
  );
}

export default LandingPage;
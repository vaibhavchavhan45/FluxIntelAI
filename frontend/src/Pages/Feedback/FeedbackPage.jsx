import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar"
import "../../Styles/feedback.css";
import FeedbackHero from "./FeedbackHero";
import useFeedback from "../../Hooks/Feedback/useFeedback"
import FeedbackForm from "./FeedbackForm"
import ThankYouCard from "./ThankYouCard";
import Footer from "../../Components/Footer";

function FeedbackPage() {
  const navigate = useNavigate();

  const {
    formRef,
    thankYouRef,
    submitted,
    setSubmitted,
    selectedType,
    setSelectedType,
    selectedRating,
    setSelectedRating,
    hoverRating,
    setHoverRating,
    isSubmitting,
    recommend,
    setRecommend,
    howFound,
    setHowFound,
    feedbackErrorMsg,
    handleClear,
    handleSubmit,
  } = useFeedback();

  const links = [
    { label: "Home", onClick: function () { navigate("/"); } },
    { label: "About", onClick: function () { navigate("/about"); } },
    { label: "Bug Report", onClick: function () { navigate("/report-bug"); } },
    { label: "Docs", onClick: function () {  } },
  ];

  const footerColumns = [
    {
      heading: "Studio",
      links: [
        { label: "Home", action: function () { navigate("/"); window.scrollTo(0, 0); } },
        { label: "About", action: function () { navigate("/about"); window.scrollTo(0, 0); } },
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

      <FeedbackHero submitted={submitted} />

      <div className="max-w-[52rem] mx-auto px-4 sm:px-6 pb-32 mt-10">
        {submitted ? (
          <ThankYouCard
            thankYouRef={thankYouRef}
            onSubmitAnother={function () { setSubmitted(false); handleClear(); }}
          />
        ) : (
          <FeedbackForm
            formRef={formRef}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
            recommend={recommend}
            setRecommend={setRecommend}
            howFound={howFound}
            setHowFound={setHowFound}
            isSubmitting={isSubmitting}
            feedbackErrorMsg={feedbackErrorMsg}
            handleSubmit={handleSubmit}
            handleClear={handleClear}
          />
        )}
      </div>
        <Footer linkColumns={footerColumns} bottomRight={footerBottomRight} />
    </div>
  );
}

export default FeedbackPage;
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function useFeedback() {
  const formRef = useRef(null);
  const thankYouRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recommend, setRecommend] = useState("");
  const [howFound, setHowFound] = useState("");
  const [feedbackErrorMsg, setFeedbackErrorMsg] = useState("");

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  useEffect(function () {
    if (submitted && thankYouRef.current) {
      thankYouRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitted]);

  function handleClear() {
    if (formRef.current) formRef.current.reset();
    setSelectedType("");
    setSelectedRating(null);
    setHoverRating(null);
    setRecommend("");
    setHowFound("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      feedback_type: selectedType,
      feedback_text: formData.get("feedback_text"),
      how_found: howFound || "Not provided",
      recommend: recommend || "Not provided",
      rating: selectedRating ? `${selectedRating} / 5` : "Not rated",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(function () {
        setIsSubmitting(false);
        setSubmitted(true);
      })
      .catch(function () {
        setIsSubmitting(false);
        setFeedbackErrorMsg("Something went wrong. Please try again.");
      });
  }

  return {
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
  };
}

export default useFeedback;
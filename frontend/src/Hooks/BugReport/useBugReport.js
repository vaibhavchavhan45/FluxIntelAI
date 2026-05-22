import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REPORT_A_BUG_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function useBugReport() {
  const formRef = useRef(null);
  const thankYouRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bugFormErrorMsg, setBugFormErrorMsg] = useState("");

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
    setSelectedSeverity("");
    setBugFormErrorMsg("");
  }

  function handleSubmit(e) {
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
      .then(function () {
        setIsSubmitting(false);
        setSubmitted(true);
      })
      .catch(function () {
        setIsSubmitting(false);
        setBugFormErrorMsg("Something went wrong. Please try again.");
      });
  }

  return {
    formRef,
    thankYouRef,
    submitted,
    setSubmitted,
    selectedSeverity,
    setSelectedSeverity,
    isSubmitting,
    bugFormErrorMsg,
    handleClear,
    handleSubmit,
  };
}

export default useBugReport;
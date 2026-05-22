import { useState, useCallback } from "react";

export function useFaqAccordion() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggle = useCallback((i) => {
    setOpenFaq((prev) => (prev === i ? null : i));
  }, []);

  const isOpen = useCallback((i) => openFaq === i, [openFaq]);

  return { toggle, isOpen };
}
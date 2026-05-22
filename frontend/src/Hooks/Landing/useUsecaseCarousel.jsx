import { useState, useCallback, useEffect } from "react";
import { usecaseImgs } from "../../Data/Landing/usecaseData";


export function useUsecaseCarousel() {
  const total = usecaseImgs.length;
  const [activeImg, setActiveImg] = useState(2);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Max side cards visible per side: 0 mobile, 1 tablet, 2 desktop
  const maxSideCards = isMobile ? 0 : isTablet ? 1 : 2;

  const prev = useCallback(() => {
    setActiveImg((p) => (p - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setActiveImg((p) => (p + 1) % total);
  }, [total]);

  const goTo = useCallback((i) => setActiveImg(i), []);


  const getCardLayout = useCallback(
    (i) => {
      let offset = i - activeImg;

      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const absOffset = Math.abs(offset);
      if (absOffset > maxSideCards) return null;

      const isActive = offset === 0;

      const width = isActive
        ? isMobile ? "85vw" : isTablet ? "520px" : "680px"
        : isTablet ? "280px" : "360px";

      const height = isActive
        ? isMobile ? "240px" : isTablet ? "360px" : "460px"
        : isTablet ? "200px" : "260px";

      const gap = isMobile ? 0 : isTablet ? 320 : 420;

      return {
        width,
        height,
        transform: `translateX(calc(-50% + ${offset * gap}px)) scale(${isActive ? 1 : 0.82})`,
        zIndex:  isActive ? 10 : 10 - absOffset,
        opacity: isActive ? 1  : absOffset === 1 ? 0.55 : 0.25,
        isActive,
      };
    },
    [activeImg, total, isMobile, isTablet, maxSideCards]
  );

  return { activeImg, total, isMobile, prev, next, goTo, getCardLayout };
}
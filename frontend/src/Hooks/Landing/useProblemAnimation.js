import { useEffect, useRef, useState } from "react";

export default function useProblemAnimation() {
    const [activeCards, setActiveCards] = useState([]);
    const sectionRef = useRef(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const currentScrollY = window.scrollY;
                const scrollingDown = currentScrollY >= lastScrollY.current;
                lastScrollY.current = currentScrollY;

                if (entry.isIntersecting) {
                    setActiveCards([]);
                    const order = scrollingDown ? [0, 1, 2] : [2, 1, 0];

                    order.forEach((cardIndex, step) => {
                        setTimeout(() => {
                            setActiveCards((prev) => [...new Set([...prev, cardIndex])]);
                        }, step * 400);
                    });
                } else {
                    setActiveCards([]);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return { activeCards, sectionRef };
}
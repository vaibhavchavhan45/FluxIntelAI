import { useState } from "react";
import { featuresData } from "../../Data/Landing/featuresData";

export const useFeatures = () => {

  const [hovered, setHovered] = useState(null);

  const [largeCards, setLargeCards] = useState({ 0: 1, 1: 5, 2: 6 });

  const rowGroups = [
    { cards: [0, 1, 2], defaultLarge: 1 },
    { cards: [3, 4, 5], defaultLarge: 5 },
    { cards: [6, 7, 8], defaultLarge: 6 },
  ];

  const isLarge = (i) => {
    const rowIndex = rowGroups.findIndex(r => r.cards.includes(i));
    return largeCards[rowIndex] === i;
  };

  const handleMouseEnter = (i) => {
    setHovered(i);
    const rowIndex = rowGroups.findIndex(r => r.cards.includes(i));

    if (!isLarge(i)) {
      setLargeCards(prev => ({
        ...prev,
        [rowIndex]: i
      }));
    }
  };

  const handleMouseLeave = (i) => {
    setHovered(null);
    const rowIndex = rowGroups.findIndex(r => r.cards.includes(i));

    setLargeCards(prev => ({
      ...prev,
      [rowIndex]: rowGroups[rowIndex].defaultLarge
    }));
  };

  return {
    features: featuresData,
    hovered,
    isLarge,
    handleMouseEnter,
    handleMouseLeave
  };
};
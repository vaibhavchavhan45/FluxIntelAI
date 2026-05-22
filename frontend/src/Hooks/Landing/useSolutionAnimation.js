import { useState } from "react";

export default function useSolutionAnimation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return { hoveredIndex, setHoveredIndex };
}
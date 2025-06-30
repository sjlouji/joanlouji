import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ZoomOnHoverProps {
  zoom?: number;
  children: ReactNode;
  className?: string;
  index?: number;
  hovered?: number | null;
  proximityScales?: number[]; // e.g. [1.4, 1.18, 1.08]
}

function getProximityScale(
  index: number,
  hovered: number,
  proximityScales: number[],
  fallback = 1
) {
  const dist = Math.abs(index - hovered);
  if (dist === 0) return proximityScales[0];
  if (dist === 1) return proximityScales[1] ?? fallback;
  if (dist === 2) return proximityScales[2] ?? fallback;
  return fallback;
}

export function ZoomOnHover({
  zoom = 1.5,
  children,
  className,
  index,
  hovered,
  proximityScales = [1.4, 1.18, 1.08],
}: ZoomOnHoverProps) {
  let scale = 1;
  if (typeof index === "number" && typeof hovered === "number") {
    scale = getProximityScale(index, hovered, proximityScales, 1);
  }
  return (
    <motion.span
      whileHover={{ scale: zoom }}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ display: "inline-block", cursor: "pointer" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

export { getProximityScale };

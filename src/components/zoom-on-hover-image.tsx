import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface ZoomOnHoverImageProps extends ImageProps {
  zoom?: number;
}

export function ZoomOnHoverImage({
  zoom = 1.5,
  ...props
}: ZoomOnHoverImageProps) {
  return (
    <motion.span
      whileHover={{ scale: zoom }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <Image {...props} />
    </motion.span>
  );
}

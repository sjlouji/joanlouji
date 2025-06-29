import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

export const MotionImage = motion((props: ImageProps) => (
  <Image
    {...props}
    // @ts-expect-error: framer-motion props
    whileTap={{ scale: 0.85, rotate: 10 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  />
));

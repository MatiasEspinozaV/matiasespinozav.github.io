import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ScrollAnimado = ({
  children,
  direction = "up",
  offsetY = 50,
  offsetX = 0,
  duration = 0.8,
  delay = 0,
  opacityFrom = 0,
  opacityTo = 1,
  scaleFrom = 1,
  scaleTo = 1,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const directionVariants = {
    left: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1,  } },
    right: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    up: { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    };
  const variants = {
    hidden: {
      opacity: opacityFrom,
      y: offsetY,
      x: offsetX,
      scale: scaleFrom,
      direction: directionVariants[direction].hidden,
    },
    visible: {
      opacity: opacityTo,
      y: 0,
      x: 0,
      scale: scaleTo,
      transition: { duration, delay },
      direction: directionVariants[direction].visible,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={directionVariants[direction]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimado;

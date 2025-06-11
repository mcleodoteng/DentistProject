import { LazyMotion, domAnimation, m } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function PageTransition({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

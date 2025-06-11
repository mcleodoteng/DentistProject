import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function CounterCard({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds duration
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Easing function for smooth animation
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(value * easedProgress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

        {/* Content */}
        <div className="relative text-center space-y-2">
          <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transform transition-transform duration-300">
            {count}+
          </span>
          <span className="block text-gray-600 font-medium group-hover:text-primary transition-colors duration-300">
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

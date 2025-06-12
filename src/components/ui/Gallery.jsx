import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/Images/IMG (1).jpg",
    title: "Advanced Dental Care",
    category: "Treatment",
  },
  {
    id: 2,
    src: "/Images/IMG (2).jpeg",
    title: "Modern Facilities",
    category: "Equipment",
  },
  {
    id: 3,
    src: "/Images/IMG (3).jpg",
    title: "Expert Team",
    category: "Staff",
  },
  {
    id: 4,
    src: "/Images/IMG (4).jpg",
    title: "Patient Care",
    category: "Service",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
    stopAutoPlay();
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    startAutoPlay();
    if (Math.abs(info.offset.x) > 100) {
      if (info.offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };
  return (
    <section className="relative bg-gradient-to-br from-[#537D5D]/85 via-[#466952]/90 via-[#395544]/95 to-[#2d4332]/85 text-white py-8 mt-12 overflow-hidden">
      {/* Floating Navigation Hint */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10"></div>{" "}
      {/* Gallery Title */}{" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white/90"
        >
          Our Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/70 text-lg"
        >
          Explore our state-of-the-art facilities and dedicated team
        </motion.p>
      </div>
      {/* Enhanced Gallery with Auto-swipe */}
      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex items-center justify-center w-full h-[55vh]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="relative w-full h-full flex justify-center items-center px-4">
            <AnimatePresence initial={false}>
              {galleryImages.map((image, index) => {
                const distance =
                  (index - currentIndex + galleryImages.length) %
                  galleryImages.length;
                const isActive = distance === 0;
                const offset =
                  distance < galleryImages.length / 2
                    ? distance
                    : distance - galleryImages.length;

                return (
                  <motion.div
                    key={image.id}
                    style={{
                      position: "absolute",
                      width: isActive ? "60%" : "30%",
                      zIndex: isActive ? 2 : 1,
                    }}
                    animate={{
                      x: `${offset * 100}%`,
                      scale: isActive ? 1 : 0.8,
                      opacity: Math.abs(offset) > 2 ? 0 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.3,
                    }}
                    className={`relative h-[50vh] ${
                      isActive
                        ? "cursor-grab active:cursor-grabbing"
                        : "cursor-pointer"
                    } group`}
                    onClick={() => !isDragging && setCurrentIndex(index)}
                  >
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg"
                      draggable="false"
                    />
                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.6 }}
                      className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
                    >
                      <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        {image.category}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={() => {
            prevSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm z-10 transition-colors"
        >
          ←
        </button>
        <button
          onClick={() => {
            nextSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm z-10 transition-colors"
        >
          →
        </button>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                stopAutoPlay();
                setTimeout(startAutoPlay, 5000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

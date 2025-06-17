import { memo } from "react";
import { motion } from "framer-motion";

const BlogCard = memo(function BlogCard({
  title,
  excerpt,
  category,
  image,
  readTime,
  tags = [],
  onClick,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
            <span className="inline-flex items-center px-2 sm:px-3 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-white/90 text-primary shadow-sm backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {tags.slice(0, window.innerWidth < 640 ? 1 : 2).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
              {tags.length > (window.innerWidth < 640 ? 1 : 2) && (
                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                  +{tags.length - (window.innerWidth < 640 ? 1 : 2)}
                </span>
              )}
            </div>
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap ml-2">
              {readTime} min read
            </span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 line-clamp-2 sm:line-clamp-3">
            {excerpt}
          </p>
          <div className="mt-3 sm:mt-4 flex items-center text-primary font-medium text-xs sm:text-sm">
            Read article
            <svg
              className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default BlogCard;

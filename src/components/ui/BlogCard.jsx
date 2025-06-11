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
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-white/90 text-primary shadow-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                  +{tags.length - 2}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-2">
              {readTime} min read
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2 text-sm">{excerpt}</p>
          <div className="mt-4 flex items-center text-primary font-medium text-sm">
            Read article
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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

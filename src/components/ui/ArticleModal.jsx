import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ShareIcon } from "@heroicons/react/24/outline";

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/5" />
      {/* Modal */}
      <div className="min-h-screen px-3 sm:px-4 py-6 sm:py-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "tween", duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed Header */}
          <div className="p-4 sm:p-6 bg-white border-b sticky top-0 z-10">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <button
                  onClick={handleShare}
                  className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <ShareIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 pt-2 sm:pt-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
            <div className="space-y-6">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
                  loading="lazy"
                />
              )}
              {/* Tags */}
              {article.tags && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {/* Article content */}
              <div className="prose prose-sm sm:prose md:prose-lg max-w-none">
                {article.content}
              </div>
              {/* Author info */}
              {article.author && (
                <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t">
                  {article.author.avatar && (
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">
                      {article.author.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {article.author.role}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

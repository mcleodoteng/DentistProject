import { motion } from "framer-motion";

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === "all"
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}

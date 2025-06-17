import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2020",
    title: "Foundation",
    description:
      "DentCare NGO was established with a mission to provide accessible dental care.",
  },
  {
    year: "2021",
    title: "First Clinic",
    description:
      "Opened our first free dental clinic serving underserved communities.",
  },
  {
    year: "2022",
    title: "Education Program",
    description: "Launched comprehensive dental education programs in schools.",
  },
  {
    year: "2023",
    title: "Digital Initiative",
    description:
      "Introduced online dental consultation and educational resources.",
  },
  {
    year: "2024",
    title: "Global Outreach",
    description:
      "Expanded our services to multiple locations and launched mobile dental clinics.",
  },
];

export default function Timeline() {
  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-primary/20" />

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-start sm:items-center ${
                  index % 2 === 0
                    ? "justify-start pl-8 sm:pl-0"
                    : "justify-start pl-8 sm:justify-end sm:pl-0"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full sm:w-5/12 ${
                    index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                  }`}
                >
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                    <span className="text-primary font-bold text-base sm:text-xl">
                      {item.year}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mt-1 sm:mt-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Circle marker */}
                <div className="absolute left-0 sm:left-1/2 top-6 sm:top-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

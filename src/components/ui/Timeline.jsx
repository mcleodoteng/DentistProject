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
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <span className="text-primary font-bold text-xl">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Circle marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import {
  FaTooth,
  FaUserMd,
  FaHandHoldingHeart,
  FaBookMedical,
} from "react-icons/fa";

const features = [
  {
    name: "Free Dental Advice",
    description:
      "Get expert dental care guidance from our experienced professionals.",
    icon: FaTooth,
  },
  {
    name: "Professional Care",
    description:
      "Access to qualified dental professionals and modern facilities.",
    icon: FaUserMd,
  },
  {
    name: "Community Support",
    description:
      "Join our community of volunteers and supporters making a difference.",
    icon: FaHandHoldingHeart,
  },
  {
    name: "Educational Resources",
    description:
      "Access comprehensive dental health education materials anywhere.",
    icon: FaBookMedical,
  },
];

export default function Features() {
  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-heading">
            Our Services
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600">
            Comprehensive dental care and education for everyone
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-1">
                  <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary text-white transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-900 text-center group-hover:text-primary transition-colors">
                    {feature.name}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

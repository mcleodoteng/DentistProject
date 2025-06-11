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
    description: "Access comprehensive dental health education materials.",
    icon: FaBookMedical,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Comprehensive dental care and education for everyone
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 text-center">
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

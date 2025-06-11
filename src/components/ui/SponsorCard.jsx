import { motion } from "framer-motion";

export default function SponsorCard({ name, logo, description, tier }) {
  const tierColors = {
    platinum: "bg-gradient-to-r from-gray-200 to-gray-400",
    gold: "bg-gradient-to-r from-yellow-200 to-yellow-400",
    silver: "bg-gradient-to-r from-gray-300 to-gray-500",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-lg shadow-lg bg-white"
    >
      <div
        className={`absolute top-0 right-0 px-4 py-1 text-white text-sm ${tierColors[tier]}`}
      >
        {tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsor
      </div>
      <div className="p-6">
        <div className="h-24 w-full flex items-center justify-center mb-4">
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
          {name}
        </h3>
        <p className="text-gray-600 text-center text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

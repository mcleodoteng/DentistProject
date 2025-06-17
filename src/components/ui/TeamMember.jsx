import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamMember = ({ name, role, image, bio, social }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>{" "}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{name}</h3>
        <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-primary">
          {role}
        </p>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 line-clamp-3 sm:line-clamp-none">
          {bio}
        </p>

        {/* Social links */}
        <div className="mt-3 sm:mt-4 flex space-x-3 sm:space-x-4">
          {social?.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}
          {social?.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;

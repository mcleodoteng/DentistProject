import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "../../utils/constants";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with Firebase
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl font-heading">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for any inquiries or support
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-secondary transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaPhone className="h-5 w-5 text-primary" />
                    <span>{SITE_CONFIG.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="h-5 w-5 text-primary" />
                    <span>{SITE_CONFIG.email}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                    <span>{SITE_CONFIG.address}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaWhatsapp className="h-5 w-5 text-primary" />
                    <span>WhatsApp: {SITE_CONFIG.phone}</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Location</h2>
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    title="DentCare Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-0.1276474!3d51.5073219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM1DCsDMwJzI2LjQiTiAwwrAwNyc0MC44Ilc!5e0!3m2!1sen!2suk!4v1623456789012!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex space-x-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex-1 bg-primary text-white py-3 px-4 rounded-md hover:bg-secondary transition-colors text-center"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.phone.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded-md hover:bg-[#128C7E] transition-colors text-center"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

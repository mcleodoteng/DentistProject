import { motion } from "framer-motion";
import CounterCard from "./CounterCard";

export default function MedicalInfoSection() {
  const stats = [
    { value: 850, label: "Happy Patients" },
    { value: 32, label: "Communities Served" },
    { value: 1000, label: "Treatments Done" },
    { value: 15, label: "Expert Dentists" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 font-heading leading-tight">
                Expert Dental Care{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  You Can Trust
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our dedicated team of dental professionals brings years of
                experience and a commitment to providing the highest quality
                care. We use state-of-the-art technology and proven techniques
                to ensure the best outcomes for our patients.
              </p>
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <CounterCard key={index} {...stat} />
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="Images/IMG (2).png"
                alt="Modern Dental Care"
                className="w-full h-full object-contain"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

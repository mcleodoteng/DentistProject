import Hero from "../../components/ui/Hero";
import Features from "../../components/ui/Features";
import DentalScene from "../../components/ui/3d/DentalScene";
import { LazyMotion, domAnimation, m } from "framer-motion";
import MedicalInfoSection from "../../components/ui/MedicalInfoSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        <Hero />
        {/* 3D Visualization Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-heading mb-8">
                Interactive Dental Visualization
              </h2>
              <p className="mt-4 mb-8 text-xl text-gray-600">
                Explore our interactive 3D dental model
              </p>
              <Suspense
                fallback={
                  <div className="h-[600px] w-full rounded-xl bg-gray-100 animate-pulse flex items-center justify-center">
                    <p className="text-gray-500">Loading 3D Model...</p>
                  </div>
                }
              >
                <DentalScene />
              </Suspense>
            </m.div>
          </div>
        </section>
        {/* Medical Info Section with Statistics */}
        <MedicalInfoSection /> <Features />
        <div>
          <img
            src="/Images/BG.png"
            alt="Background"
            className="w-96 h-80 object-contain ml-72 relative z-10 "
          />
        </div>
        {/* Animated Cards Section */}
        <section className="relative py-24 overflow-hidden -mt-40">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/Images/Back.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white font-heading mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-200">
                Experience excellence in dental care with our comprehensive
                services
              </p>
            </m.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Advanced Technology",
                  description:
                    "State-of-the-art equipment for precise diagnostics and treatment",
                  delay: 0,
                  direction: "left",
                },
                {
                  title: "Expert Team",
                  description:
                    "Highly qualified professionals dedicated to your dental health",
                  delay: 0.2,
                  direction: "top",
                },
                {
                  title: "Comfortable Care",
                  description:
                    "Relaxing environment and gentle treatment approach",
                  delay: 0.4,
                  direction: "right",
                },
                {
                  title: "Preventive Focus",
                  description:
                    "Emphasis on preventing dental issues before they arise",
                  delay: 0.3,
                  direction: "left",
                },
                {
                  title: "Personalized Treatment",
                  description:
                    "Customized care plans tailored to your unique needs",
                  delay: 0.5,
                  direction: "bottom",
                },
                {
                  title: "Emergency Services",
                  description:
                    "Quick response when you need urgent dental care",
                  delay: 0.6,
                  direction: "right",
                },
              ].map((card, index) => (
                <m.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x:
                      card.direction === "left"
                        ? -100
                        : card.direction === "right"
                        ? 100
                        : 0,
                    y:
                      card.direction === "top"
                        ? -100
                        : card.direction === "bottom"
                        ? 100
                        : 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: card.delay,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-200">{card.description}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>
        {/* Newsletter Section */}
        <section className="bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
                Stay Updated
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Subscribe to our newsletter for dental care tips and updates
              </p>
              <div className="mt-8 max-w-md mx-auto">
                <form className="sm:flex">
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </m.div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
}

import Hero from "../../components/ui/Hero";
import Features from "../../components/ui/Features";
import DentalScene from "../../components/ui/3d/DentalScene";
import { LazyMotion, domAnimation, m } from "framer-motion";
import MedicalInfoSection from "../../components/ui/MedicalInfoSection";
import { Suspense } from "react";
import Gallery from "../../components/ui/Gallery";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        <Hero /> {/* NGO Impact & Dental Facts Section */}
        <section className="py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* NGO Impact Side */}
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <m.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute -inset-10 bg-gradient-conic from-primary/30 via-secondary/30 to-primary/30 blur-3xl rounded-full animate-spin-slow"
                />
                <div className="relative backdrop-blur-sm p-8 rounded-2xl">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold mb-6">
                    Making a Difference
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading">
                    Our NGO Initiatives
                  </h2>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Rural Outreach Program",
                        description:
                          "Bringing dental care to remote communities",
                        icon: "🏥",
                        gradient: "from-primary to-secondary",
                      },
                      {
                        title: "Children's Dental Education",
                        description: "Teaching oral hygiene in schools",
                        icon: "👶",
                        gradient: "from-secondary to-accent",
                      },
                      {
                        title: "Emergency Dental Relief",
                        description: "24/7 support for those in urgent need",
                        icon: "🚑",
                        gradient: "from-accent to-primary",
                      },
                    ].map((initiative, index) => (
                      <m.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative"
                      >
                        <m.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.3 }}
                          className={`absolute inset-0 bg-gradient-to-r ${initiative.gradient} opacity-0 group-hover:opacity-20 rounded-xl blur transition-opacity duration-500`}
                        />
                        <div className="relative bg-white/80 p-6 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl">{initiative.icon}</span>
                            <div>
                              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                {initiative.title}
                              </h3>
                              <p className="text-gray-600">
                                {initiative.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </m.div>
                    ))}
                  </div>

                  <m.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Support Our Cause
                  </m.button>
                </div>
              </m.div>

              {/* Did You Know Side */}
              <div className="relative">
                <m.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <m.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -inset-10 bg-gradient-conic from-secondary/30 via-primary/30 to-secondary/30 blur-3xl rounded-full animate-pulse"
                  />
                  <div className="relative">
                    <img
                      src="/Images/IMG (3).jpg"
                      alt="Dental Care in Action"
                      className="w-full h-[300px] object-cover rounded-2xl mb-8 shadow-xl"
                    />

                    <div className="space-y-6">
                      {[
                        {
                          fact: "Regular dental check-ups can detect early signs of oral cancer",
                          icon: "🔍",
                          gradient: "from-primary/40 to-secondary/40",
                        },
                        {
                          fact: "Poor oral health is linked to heart disease and diabetes",
                          icon: "❤️",
                          gradient: "from-secondary/40 to-accent/40",
                        },
                        {
                          fact: "Children with healthy teeth perform better academically",
                          icon: "�",
                          gradient: "from-accent/40 to-primary/40",
                        },
                      ].map((item, index) => (
                        <m.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.3, duration: 0.6 }}
                          className="group"
                        >
                          <m.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.1 }}
                            whileHover={{ opacity: 0.2 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-lg`}
                          />
                          <div className="relative bg-white/90 p-6 rounded-xl shadow-lg backdrop-blur-sm transform transition-all duration-300 group-hover:translate-x-2">
                            <div className="flex items-start space-x-4">
                              <span className="text-2xl transform transition-transform group-hover:scale-110 duration-300">
                                {item.icon}
                              </span>
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                  Did You Know?
                                </h3>
                                <p className="text-gray-600">{item.fact}</p>
                              </div>
                            </div>
                          </div>
                        </m.div>
                      ))}
                    </div>
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </section>
        {/* Medical Info Section with Statistics */}
        <MedicalInfoSection /> <Features />{" "}
        <div className="relative ">
          {" "}
          {/* hidden [min-width:400px]:block*/}
          <img
            src="/Images/BG.png"
            alt="Background"
            className="w-1 h-28 mb-16 xs:w-56 xs:h-44 sm:mb-4 sm:w-80 sm:h-64 md:mb-2 md:w-96 md:h-80 object-contain ml-32 sm:ml-48 md:ml-72 relative z-10 transition-all duration-300"
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
            </div>{" "}
          </div>
        </section>
        {/* Gallery Section */}
        <Gallery />
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

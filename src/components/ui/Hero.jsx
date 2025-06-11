import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[90vh]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/Images/IMG (1).jpg"
          alt="Dental care professional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/50"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl font-heading">
                <span className="block">Get Free</span>
                <span className="block text-primary">Dental Advice</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We provide accessible dental care and education to underserved
                communities. Join us in our mission to promote better oral
                health for everyone.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#get-advice"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors md:py-4 md:text-lg md:px-10"
                  >
                    Get Free Advice
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/get-involved"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent/20 hover:bg-accent/30 transition-colors md:py-4 md:text-lg md:px-10"
                  >
                    Support Us
                  </a>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>{" "}
    </div>
  );
}

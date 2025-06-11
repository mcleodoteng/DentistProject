import { motion } from 'framer-motion';
import VolunteerForm from '../../components/ui/VolunteerForm';
import SponsorCard from '../../components/ui/SponsorCard';
import { FaHandHoldingHeart, FaDonate, FaHandshake } from 'react-icons/fa';

const sponsors = [
  {
    name: 'DentalTech Solutions',
    logo: '/src/assets/images/sponsors/sponsor1.png',
    description: 'Providing cutting-edge dental equipment and technology.',
    tier: 'platinum',
  },
  {
    name: 'HealthCare Plus',
    logo: '/src/assets/images/sponsors/sponsor2.png',
    description: 'Supporting community health initiatives worldwide.',
    tier: 'gold',
  },
  {
    name: 'SmileBright Industries',
    logo: '/src/assets/images/sponsors/sponsor3.png',
    description: 'Making dental care products accessible to all.',
    tier: 'silver',
  },
];

export default function GetInvolved() {
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
              Make a Difference
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in our mission to provide accessible dental care to everyone.
              Every contribution matters, whether it's your time, expertise, or support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <FaHandHoldingHeart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Volunteer</h3>
              <p className="text-gray-600">
                Share your skills and time to help those in need of dental care.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <FaDonate className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Donate</h3>
              <p className="text-gray-600">
                Your financial support helps us provide free dental care services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center p-6"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <FaHandshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Partner</h3>
              <p className="text-gray-600">
                Become a corporate partner and help us expand our reach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading">Volunteer Application</h2>
            <p className="mt-4 text-xl text-gray-600">
              Join our team of dedicated volunteers
            </p>
          </div>
          <VolunteerForm />
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading">Support Our Cause</h2>
            <p className="mt-4 text-xl text-gray-600">
              Your donation helps us provide free dental care to those in need
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
              <p className="mb-6 text-gray-600">
                Choose your preferred payment method to make a secure donation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors">
                  PayPal
                </button>
                <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors">
                  Stripe
                </button>
                <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors">
                  Flutterwave
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading">Our Sponsors</h2>
            <p className="mt-4 text-xl text-gray-600">
              Thank you to our amazing sponsors who make our work possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.name} {...sponsor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

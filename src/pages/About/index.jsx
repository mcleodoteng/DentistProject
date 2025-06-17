import Timeline from "../../components/ui/Timeline";
import TeamMember from "../../components/ui/TeamMember";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Dentist & Founder",
    image: "/Images/IMG (3).jpg",
    bio: "Over 15 years of experience in dental care and community service.",
    social: {
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/drsarahjohnson",
    },
  },
  {
    name: "Dr. Michael Chen",
    role: "Dental Surgeon",
    image: "/Images/IMG (3).jpg",
    bio: "Specializes in oral surgery and emergency dental care.",
    social: {
      linkedin: "https://linkedin.com/in/michael-chen",
    },
  },
  {
    name: "Emma Williams",
    role: "Community Outreach Director",
    image: "/Images/IMG (3).jpg",
    bio: "Passionate about making dental care accessible to all communities.",
    social: {
      twitter: "https://twitter.com/emmawilliams",
    },
  },
];

export default function About() {
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
              Our Mission & Vision
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that everyone deserves access to quality dental care.
              Our mission is to provide free dental services and education to
              underserved communities, creating healthier smiles and brighter
              futures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            Our Journey
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Dedicated professionals committed to your dental health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading">Our Partners</h2>
            <p className="mt-4 text-xl text-gray-600">
              Working together to make dental care accessible
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75">
            {/* Add partner logos here */}
          </div>
        </div>
      </section>
    </div>
  );
}

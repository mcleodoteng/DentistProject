import { useState } from "react";
import { motion } from "framer-motion";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    availability: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with Firebase
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1 sm:mb-1.5"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm sm:text-base p-2 sm:p-2.5"
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
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label
            htmlFor="profession"
            className="block text-sm font-medium text-gray-700"
          >
            Profession
          </label>
          <select
            id="profession"
            name="profession"
            required
            value={formData.profession}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Select your profession</option>
            <option value="dentist">Dentist</option>
            <option value="dental-hygienist">Dental Hygienist</option>
            <option value="dental-assistant">Dental Assistant</option>
            <option value="other-medical">Other Medical Professional</option>
            <option value="non-medical">Non-Medical Volunteer</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="availability"
            className="block text-sm font-medium text-gray-700"
          >
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            required
            value={formData.availability}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Select your availability</option>
            <option value="weekends">Weekends Only</option>
            <option value="weekdays">Weekdays Only</option>
            <option value="flexible">Flexible Schedule</option>
            <option value="specific">Specific Days</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Years of Experience
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            min="0"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Why do you want to volunteer?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          Submit Application
        </button>
      </div>
    </motion.form>
  );
}

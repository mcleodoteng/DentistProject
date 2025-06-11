import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/authContext.jsx";
import {
  FaCalendarAlt,
  FaFileAlt,
  FaUserMd,
  FaQuestionCircle,
} from "react-icons/fa";

export default function PatientPortal() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("appointments");

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect will be handled by AuthRequired component
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuItems = [
    { id: "appointments", icon: FaCalendarAlt, label: "Appointments" },
    { id: "records", icon: FaFileAlt, label: "Dental Records" },
    { id: "consultations", icon: FaUserMd, label: "Online Consultation" },
    { id: "support", icon: FaQuestionCircle, label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Banner */}
      <section className="bg-primary/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {user?.email}
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Manage your dental care and appointments
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white px-4 py-2 rounded-md text-sm font-medium text-primary hover:bg-gray-50 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              {activeTab === "appointments" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Your Appointments</h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-700">
                      Coming soon: Online appointment booking system
                    </p>
                  </div>
                  {/* Placeholder for future appointment system */}
                  <div className="text-center py-8 text-gray-500">
                    <FaCalendarAlt className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p>No upcoming appointments</p>
                    <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
                      Request Appointment
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "records" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Dental Records</h2>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Last Visit</h3>
                      <p className="text-gray-600">
                        No previous visits recorded
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Treatment Plan</h3>
                      <p className="text-gray-600">No active treatment plan</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "consultations" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Online Consultation
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p className="text-blue-700">
                        Online consultations will be available soon. Stay tuned!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "support" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Support</h2>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Contact Support</h3>
                      <p className="text-gray-600 mt-2">
                        Need help? Our support team is available Monday through
                        Friday, 9 AM to 5 PM.
                      </p>
                      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
                        Contact Support
                      </button>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">FAQs</h3>
                      <p className="text-gray-600 mt-2">
                        Browse our frequently asked questions for quick answers.
                      </p>
                      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
                        View FAQs
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

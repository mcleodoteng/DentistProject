import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold font-heading mb-4">DentCare</h3>
              <p className="text-sm">
                Providing accessible dental care and education to underserved
                communities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="hover:text-accent transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/advice-care"
                    className="hover:text-accent transition-colors"
                  >
                    Advice & Care
                  </a>
                </li>
                <li>
                  <a
                    href="/get-involved"
                    className="hover:text-accent transition-colors"
                  >
                    Get Involved
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-accent transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@dentcare.org</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Dental Street, Healthcare City</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} DentCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

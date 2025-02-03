import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">Deloitte</h2>
            <p className="mt-2 text-gray-400">
              Innovating for a better tomorrow.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-green-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Deloitte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

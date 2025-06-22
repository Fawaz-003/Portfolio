// components/ContactInfo.jsx
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-purple-600">Let’s Connect</h3>
      <p className="text-m text-gray-700 dark:text-gray-300 mb-6 font-medium">
        Feel free to reach out via email or WhatsApp. I’m happy to chat about your next big idea.
      </p>

      <div className="space-y-4 font-semibold">
        <div className="flex items-center gap-3 text-m text-gray-800 dark:text-gray-200">
          <Mail size={18} className="text-purple-600" />
          <a href="mailto:abdulfawaz84@gmail.com" className="hover:underline">
            abdulfawaz84@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-m text-gray-800 dark:text-gray-200">
          <FaWhatsapp size={18} className="text-purple-600" />
          <a href="https://wa.me/919894574006" target="_blank" rel="noopener noreferrer" className="hover:underline">
            +91 989457 4006
          </a>
        </div>
        <div className="flex items-center gap-3 text-m text-gray-800 dark:text-gray-200">
          <MapPin size={18} className="text-purple-600" />
          <a
            href="https://maps.app.goo.gl/FDqrA5gazw9CaK9m9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Tamil Nadu, India
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <h4 className="text-gray-900 dark:text-gray-50 text-xl font-bold mt-16">Follow <span className="text-purple-600">On.</span></h4>
      <div className="flex gap-4 mt-5 text-xl text-purple-600">
        <a href="https://github.com/fawaz-003" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} className="hover:text-purple-800 transition" />
        </a>
        <a href="https://linkedin.com/in/abdul-fawaz" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} className="hover:text-purple-800 transition" />
        </a>
        <a href="https://instagram.com/mr_fawaz_18_" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} className="hover:text-purple-800 transition" />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;

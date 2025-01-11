import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Footer Logo */}
          <div className="text-2xl font-bold mb-4 lg:mb-0">
            <h1>Agraharam</h1>
            <p className="text-sm text-gray-400 mt-2">
              Your Trusted Spiritual & Catering Partner
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white hover:text-yellow-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white hover:text-yellow-500 transition duration-300"
            >
              Services
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white hover:text-yellow-500 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white hover:text-yellow-500 transition duration-300"
            >
              Testimonials
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white hover:text-yellow-500 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              className="text-white hover:text-blue-600 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-blue-400 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-pink-600 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-blue-700 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-4">Stay Updated!</h3>
          <p className="text-sm text-gray-400 mb-4">
            Sign up for our newsletter to receive updates, offers, and news.
          </p>
          <div className="flex justify-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <button className="bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            © 2025 Agraharam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

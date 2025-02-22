import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Footer Logo & Description */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-violet-400">Agraharam</h1>
            <p className="text-sm text-gray-400 mt-2">
              Your Trusted Spiritual & Catering Partner
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-center">
            {["home", "services", "about", "testimonials", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-violet-400 transition duration-300 cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {[
              { icon: FaFacebook, link: "https://facebook.com", color: "hover:text-blue-500" },
              { icon: FaTwitter, link: "https://twitter.com", color: "hover:text-blue-400" },
              { icon: FaInstagram, link: "https://instagram.com", color: "hover:text-pink-500" },
              { icon: FaLinkedin, link: "https://linkedin.com", color: "hover:text-blue-700" },
            ].map(({ icon: Icon, link, color }, index) => (
              <a key={index} href={link} className={`text-violet-400 ${color} transition duration-300`} aria-label="Social Link">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-violet-400">Stay Updated!</h3>
          <p className="text-sm text-gray-400 mb-4">
            Sign up for our newsletter to receive updates, offers, and news.
          </p>
          <div className="flex justify-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button className="bg-violet-500 px-6 py-2 rounded-md hover:bg-violet-600 transition duration-300 shadow-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            © 2025 <span className="text-violet-400">Agraharam</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

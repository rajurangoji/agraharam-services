import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolling ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      } text-white`}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-full lg:m-2 px-12 py-4 flex justify-between items-center rounded-lg"
      >
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1, color: "#D8B4FE" }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold font-iora cursor-pointer"
        >
          Agraharam
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {["Home", "Services", "About", "Testimonials", "Contact"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#B2AFFE" }}
                transition={{ duration: 0.3 }}
                className={`cursor-pointer font-iora transition-all ${
                  activeSection === item.toLowerCase()
                    ? "text-violet-400 font-bold"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  if (item === "Services") {
                    navigate("/services"); // Navigate to /services
                  }
                }}
              >
                {item === "Services" ? (
                  <span>{item}</span>
                ) : (
                  <Link to={item.toLowerCase()} smooth={true} duration={500} offset={-70}>
                    {item}
                  </Link>
                )}
              </motion.li>
            )
          )}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <motion.div className="lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden space-y-4 text-white bg-gray-900/90 p-6 rounded-lg absolute top-16 left-0 w-full text-center"
          >
            {["Home", "Services", "About", "Testimonials", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, color: "#B2AFFE" }}
                  transition={{ duration: 0.3 }}
                  className={`cursor-pointer font-iora transition-all ${
                    activeSection === item.toLowerCase()
                      ? "text-violet-400 font-bold"
                      : "text-gray-300"
                  }`}
                  onClick={() => {
                    if (item === "Services") {
                      navigate("/services");
                      handleMenuClick();
                    }
                  }}
                >
                  {item === "Services" ? (
                    <span>{item}</span>
                  ) : (
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={handleMenuClick}
                    >
                      {item}
                    </Link>
                  )}
                </motion.li>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

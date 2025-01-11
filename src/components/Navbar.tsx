import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent text-white">
      <div className="max-w-full m-2 px-12 py-4 flex justify-between items-center bg-gray-800/30 backdrop-blur-sm rounded-lg text-white">
        <h1 className="text-2xl font-bold">Agraharam</h1>

        {/* Regular Menu for Larger Screens */}
        <ul className="hidden lg:flex space-x-6">
          {[
            "Home",
            "Services",
            "About Us",
            "Testimonials",
            "Blog",
            "Contact Us",
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              <Link
                to={item.replace(/\s+/g, "").toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Smaller Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-white bg-gray-800/70 p-4 rounded-lg">
          {[
            "Home",
            "Services",
            "About Us",
            "Testimonials",
            "Blog",
            "Contact Us",
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              <Link
                to={item.replace(/\s+/g, "").toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleMenuClick} // Close the menu on link click
              >
                {item}
              </Link>
            </li>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import planet from "./assets/Unknown-3.jpg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "services", "about", "testimonials", "contact"];
    const handleScroll = () => {
      // const scrollPosition = window.scrollY + 200;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Unified animation settings
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} />

      {/* Hero Section (Background) */}
      <div className="relative w-full h-screen overflow-hidden">
        <motion.div
          // style={{ backgroundImage: `url(${planet})` }}
          className="w-full h-screen bg-cover bg-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Home />
        </motion.div>
      </div>

      {/* Animated Sections with Unified Transitions */}
      {[
        { id: "services", Component: Services },
        { id: "about", Component: AboutUs },
        { id: "testimonials", Component: Testimonials },
        { id: "contact", Component: ContactUs },
      ].map(({ id, Component }) => (
        <motion.section
          key={id}
          id={id}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Component />
        </motion.section>
      ))}

      <Footer />
    </div>
  );
}

export default App;

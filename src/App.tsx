import { useEffect, useState } from "react";
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

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <Home />
      </div>

      {/* Sections */}
      <section id="services">
        <Services />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      <Footer />
    </div>
  );
}

export default App;

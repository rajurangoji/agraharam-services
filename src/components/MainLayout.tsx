import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import WhatsAppButton from "./WhatsappButton";

function MainLayout() {
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
    <div className="relative flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <Home />
      </div>

      <section id="services">
        <Services />
      </section>

      <section id="about" >
        <AboutUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default MainLayout;

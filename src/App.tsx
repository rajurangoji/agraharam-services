import planet from "./assets/galaxy-planet-.webp";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div
        style={{ backgroundImage: `url(${planet})` }}
        className="w-full h-screen bg-cover bg-center"
      >
        <Home />
      </div>
      <Services />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

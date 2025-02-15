import planet from "./assets/bg-img.png";
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

      {/* Video Background Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={planet} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* <img src={planet} alt="" className="w-full h-screen bg-cover bg-center"/> */}
        <div
          style={{ backgroundImage: `url(${planet})` }}
          className="w-full h-screen bg-cover bg-center"
        >
          <Home />
        </div>
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

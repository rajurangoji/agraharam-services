import { useEffect, useState, useRef } from "react";
import { services_types } from "@/config/services";
import { useNavigate } from "react-router";
import Footer from "../Footer";

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            setActiveIndex(Number(target.dataset.index));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const onChangeService = (path: string) => {
    const encodedPath = encodeURIComponent(path);
    
    // Determine which route to navigate to based on the service type
    switch (path) {
      case "Pujas and Pariharas":
        navigate(`/services/${encodedPath}`);
        break;
      case "Birth Chart Generation":
        navigate(`/services/birth-chart/${encodedPath}`);
        break;
      case "Brahmin Catering Services":
        navigate(`/services/catering/${encodedPath}`);
        break;
      case "Horoscope & Predictions":
        navigate(`/services/horoscope/${encodedPath}`);
        break;
      case "Educational Resources":
        navigate(`/services/education/${encodedPath}`);
        break;
      default:
        navigate(`/services/${encodedPath}`);
    }
  };

  return (
    <div className="bg-[#0d0e27] text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-widest text-[#D8B4FE]">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col space-y-16 relative">
        {services_types.map((service, index) => (
          <div
            key={service.id}
            data-index={index}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className={`flex flex-col lg:flex-row items-center w-full bg-[#1a1b3a] rounded-lg p-10 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-[450px] h-[350px] object-cover rounded-lg border-4 border-[#D8B4FE] shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center text-center lg:text-left">
              <h2
                className={`text-3xl font-extrabold mb-4 transition-all duration-300 ${
                  activeIndex === index ? "text-[#D8B4FE]" : "text-white/80"
                }`}
              >
                {service.title}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {service.description}
              </p>
              <p className="text-sm text-white/50 mt-4 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam."
              </p>
              <button
                className="mt-6 px-6 py-3 bg-[#D8B4FE] text-[#0d0e27] font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-[#b38de3]"
                onClick={() => onChangeService(service.path)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;

import { useEffect, useRef, useState } from "react";
import { imagePositions, services_types } from "@/config/services";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react"; 

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isInView, setIsInView] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Detect if the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Dynamically return positions based on scroll state
  const getPosition = (index: number) => {
    if (!isInView) {
      return {
        x: "0px",
        y: "0px",
        rotate: 0,
        scale: 0.95,
        zIndex: services_types.length - index,
      };
    }

    const offset =
      (index - currentIndex + services_types.length + 2) % services_types.length;
    return imagePositions[offset];
  };

  // Karaoke effect for description
  useEffect(() => {
    setHighlightIndex(-1);
    const words = services_types[currentIndex].description.split(" ");
    let i = 0;

    const interval = setInterval(() => {
      setHighlightIndex(i);
      i++;
      if (i >= words.length) {
        clearInterval(interval);
      }
    }, 300); // 300ms per word

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle left and right arrow clicks
  const handleArrowClick = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? services_types.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === services_types.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 bg-[#13142e] text-primary-voilet w-full overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-primary-voilet">
          Our Services
        </h2>

        <div className="flex items-center justify-center w-full mb-10">
          <h3 className="text-xl lg:text-3xl text-white font-bold">
            {services_types[currentIndex].title}
          </h3>
        </div>

        <div className="relative w-full max-w-lg h-[400px] flex justify-center items-center"> 
          
          {services_types.map((service, index) => {
            const { rotate, x, y, scale, zIndex } = getPosition(index);

            return (
              <div
                key={index}
                className="absolute w-[300px] sm:w-[400px] md:w-[250px] lg:w-[350px] h-[270px] sm:h-[300px] md:h-[320px] lg:h-[400px] rounded-lg cursor-pointer transition-transform duration-500 ease-in-out"
                onClick={() => setCurrentIndex(index)}
                style={{
                  transform: `translate(${x}, ${y}) rotate(${rotate}deg) scale(${scale})`,
                  zIndex,
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg border border-[#D8B4FE]"
                />
              </div>
            );
          })}

          
          <button
            onClick={() => handleArrowClick("right")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-opacity-70 bg-primary-voilet hover:bg-opacity-90 hover:text-white transition-all duration-300 z-50 p-4 rounded-full shadow-lg hover:shadow-2xl hover:border-2 hover:border-primary-voilet"
            
          >
            <ChevronRight className="w-7 h-7" /> 
          </button>

          <button
            onClick={() => handleArrowClick("left")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white  bg-primary-voilet bg-opacity-70 hover:bg-opacity-90 hover:text-white transition-all duration-300 z-50 p-4 rounded-full shadow-lg hover:shadow-2xl hover:border-2 hover:border-primary-voilet"
            
          >
            <ChevronLeft className="w-7 h-7" /> 
          </button>
        </div>

        <div className="my-14 w-full lg:w-3/4 bg-[#1c1f3b] p-6 rounded-lg shadow-2xl border border-white/20">
          <p className="text-white/80 text-center leading-relaxed flex flex-wrap justify-center gap-x-1 whitespace-pre-wrap min-h-[80px]">
            {services_types[currentIndex].description.split(" ").map((word, index) => (
              <span
                key={index}
                className={`transition-colors duration-300 ${
                  index <= highlightIndex
                    ? "text-white font-semibold"
                    : "text-white/20"
                }`}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        <div className="flex items-center justify-end mt-1">
          <Button
            variant="glow"
            onClick={() => navigate("services")}
            className="px-2 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          >
            View More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

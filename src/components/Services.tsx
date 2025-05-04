import { useState } from "react";
import { imagePositions, services_types } from "@/config/services";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const navigate = useNavigate();

  const getPosition = (index: number) => {
    const offset =
      (index - currentIndex + services_types.length + 2) %
      services_types.length;
    return imagePositions[offset];
  };

  return (
    <section
      id="services"
      className="py-16 bg-[#13142e] text-primary-voilet w-full overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 uppercase tracking-wider">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg h-[350px] flex justify-center items-center">
            {services_types.map((service, index) => {
              const { rotate, x, y, scale, zIndex } = getPosition(index);

              return (
                <div
                  key={index}
                  className={`absolute w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-[270px] sm:h-[300px] md:h-[320px] lg:h-[350px] rounded-lg cursor-pointer transition-transform duration-500 ease-in-out`}
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
          </div>

          <div className="w-full lg:w-1/2 bg-[#1c1f3b] p-6 rounded-lg shadow-2xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#D8B4FE] mb-4 text-center">
              {services_types[currentIndex].title}
            </h3>
            <div className="mb-4 flex justify-center">
              <img
                src={services_types[currentIndex].image}
                alt={services_types[currentIndex].title}
                className="w-full max-h-[250px] sm:max-h-[300px] object-cover rounded-lg border border-[#D8B4FE] transition-transform hover:scale-105"
              />
            </div>

            <p className="text-white/80 text-center">
              {services_types[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center flex-wrap gap-2">
          {services_types.map((service, index) => (
            <Button
              key={index}
              variant="outline"
              className={`px-3 py-2 text-sm ${
                index === currentIndex
                  ? "bg-[#D8B4FE] text-[#13142e]"
                  : "bg-transparent text-white hover:bg-[#D8B4FE]/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {service.title}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-end mt-6">
          <Button
            variant="glow"
            onClick={() => navigate("services")}
            className="px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          >
            View More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

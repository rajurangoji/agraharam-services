import { useState } from "react";
import { motion } from "framer-motion";
import { services_types } from "@/config/services";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Default to center
  const navigate = useNavigate();

  const getPosition = (index: number) => {
    const offset =
      (index - currentIndex + services_types.length + 2) %
      services_types.length; // Handle circular shifting
    const positions = [
      { rotate: -25, x: "-90%", y: "10%", scale: 0.8, zIndex: 1 },
      { rotate: -10, x: "-50%", y: "0%", scale: 0.9, zIndex: 2 },
      { rotate: 0, x: "0%", y: "0%", scale: 1, zIndex: 3 }, // Center image..
      { rotate: 10, x: "50%", y: "0%", scale: 0.9, zIndex: 2 },
      { rotate: 25, x: "90%", y: "10%", scale: 0.8, zIndex: 1 },
    ];

    return positions[offset];
  };

  return (
    <section
      id="services"
      className="py-16 bg-[#13142e] text-primary-voilet flex items-center justify-between"
    >
      <div className="w-full flex flex-col px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12 uppercase tracking-wider">
          Our Services
        </h2>

        <div className="px-20 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Image Slider */}
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[400px] flex justify-center items-center">
            {services_types.map((service, index) => {
              const { rotate, x, y, scale, zIndex } = getPosition(index);
              return (
                <motion.div
                  key={index}
                  className="absolute w-[200px] h-[300px] lg:w-[250px] lg:h-[350px] cursor-pointer"
                  style={{ zIndex }}
                  animate={{ rotate, x, y, scale }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={() => setCurrentIndex(index)} // Move clicked image to center
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg border border-[#D8B4FE]"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Service Description */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 bg-[#1c1f3b] p-6 rounded-lg shadow-2xl border border-white/20 flex flex-col"
          >
            {/* Clickable Title */}
            <h3 className="text-2xl font-semibold text-[#D8B4FE] mb-4 text-center">
              {services_types[currentIndex].title}
            </h3>

            {/* Center Image (Changes on Click) */}
            <div className="mb-4 flex justify-center">
              <img
                src={services_types[currentIndex].image}
                alt={services_types[currentIndex].title}
                className="w-full max-h-[350px] object-cover rounded-lg border border-[#D8B4FE] transition-transform hover:scale-105"
              />
            </div>

            {/* Description */}
            <p className="text-white/80 text-center">
              {services_types[currentIndex].description}
            </p>
          </motion.div>
        </div>

        {/* Service Title Buttons */}
        <div className="mt-8 flex justify-center space-x-4 flex-wrap">
          {services_types.map((service, index) => (
            <Button
              key={index}
              variant="outline"
              className={`${
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

        {/* View More Button */}
        <div className="flex items-center justify-end mt-10 pr-10">
          <Button variant="glow" onClick={() => navigate("services")}>
            View More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { useState } from "react";
import { motion } from "framer-motion";
import horoscope from "../assets/horoscope.jpg";
import Donations from "../assets/Donations.jpg";
import birth_chart from "../assets/birth_chart.jpg";
import Catering from "../assets/catring.jpg";
import education from "../assets/education.jpg";
import { useNavigate } from "react-router";

const services = [
  {
    id: "1",
    title: "Horoscope & Predictions",
    description:
      "Daily, weekly, and monthly horoscopes tailored to individual zodiac signs. Personalized predictions based on your birth chart.",
    image: horoscope,
  },
  {
    id: "2",
    title: "Birth Chart Generation",
    description:
      "Creation of detailed birth charts using your birth date, time, and location. Insights into personality traits and life paths based on astrological positions.",
    image: birth_chart,
  },
  {
    id: "3",
    title: "Remedies and Pariharas",
    description:
      "Recommendations for remedies to mitigate negative influences based on astrology. Suggestions for poojas, donations, and other spiritual practices.",
    image: Donations,
  },
  {
    id: "4",
    title: "Brahmin Catering Services",
    description:
      "Catering for special events such as weddings and housewarming ceremonies, provided by Brahmin chefs. Options for traditional dishes and services tailored to cultural practices.",
    image: Catering,
  },
  {
    id: "5",
    title: "Educational Resources",
    description:
      "Access to articles, videos, and guides about astrology, zodiac signs, and horoscopes. Information on compatibility analyses and career guidance.",
    image: education,
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Default to center
  const navigate = useNavigate();

  const getPosition = (index: number) => {
    const offset =
      (index - currentIndex + services.length + 2) % services.length; // Handle circular shifting
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
          {/* Carousel */}
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[400px] flex justify-center items-center">
            {services.map((service, index) => {
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

          {/* Service Details (Updates on Image Click) */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 bg-[#1c1f3b] p-6 rounded-lg shadow-2xl border border-white/20 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-[#D8B4FE] mb-4">
              {services[currentIndex].title}
            </h3>
            <div className="mb-4 flex justify-center">
              <img
                src={services[currentIndex].image}
                alt={services[currentIndex].title}
                className="w-full max-h-[350px] object-cover rounded-lg border border-[#D8B4FE]"
              />
            </div>
            <p className="text-white/80">
              {services[currentIndex].description}
            </p>
          </motion.div>
        </div>
        <div className="flex items-center justify-end mt-10 pr-10">
          <button onClick={() => navigate("services")}>
            View More Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

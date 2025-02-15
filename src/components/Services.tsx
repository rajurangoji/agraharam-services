import { useState } from "react";
import { motion } from "framer-motion";
import NormalCarousel from "./NormalCarousel";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "1",
      title: "Horoscope & Predictions",
      description:
        "Daily, weekly, and monthly horoscopes tailored to individual zodiac signs. Personalized predictions based on your birth chart.",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/12/30/550x309/46992_1703937966410_1703937984680.jpg",
    },
    {
      id: "2",
      title: "Birth Chart Generation",
      description:
        "Creation of detailed birth charts using your birth date, time, and location. Insights into personality traits and life paths based on astrological positions.",
      image:
        "https://media.istockphoto.com/id/1280278639/vector/zodiac-astrology-circle-astrological-constellation-wheel-zodiac-horoscope-signs-mystical.jpg?s=612x612&w=0&k=20&c=4BbgxKKrRd1OL3SoBE0IMqoVURGJFGiwwUzVAivsJnc=",
    },
    {
      id: "3",
      title: "Remedies and Pariharas",
      description:
        "Recommendations for remedies to mitigate negative influences based on astrology. Suggestions for poojas, donations, and other spiritual practices.",
      image:
        "https://nadiastrologyusa.com/img/nadi-astrology-remedies-online.jpg",
    },
    {
      id: "4",
      title: "Brahmin Catering Services",
      description:
        "Catering for special events such as weddings and housewarming ceremonies, provided by Brahmin chefs. Options for traditional dishes and services tailored to cultural practices.",
      image:
        "https://aahalaxmiganeshcaterers.com/assets/images/catering-services/banner-01.jpg",
    },
    {
      id: "5",
      title: "Educational Resources",
      description:
        "Access to articles, videos, and guides about astrology, zodiac signs, and horoscopes. Information on compatibility analyses and career guidance.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK_tOlfiqDOcSjABOkABNdU67X7IFuRBan9J5Mq4LahZAtuy0XSK87oZCR3V9F33IssM&usqp=CAU",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-[#13142e] text-white flex items-center justify-center"
    >
      <div className="max-w-screen-xl px-6 lg:px-16 w-full">
        <h2 className="text-4xl font-semibold text-center mb-12 uppercase tracking-wider">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Adjusted size for better alignment */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <NormalCarousel />
          </div>

          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 bg-[#1c1f3b] p-6 rounded-lg shadow-2xl border border-white/20 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-[#D8B4FE] mb-4">
              {services[activeService].title}
            </h3>
            <div className="mb-4 flex justify-center">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full max-h-[350px] object-cover rounded-lg border border-[#D8B4FE]"
              />
            </div>
            <p className="text-white/80">{services[activeService].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

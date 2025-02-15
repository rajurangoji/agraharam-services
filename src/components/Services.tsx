import { useState } from "react";
import { motion } from "framer-motion";
import CircularMenu from "./CircularMenu";
// import CustomCarousel from "./CustomCarousel";

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
      className="py-16 bg-gradient-to-b from-[#13142e] to-[#000000] text-white"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12 uppercase tracking-wider">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Circular Menu with Titles */}
          <CircularMenu services={services} setActiveService={setActiveService} />
          {/* <CustomCarousel/> */}

          {/* Selected Service */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-[#1c1f3b] p-6 rounded-lg shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-[#D8B4FE] mb-4">
              {services[activeService].title}
            </h3>
            <div className="mb-4">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-80 rounded-lg object-cover border border-[#D8B4FE]"
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

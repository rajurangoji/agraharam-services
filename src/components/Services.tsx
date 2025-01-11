import { useState } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(0); // Default service index
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
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Circular Buttons */}
          <div className="relative w-64 h-64">
            {services.map((service, index) => {
              const angle = (360 / services.length) * index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`absolute w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold hover:bg-yellow-600 transition ${
                    activeService === index ? "ring-4 ring-yellow-300" : ""
                  }`}
                  style={{
                    transform: `rotate(${angle}deg) translate(8rem) rotate(-${angle}deg)`,
                  }}
                >
                  {service.id}
                </button>
              );
            })}
          </div>

          {/* Selected Service */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 transform">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
                {services[activeService].title}
              </h3>
              <div className="mb-4">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-80 rounded-lg object-cover"
                />
              </div>
              <p>{services[activeService].description}</p>
            </div>
          </div>

          <button>View More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;

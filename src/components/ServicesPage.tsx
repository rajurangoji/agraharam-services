import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { services_types } from "@/config/services";

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  return (
    <div className="bg-[#0d0e27] text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-widest text-[#D8B4FE]">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col space-y-16 relative">
        {services_types.map((service, index) => (
          <motion.div
            key={service.id}
            data-index={index}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className={`flex flex-col lg:flex-row items-center w-full bg-[#1a1b3a] rounded-lg p-10 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-[450px] h-[350px] object-cover rounded-lg border-4 border-[#D8B4FE] shadow-lg"
                animate={{
                  scale: activeIndex === index ? 1.1 : 1,
                  opacity: activeIndex === index ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              </p>
              <button className="mt-6 px-6 py-3 bg-[#D8B4FE] text-[#0d0e27] font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-[#b38de3]">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

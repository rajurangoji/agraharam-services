import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://images.lululemon.com/is/image/lululemon/LW3HQ2S_0572_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
  "https://images.unsplash.com/photo-1739542233673-572b6f1f9934?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://source.unsplash.com/600x400/?mountains",
  "https://source.unsplash.com/600x400/?beach",
  "https://source.unsplash.com/600x400/?forest",
];

const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-3xl mx-auto py-12">
      {/* Image Container */}
      <div className="relative overflow-hidden w-full h-64 rounded-lg shadow-lg">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        <FaChevronRight />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;

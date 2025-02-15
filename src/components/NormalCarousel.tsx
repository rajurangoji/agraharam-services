import { useState } from "react";
import { motion } from "framer-motion";
import Image_unknown3 from "../assets/Unknown-3.jpg";
import Image_unknown4 from "../assets/Unknown-4.jpg";
import Image_unknown8 from "../assets/Unknown-8.jpg";
import bg_img from "../assets/bg-img.png";
import galaxy from "../assets/galaxy-planet-.webp";

const images = [Image_unknown3, Image_unknown4, Image_unknown8, bg_img, galaxy];

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPosition = (index: number) => {
    const offset = index - currentIndex;
    const positions = [
      { rotate: -25, x: "-90%", y: "10%", scale: 0.8, zIndex: 1 },  // First image (lowered)
      { rotate: -10, x: "-50%", y: "0%", scale: 0.9, zIndex: 2 },
      { rotate: 0, x: "0%", y: "0%", scale: 1, zIndex: 3 },  // Center image stays normal
      { rotate: 10, x: "50%", y: "0%", scale: 0.9, zIndex: 2 },
      { rotate: 25, x: "90%", y: "10%", scale: 0.8, zIndex: 1 },  // Last image (lowered)
    ];
    
    return positions[(offset + 5) % 5]; // Loop positions for any number of images
  };

  return (
    <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[400px] flex justify-center items-center">
      {images.map((src, index) => {
        const { rotate, x, y, scale, zIndex } = getPosition(index); // ✅ Include y here
        return (
          <motion.div
            key={index}
            className="absolute w-[200px] h-[300px] lg:w-[250px] lg:h-[350px] cursor-pointer"
            style={{ zIndex }}
            animate={{ rotate, x, y, scale }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg border border-[#D8B4FE]"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/config/services";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARD_WIDTH = typeof window !== "undefined" && window.innerWidth < 768 ? 250 : 600;


const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  const loopedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    };
    scrollInterval.current = setInterval(scroll, 20);
    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
  }, [isPaused]);

  useEffect(() => {
    const ref = scrollRef.current;
    const handleScroll = () => {
      if (!ref) return;
      const { scrollLeft, scrollWidth, clientWidth } = ref;

      if (scrollLeft + clientWidth >= scrollWidth - CARD_WIDTH) {
        ref.scrollLeft = 0;
      }
    };
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, []);

  const pauseAndScroll = (amount: number) => {
    setIsPaused(true);
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section id="testimonials" className="py-16 bg-[#13142e] relative overflow-x-hidden">

      <h2 className="text-4xl font-semibold text-center text-primary-voilet mb-12">
        What Our Clients Say
      </h2>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-primary-voilet text-white p-4 rounded-full hover:scale-110 transition"
        onClick={() => pauseAndScroll(-CARD_WIDTH)}
      >
        <ChevronLeft />
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-primary-voilet text-white p-4 rounded-full hover:scale-110 transition"
        onClick={() => pauseAndScroll(CARD_WIDTH)}
      >
        <ChevronRight />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-6 px-4 md:px-10"
      >
        {loopedTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-[23rem] md:w-[26rem] flex-shrink-0 p-[2px] rounded-2xl my-10 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"

            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-[#13142e] p-6 rounded-[1rem] h-full">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary-voilet"
              />
              <h3 className="text-2xl font-semibold text-center text-primary-voilet mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 text-center mb-4">
                {testimonial.shortTestimonial}
              </p>
              <p className="text-center text-gray-300 mt-2">
                {testimonial.fullTestimonial}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

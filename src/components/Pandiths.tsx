import { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Pandith {
  id: string;
  pandith_name: string;
  pandith_description: string;
  experience: string;
  spoken: string[];
  expertise: string;
}

const CARD_WIDTH = typeof window !== "undefined" && window.innerWidth < 768 ? 288 : 512;

function Pandiths() {
  const [pandiths, setPandiths] = useState<Pandith[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchPandiths = async () => {
      const snapshot = await getDocs(collection(db, "pandiths"));
      const pandithList: Pandith[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Pandith, "id">),
      }));
      setPandiths(pandithList);
    };
    fetchPandiths();
  }, []);

  const loopedPandiths = [...pandiths, ...pandiths];

  // Auto-scroll right to left
  useEffect(() => {
    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        scrollRef.current.scrollLeft -= 1;
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
      if (scrollLeft + clientWidth >= scrollWidth) {
        ref.scrollLeft = ref.scrollWidth/2;
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
    <section id="pandiths" className="py-16 bg-[#13142e] relative overflow-x-hidden">
      <h2 className="text-4xl font-semibold text-center text-primary-voilet mb-12">
        Available Pandiths
      </h2>

      {/* Arrow Buttons in standard positions */}
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
        {loopedPandiths.map((pandith, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-[18rem] md:w-[32rem] flex-shrink-0 p-[2px] rounded-2xl my-4 transition-all duration-300 hover:scale-105 bg-gradient-to-l from-blue-500 via-pink-500 to-purple-500"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-[#13142e] p-4 rounded-[1rem] h-full">
              <h3 className="text-2xl font-semibold text-center text-primary-voilet mb-2">
                {pandith.pandith_name}
              </h3>
              <p className="text-gray-300 text-center mb-2">
                <strong>Expertise:</strong> {pandith.expertise}
              </p>
              <p className="text-gray-300 text-center mb-2">
                <strong>Experience:</strong> {pandith.experience}
              </p>
              <p className="text-gray-300 text-center mb-2">
                <strong>Languages:</strong> {pandith.spoken.join(", ")}
              </p>
              <p className="text-gray-300 text-center mt-4">
                {pandith.pandith_description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Pandiths;

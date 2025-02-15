// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import bg_img from "../assets/Unknown-8.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#B2AFFE] via-[#8C7CFF] to-[#6A5ACD]"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg_img}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>{" "}
        {/* Dark overlay for clarity */}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 rounded-2xl shadow-2xl text-center p-8 lg:p-12"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-extrabold text-white leading-tight"
        >
          Where Ancient Wisdom <br />
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            <span className="text-[#D8B4FE]">Meets Everyday Life.</span>
          </motion.h1>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg lg:text-xl text-white/80 font-medium"
        >
          Where Ancient Wisdom Meets Everyday Life.
        </motion.p>

        {/* Lottie Animation & CTA */}
        <div className="mt-8 flex flex-col items-center gap-6">
          {/* CTA Button with Hover Effect */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 bg-[#6A5ACD] hover:bg-[#8C7CFF] text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300"
          >
            Explore
          </motion.button>
        </div>

        {/* Lottie Animation */}
        {/* <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <DotLottieReact
            src="https://lottie.host/c09c56a7-4972-489f-a20a-af94a983626c/nMcurzfaL2.lottie"
            loop
            autoplay
            className="w-48 lg:w-64"
          />
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Home;

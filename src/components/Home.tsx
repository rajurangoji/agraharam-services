import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import heroscope_bg from "../assets/heroscope_bg.png";

const Home = () => {
  return (
    <section id="home" className="h-screen relative lg:mt-0">
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-evenly px-8 lg:px-16">
        {/* Left Section */}
        <div className="flex flex-col gap-6 z-10 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Welcome to <br />
            <i className="text-yellow-500 font-bold text-4xl lg:text-6xl">
              Agraharam
            </i>
          </h1>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition">
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2 h-auto flex items-center justify-center mt-8 lg:mt-0">
          {/* Background Image */}
          <img
            src={heroscope_bg}
            alt="Background"
            className="absolute w-[90%] sm:w-[100%] lg:w-[80%] h-auto object-contain z-0"
          />
          {/* Lottie Animation */}
          <DotLottieReact
            src="https://lottie.host/c09c56a7-4972-489f-a20a-af94a983626c/nMcurzfaL2.lottie"
            loop
            autoplay
            className="absolute w-[90%] sm:w-[100%] lg:w-[80%] h-auto z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

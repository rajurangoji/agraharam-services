import home_bg from "../assets/home_bg_image.jpg";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B2AFFE] via-[#8C7CFF] to-[#6A5ACD] px-4 sm:px-6 md:px-8 overflow-hidden w-full"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={home_bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 sm:bg-black/40 md:bg-black/20"></div> 
      </div>

      <div className="relative z-10 text-center p-4 sm:p-6 md:p-12 max-w-xl sm:max-w-2xl md:max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Where Ancient Wisdom <br />
          <span className="text-[#D8B4FE]">Meets Everyday Life.</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/80 font-medium">
          Discover the power of ancient rituals and traditions to enhance your life.
        </p>
        <div className="mt-5 sm:mt-6 flex justify-center">
          <Button variant="glow" className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full">Explore</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;

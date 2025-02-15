import { useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface CircularMenuProps {
  services: Service[];
  setActiveService: (index: number) => void;
}

const CircularMenu: React.FC<CircularMenuProps> = ({
  services,
  setActiveService,
}) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const radius = 180; // Increased radius for better visibility

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="relative w-[500px] h-[500px] rounded-full shadow-lg flex items-center justify-center bg-gradient-to-b from-[#000000] to-[#13142e] border-2 border-dotted border-primary-voilet">
        {/* Center Circle */}
        <div className="absolute p-5 w-40 h-40 bg-primary-peach text-black font-bold rounded-full flex items-center justify-center text-xl font-iora shadow-lg">
          {activeItem !== null ? services[activeItem].title : "Menu"}
        </div>

        {/* Circular Menu Items */}
        {services.map((service, index) => {
          const angle = (360 / services.length) * index;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <button
              key={service.id}
              onClick={() => {
                setActiveItem(index);
                setActiveService(index);
              }}
              className={`absolute p-2 w-32 h-20 flex items-center justify-center text-center text-md font-semibold shadow-lg transition-all duration-300 hover:scale-110 rounded-tl-[50px] rounded-tr-[10px] rounded-br-[50px] rounded-bl-[10px] ${
                activeItem === index
                  ? "bg-primary-voilet text-white ring-4 ring-primary-black"
                  : "bg-secondary-100 text-black"
              }`}
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                transformOrigin: "center",
              }}
            >
              <span className="transform -rotate-[calc(${angle}deg)]">
                {service.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CircularMenu;

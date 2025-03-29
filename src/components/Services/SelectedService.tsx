import { motion } from "framer-motion";
import { services_types } from "@/config/services";
import {
  Flame,
  Sun,
  Moon,
  Star,
  Sparkles,
  Flower,
  NotebookIcon as Lotus,
  Gem,
  Leaf,
  Zap,
  Waves,
  Wind,
  NotebookIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

// Map for icon components
const iconMap = {
  Flame,
  Sun,
  Moon,
  Star,
  Sparkles,
  Flower,
  Gem,
  Leaf,
  Zap,
  Waves,
  Wind,
  Lotus,
};

const SelectedService = ({ id }: { id?: string }) => {
  const navigate = useNavigate();
  const decodedId = id ? decodeURIComponent(id) : null;
  const service = services_types.find(
    (s) => s.path === decodedId || s.path === "Pujas and Pariharas"
  );

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] bg-[#0D0C1D]">
        <Card className="w-full max-w-md bg-[#1A1831] border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-[#D8B4FE]">
              Service Not Found
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-[#8A7BA8] mb-6">
              The requested service could not be found.
            </p>
            <Button className="bg-[#2A2654] hover:bg-[#3A3664] text-[#D8B4FE]">
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-4 md:px-8 lg:px-12">
      {/* Service Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 uppercase tracking-wider text-[#D8B4FE]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {service.title}
      </motion.h1>

      <motion.p
        className="text-center max-w-3xl mx-auto mb-16 text-[#8A7BA8] text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {service.description}
      </motion.p>

      {/* Puja & Pariharas Sections */}
      {(service?.category ?? []).map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
        >
          <div className="flex items-center mb-8 gap-3">
            {category.title === "Puja" ? (
              <NotebookIcon className="w-8 h-8 text-[#D8B4FE]" />
            ) : (
              <Star className="w-8 h-8 text-[#D8B4FE]" />
            )}
            <h2 className="text-2xl md:text-4xl font-bold uppercase text-[#D8B4FE]">
              {category.title}
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {(category.types ?? []).map((puja) => {
              const IconComponent =
                puja.icon && iconMap[puja.icon.name as keyof typeof iconMap]
                  ? iconMap[puja.icon.name as keyof typeof iconMap]
                  : Lotus;

              return (
                <motion.div key={puja.id} variants={item}>
                  <Card className="h-full bg-[#1A1831] border-none hover:bg-[#231F42] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(216,180,254,0.15)]">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="p-2 bg-[#2A2654] rounded-lg text-[#D8B4FE]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl text-[#D8B4FE]">
                        {puja.puja_type}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[#8A7BA8] leading-relaxed">
                        {puja.description}
                      </p>

                      <div className="pt-4 border-t border-[#2A2654]">
                        <h4 className="text-sm font-medium text-[#D8B4FE] mb-2">
                          Performed by:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {puja.pandith_details.map((pandith) => (
                            <div
                              key={pandith.id}
                              className="flex items-center gap-2 bg-[#2A2654] p-2 rounded-lg"
                            >
                              <Avatar className="w-6 h-6">
                                <AvatarImage
                                  src={pandith.photo}
                                  alt="@shadcn"
                                />
                                <AvatarFallback className="bg-[#3A3664] text-[#D8B4FE] text-xs">
                                  {pandith.pandith_name
                                    .split(" ")
                                    .map((n: any) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-[#B4A5D0]">
                                {pandith.pandith_name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        className="w-full mt-4 bg-[#2A2654] hover:bg-[#3A3664] text-[#D8B4FE] border border-[#3A3664]"
                        onClick={() => {
                          const encodedServicePath = encodeURIComponent(service.path);
                          const encodedPujaType = encodeURIComponent(puja.puja_type);
                      
                          // Navigate to the booking page with only the selected puja
                          navigate(`/services/${encodedServicePath}/book/${encodedPujaType}`);
                        }}
                      >
                        Book Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default SelectedService;

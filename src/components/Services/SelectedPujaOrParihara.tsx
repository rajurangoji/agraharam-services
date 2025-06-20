import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Star, NotebookIcon } from "lucide-react";
import { useNavigate } from "react-router";

interface Pandith {
  id: string;
  pandith_name: string;
  experience: string;
  spoken: string[];
  expertise: string;
  pandith_description: string;
  photo: string;
}

interface Item {
  id: string;
  title: string;
  description: string;
  type: "Puja" | "Parihara";
  benefits?: string[];
  process?: string[];
  postPujaGuidelines?: string[];
  whyAgraharam?: string[];
  pandiths: Pandith[];
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

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const PujaPariharaList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const pujasSnapshot = await getDocs(collection(db, "pujas"));
      const pariharasSnapshot = await getDocs(collection(db, "pariharas"));
      const pandithSnapshot = await getDocs(collection(db, "pandiths"));

      const pandithMap: Record<string, Pandith> = {};
      pandithSnapshot.docs.forEach((doc) => {
        pandithMap[doc.id] = {
          ...(doc.data() as Pandith),
          id: doc.id,
        };
      });

      const attachPandithDetails = (item: any) => {
        const pandithIds = item.pandithIds || item.pandiths || [];
        const fullPandiths = pandithIds.map((id: string) => pandithMap[id]).filter(Boolean);
        return {
          ...item,
          pandiths: fullPandiths,
        };
      };

      const pujas: Item[] = pujasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...attachPandithDetails(doc.data()),
        type: "Puja",
      }));

      const pariharas: Item[] = pariharasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...attachPandithDetails(doc.data()),
        type: "Parihara",
      }));

      setItems([...pujas, ...pariharas]);
    };

    fetchData();
  }, []);

  const groupedItems = {
    Puja: items.filter((item) => item.type === "Puja"),
    Parihara: items.filter((item) => item.type === "Parihara"),
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-4 md:px-8 lg:px-12">
      {/* Title Heading */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 uppercase tracking-wider text-[#D8B4FE]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pujas and Pariharas
      </motion.h1>

      {["Puja", "Parihara"].map((category) => (
        <motion.div
          key={category}
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-8 gap-3">
            {category === "Puja" ? (
              <NotebookIcon className="w-8 h-8 text-[#D8B4FE]" />
            ) : (
              <Star className="w-8 h-8 text-[#D8B4FE]" />
            )}
            <h2 className="text-2xl md:text-4xl font-bold uppercase text-[#D8B4FE]">
              {category}
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {groupedItems[category as "Puja" | "Parihara"].map((item) => (
              <motion.div key={item.id} variants={itemVariant}>
                <Card className="h-full bg-[#1A1831] border-none hover:bg-[#231F42] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(216,180,254,0.15)]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-[#D8B4FE]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[#8A7BA8]">{item.description}</p>

                    {item.pandiths && item.pandiths.length > 0 && (
                      <div className="pt-4 border-t border-[#2A2654]">
                        <h4 className="text-sm font-medium text-[#D8B4FE] mb-2">
                          Performed by:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.pandiths.map((pandith) => (
                            <div
                              key={pandith.id}
                              className="flex items-center gap-2 bg-[#2A2654] p-2 rounded-lg"
                            >
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={pandith.photo} alt={pandith.pandith_name} />
                                <AvatarFallback className="bg-[#3A3664] text-[#D8B4FE] text-xs">
                                  {pandith.pandith_name
                                    .split(" ")
                                    .map((n) => n[0])
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
                    )}

                    <Button
                      className="w-full mt-4 bg-[#2A2654] hover:bg-[#3A3664] text-[#D8B4FE] border border-[#3A3664]"
                      onClick={() => {
                        const encodedTitle = encodeURIComponent(item.title);
                        navigate(`/services/${category}/book/${encodedTitle}`);
                      }}
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default PujaPariharaList;

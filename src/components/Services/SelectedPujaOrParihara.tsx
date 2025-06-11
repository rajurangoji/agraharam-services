import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "../ui/button";
import { User } from "lucide-react";

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
  pandiths?: string[];
}

const PujaPariharaList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [pandiths, setPandiths] = useState<Record<string, Pandith>>({});
  const searchTerm = "";
  const filterType: "all" | "Puja" | "Parihara" = "all";

  useEffect(() => {
    const fetchData = async () => {
      const pujasSnapshot = await getDocs(collection(db, "pujas"));
      const pariharasSnapshot = await getDocs(collection(db, "pariharas"));

      const pujas: Item[] = pujasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Item, "id" | "type">),
        type: "Puja",
      }));

      const pariharas: Item[] = pariharasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Item, "id" | "type">),
        type: "Parihara",
      }));

      setItems([...pujas, ...pariharas]);

      const pandithSnapshot = await getDocs(collection(db, "pandiths"));
      const pandithMap: Record<string, Pandith> = {};
      pandithSnapshot.docs.forEach((doc) => {
        pandithMap[doc.id] = {
          ...(doc.data() as Pandith),
          id: doc.id,
        };
      });
      setPandiths(pandithMap);
    };

    fetchData();
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesType;
  });

  // Separate pujas and pariharas
  const pujas = filteredItems.filter((item) => item.type === "Puja");
  const pariharas = filteredItems.filter((item) => item.type === "Parihara");

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wider text-[#D8B4FE]">
        Pujas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {pujas.map((item) => (
          <div
            key={item.id}
            className="bg-[#1A1831] rounded-2xl shadow-lg p-8 hover:bg-[#231F42] transition-all"
          >
            <h2 className="text-2xl font-bold text-[#D8B4FE] mb-2">
              {item.title}
            </h2>
            <p className="text-[#8A7BA8] mb-4">{item.description}</p>
            {item.benefits && item.benefits.length > 0 && (
              <div className="mb-2">
                <h4 className="font-semibold text-[#D8B4FE]">Benefits:</h4>
                <ul className="list-disc list-inside text-[#B4A5D0]">
                  {item.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.process && item.process.length > 0 && (
              <div className="mb-2">
                <h4 className="font-semibold text-[#D8B4FE]">Process:</h4>
                <ul className="list-disc list-inside text-[#B4A5D0]">
                  {item.process.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.postPujaGuidelines && item.postPujaGuidelines.length > 0 && (
              <div className="mb-2">
                <h4 className="font-semibold text-[#D8B4FE]">
                  Post Puja Guidelines:
                </h4>
                <ul className="list-disc list-inside text-[#B4A5D0]">
                  {item.postPujaGuidelines.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.whyAgraharam && item.whyAgraharam.length > 0 && (
              <div className="mb-2">
                <h4 className="font-semibold text-[#D8B4FE]">Why Agraharam:</h4>
                <ul className="list-disc list-inside text-[#B4A5D0]">
                  {item.whyAgraharam.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.pandiths?.length && (
              <div className="bg-gray-50 p-4 rounded-lg mt-2">
                <p className="text-sm font-semibold mb-2 text-gray-700">
                  <User className="inline-block h-4 w-4 mr-1" /> Assigned
                  Pandiths
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {item.pandiths.map((pid) => {
                    const pandith = Object.values(pandiths).find(
                      (p) => p.pandith_name === pid
                    );
                    return (
                      <li
                        key={pid}
                        className="flex items-center bg-white rounded p-2 shadow-sm"
                      >
                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-2">
                          {pandith?.pandith_name?.charAt(0) || "?"}
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {pandith?.pandith_name || pid}
                          </p>
                          <p className="text-xs text-gray-500">
                            {pandith?.experience || ""}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <Button className="w-full mt-4 bg-[#2A2654] hover:bg-[#3A3664] text-[#D8B4FE] border border-[#3A3664]">
              Book Consultation
            </Button>
          </div>
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wider text-[#D8B4FE]">
        Pariharas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pariharas.map((item) => (
          <div
            key={item.id}
            className="bg-[#1A1831] rounded-2xl shadow-lg p-8 hover:bg-[#231F42] transition-all"
          >
            <h2 className="text-2xl font-bold text-[#D8B4FE] mb-2">
              {item.title}
            </h2>
            <p className="text-[#8A7BA8] mb-4">{item.description}</p>
            {item.benefits && item.benefits.length > 0 && (
              <div className="mb-2">
                <h4 className="font-semibold text-[#D8B4FE]">Benefits:</h4>
                <ul className="list-disc list-inside text-[#B4A5D0]">
                  {item.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.process && item.process.length > 0 && (
              <div className="mb-2">
                <h4 className="font-semibold text-[#D8B4FE]">Process:</h4>
                <ul className="list-disc list-inside text-[#B4A5D0]">
                  {item.process.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.postPujaGuidelines && item.postPujaGuidelines.length > 0 && (
              <div className="mb-2">
                <h4 className="font-semibold text-[#D8B4FE]">
                  Post Puja Guidelines:
                </h4>
                <ul className="list-disc list-inside text-[#B4A5D0]">
                  {item.postPujaGuidelines.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.whyAgraharam && item.whyAgraharam.length > 0 && (
              <div className="mb-2">
                <h4 className="font-semibold text-[#D8B4FE]">Why Agraharam:</h4>
                <ul className="list-disc list-inside text-[#B4A5D0]">
                  {item.whyAgraharam.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.pandiths?.length && (
              <div className="bg-gray-50 p-4 rounded-lg mt-2">
                <p className="text-sm font-semibold mb-2 text-gray-700">
                  <User className="inline-block h-4 w-4 mr-1" /> Assigned
                  Pandiths
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {item.pandiths.map((pid) => {
                    const pandith = Object.values(pandiths).find(
                      (p) => p.pandith_name === pid
                    );
                    return (
                      <li
                        key={pid}
                        className="flex items-center bg-white rounded p-2 shadow-sm"
                      >
                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-2">
                          {pandith?.pandith_name?.charAt(0) || "?"}
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {pandith?.pandith_name || pid}
                          </p>
                          <p className="text-xs text-gray-500">
                            {pandith?.experience || ""}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <Button className="w-full mt-4 bg-[#2A2654] hover:bg-[#3A3664] text-[#D8B4FE] border border-[#3A3664]">
              Book Consultation
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PujaPariharaList;

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useNavigate } from "react-router";
import { Plus, Trash2, User, Search } from "lucide-react";

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
  pandiths: string[];
}

const PujaPariharaList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [pandiths, setPandiths] = useState<Record<string, Pandith>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "Puja" | "Parihara">(
    "all"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const pujasSnapshot = await getDocs(collection(db, "pujas"));
      const pariharasSnapshot = await getDocs(collection(db, "pariharas"));

      const pujas: Item[] = pujasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Item, "id" | "type">),
        type: "Puja" as const,
      }));

      const pariharas: Item[] = pariharasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Item, "id" | "type">),
        type: "Parihara" as const,
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
      console.log(` pandithMap`, JSON.stringify(pandithMap));
      setPandiths(pandithMap);
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string, type: "Puja" | "Parihara") => {
    if (confirm("Are you sure you want to delete this?")) {
      await deleteDoc(doc(db, type.toLowerCase() + "s", id));
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handelClickPandith = () => {
    navigate("/addpandith");
  };

  const handelClickAddPujaOrPandith = () => {
    navigate("/addpuja");
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pujas & Pariharas List</h1>
        <div className="flex gap-2">
          <Button onClick={handelClickPandith} variant="outline">
            <User className="mr-2 h-4 w-4" />
            Add Pandith
          </Button>
          <Button onClick={handelClickAddPujaOrPandith}>
            <Plus className="mr-2 h-4 w-4" />
            Add Puja/Parihara
          </Button>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <Select
          value={filterType}
          onValueChange={(value: "all" | "Puja" | "Parihara") =>
            setFilterType(value)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Puja">Puja</SelectItem>
            <SelectItem value="Parihara">Parihara</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 mb-6 border border-gray-100 hover:border-gray-200"
        >
          <div className="flex justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === "Puja"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {item.type}
                </span>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Assigned Pandiths
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {item.pandiths.map((pid) => {
                    const pandith = Object.values(pandiths).find(
                      (p) => p.pandith_name === pid
                    );
                    return (
                      <li
                        key={pid}
                        className="flex items-center bg-gray-50 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3 uppercase">
                          {pandith?.pandith_name?.charAt(0) || "?"}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">
                            {pandith?.pandith_name || "Unknown"}
                          </span>
                          <span className="text-xs text-gray-500">
                            {pandith?.experience || ""}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 ml-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(item.id, item.type)}
                className="hover:bg-red-50 hover:text-red-600 transition-colors w-24"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PujaPariharaList;

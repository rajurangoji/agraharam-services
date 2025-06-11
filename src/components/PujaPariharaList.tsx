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
import { Plus, Trash2, User } from "lucide-react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "Puja" | "Parihara">("all");
  const navigate = useNavigate();

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

  const handleDelete = async (id: string, type: "Puja" | "Parihara") => {
    if (confirm("Are you sure you want to delete this?")) {
      await deleteDoc(doc(db, type.toLowerCase() + "s", id));
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pujas & Pariharas List</h1>
        <div className="flex gap-2">
          <Button onClick={() => navigate("/addpandith")} variant="outline">
            <User className="mr-2 h-4 w-4" /> Add Pandith
          </Button>
          <Button onClick={() => navigate("/addpuja")}> <Plus className="mr-2 h-4 w-4" /> Add Puja/Parihara </Button>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <Select value={filterType} onValueChange={(val) => setFilterType(val as any)}>
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
        <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100">
          <div className="flex justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.type === "Puja" ? "bg-purple-100 text-purple-700" : "bg-orange-100 text-orange-700"}`}>
                  {item.type}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{item.description}</p>

              {item.benefits && (
                <div className="mb-2">
                  <h4 className="font-semibold text-gray-700">Benefits:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {item.benefits.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              )}

              {item.process && (
                <div className="mb-2">
                  <h4 className="font-semibold text-gray-700">Process:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {item.process.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              )}

              {item.postPujaGuidelines && (
                <div className="mb-2">
                  <h4 className="font-semibold text-gray-700">Post Puja Guidelines:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {item.postPujaGuidelines.map((g, i) => <li key={i}>{g}</li>)}
                  </ul>
                </div>
              )}

              {item.whyAgraharam && (
                <div className="mb-2">
                  <h4 className="font-semibold text-gray-700">Why Agraharam:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {item.whyAgraharam.map((w, i) => <li key={i}>{w}</li>)}
                  </ul>
                </div>
              )}

              {item.pandiths?.length && (
                <div className="bg-gray-50 p-4 rounded-lg mt-2">
                  <p className="text-sm font-semibold mb-2 text-gray-700">
                    <User className="inline-block h-4 w-4 mr-1" /> Assigned Pandiths
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {item.pandiths.map((pid) => {
                      const pandith = Object.values(pandiths).find((p) => p.pandith_name === pid);
                      return (
                        <li key={pid} className="flex items-center bg-white rounded p-2 shadow-sm">
                          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-2">
                            {pandith?.pandith_name?.charAt(0) || "?"}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{pandith?.pandith_name || pid}</p>
                            <p className="text-xs text-gray-500">{pandith?.experience || ""}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <div className="ml-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(item.id, item.type)}
                className="hover:bg-red-100 text-red-600"
              >
                <Trash2 className="h-4 w-4 mr-1" /> Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PujaPariharaList;

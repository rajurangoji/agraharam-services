import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useNavigate } from "react-router";
import { ListPlus, Type, FileText, Users, ListChecks } from "lucide-react";

interface Pandith {
  id: string;
  pandith_name: string;
  experience: string;
  spoken: string[];
  expertise: string;
  pandith_description: string;
  photo: string;
}

interface PujaForm {
  title: string;
  description: string;
  type: "Puja" | "Parihara";
  pandithIds: string[];
}

const AddPujaOrParihara: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<PujaForm>({
    title: "",
    description: "",
    type: "Puja",
    pandithIds: [],
  });
  const [pandiths, setPandiths] = useState<Pandith[]>([]);

  useEffect(() => {
    const fetchPandiths = async () => {
      const snapshot = await getDocs(collection(db, "pandiths"));
      const data: Pandith[] = snapshot.docs.map((doc) => ({
        ...(doc.data() as Pandith),
      }));
      setPandiths(data);
    };

    fetchPandiths();
  }, []);

  const handleSubmit = async () => {
    try {
      const collectionName = form.type === "Puja" ? "pujas" : "pariharas";
      await addDoc(collection(db, collectionName), {
        title: form.title,
        description: form.description,
        pandiths: form.pandithIds,
      });
      alert(`${form.type} added successfully!`);
      setForm({ title: "", description: "", type: "Puja", pandithIds: [] });
    } catch (error) {
      console.error("Error adding:", error);
    }
  };

  const handleViewList = () => {
    navigate("/listofpujas");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add Puja / Parihara</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            <Type className="inline-block w-4 h-4 mr-2" />
            Type
          </label>
          <Select
            value={form.type}
            onValueChange={(value) =>
              setForm({ ...form, type: value as "Puja" | "Parihara" })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Puja">Puja</SelectItem>
              <SelectItem value="Parihara">Parihara</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            <FileText className="inline-block w-4 h-4 mr-2" />
            Title
          </label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter title"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            <ListPlus className="inline-block w-4 h-4 mr-2" />
            Description
          </label>
          <Textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Enter description"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            <Users className="inline-block w-4 h-4 mr-2" />
            Assign Pandiths
          </label>
          <Select
            value={form.pandithIds.join(",")}
            onValueChange={(value) =>
              setForm({ ...form, pandithIds: value.split(",").filter(Boolean) })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select pandiths" />
            </SelectTrigger>
            <SelectContent>
              {pandiths.map((pandith) => (
                <SelectItem key={pandith.id} value={pandith.id}>
                  {pandith.pandith_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4">
          <Button onClick={handleSubmit} className="flex-1">
            <ListChecks className="w-4 h-4 mr-2" />
            Add {form.type}
          </Button>
          <Button variant="outline" onClick={handleViewList}>
            View List
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPujaOrParihara;

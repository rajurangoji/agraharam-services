import React, { useState, useEffect } from "react";
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
import { Users } from "lucide-react";

interface PujaFormData {
  title: string;
  description: string;
  type: "Puja" | "Parihara";
  benefits: string[];
  process: string[];
  postPujaGuidelines: string[];
  whyAgraharam: string[];
  pandithIds: string[];
  isPandithDropdownOpen: boolean;
}

interface Pandith {
  id: string;
  pandith_name: string;
  experience: string;
  spoken: string[];
  expertise: string;
  pandith_description: string;
  photo: string;
}

type ArrayField =
  | "benefits"
  | "process"
  | "postPujaGuidelines"
  | "whyAgraharam";

const AddPujaForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<PujaFormData>({
    title: "",
    description: "",
    type: "Puja",
    benefits: [""],
    process: [""],
    postPujaGuidelines: [""],
    whyAgraharam: [""],
    pandithIds: [],
    isPandithDropdownOpen: false,
  });

  const [pandiths, setPandiths] = useState<Pandith[]>([]);
  const formData = [
    "benefits",
    "process",
    "postPujaGuidelines",
    "whyAgraharam",
  ];

  useEffect(() => {
    const fetchPandiths = async () => {
      const snapshot = await getDocs(collection(db, "pandiths"));
      const data: Pandith[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Pandith, "id">),
      }));
      setPandiths(data);
    };

    fetchPandiths();
  }, []);

  // Handle clicking outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.pandith-dropdown')) {
        setForm(prev => ({ ...prev, isPandithDropdownOpen: false }));
      }
    };

    if (form.isPandithDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [form.isPandithDropdownOpen]);

  const handleSubmit = async () => {
    try {
      const collectionName = form.type === "Puja" ? "pujas" : "pariharas";
      await addDoc(collection(db, collectionName), {
        ...form,
        benefits: form.benefits.filter(Boolean),
        process: form.process.filter(Boolean),
        postPujaGuidelines: form.postPujaGuidelines.filter(Boolean),
        whyAgraharam: form.whyAgraharam.filter(Boolean),
      });
      alert(`${form.type} added successfully!`);
      setForm({
        title: "",
        description: "",
        type: "Puja",
        benefits: [""],
        process: [""],
        postPujaGuidelines: [""],
        whyAgraharam: [""],
        pandithIds: [],
        isPandithDropdownOpen: false,
      });
    } catch (error) {
      console.error("Error adding puja/parihara:", error);
    }
  };

  const handleInputChange = (
    field: keyof PujaFormData,
    index: number,
    value: string
  ) => {
    const updated = [...(form[field] as string[])];
    updated[index] = value;
    setForm({ ...form, [field]: updated });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4">Add Puja / Parihara</h2>
        <Button onClick={() => navigate("/listofpujas")}>Go to List</Button>
      </div>

      <div className="space-y-4">
        <div>
          <label>Type</label>
          <Select
            value={form.type}
            onValueChange={(val) =>
              setForm({ ...form, type: val as "Puja" | "Parihara" })
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

        <div>
          <label>Title</label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div>
          <label>Description</label>
          <Textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">
            <Users className="inline-block w-4 h-4 mr-2" />
            Assign Pandiths
          </label>
          <div className="space-y-2">
            <div className="relative pandith-dropdown">
              <button
                type="button"
                onClick={() => setForm({ ...form, isPandithDropdownOpen: !form.isPandithDropdownOpen })}
                className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
              >
                <span className="text-gray-500">
                  {form.pandithIds.length > 0 
                    ? `${form.pandithIds.length} pandith(s) selected`
                    : "Select pandiths"
                  }
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {form.isPandithDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {pandiths.map((pandith) => (
                    <label
                      key={pandith.id}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={form.pandithIds.includes(pandith.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setForm({
                              ...form,
                              pandithIds: [...form.pandithIds, pandith.id],
                            });
                          } else {
                            setForm({
                              ...form,
                              pandithIds: form.pandithIds.filter((id) => id !== pandith.id),
                            });
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        {pandith.pandith_name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{pandith.pandith_name}</p>
                        <p className="text-xs text-gray-500">{pandith.expertise}</p>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
            
            {form.pandithIds.length > 0 && (
              <div className="mt-2 space-y-2">
                <p className="text-sm text-gray-500">Selected Pandiths:</p>
                <div className="flex flex-wrap gap-2">
                  {form.pandithIds.map((id) => {
                    const pandith = pandiths.find((p) => p.id === id);
                    return pandith ? (
                      <div
                        key={id}
                        className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1"
                      >
                        <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                          {pandith.pandith_name.charAt(0)}
                        </div>
                        <span className="text-sm">{pandith.pandith_name}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setForm({
                              ...form,
                              pandithIds: form.pandithIds.filter((pid) => pid !== id),
                            });
                          }}
                          className="text-gray-500 hover:text-red-500 ml-1"
                        >
                          ×
                        </button>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {(formData as ArrayField[]).map((field) => (
          <div key={field} className="w-full mb-4">
            <label className="capitalize block mb-1">{field}</label>
            {form[field].map((item, index) => (
              <div key={index} className="gap-2 w-full">
                <Input
                  value={item}
                  onChange={(e) =>
                    handleInputChange(field, index, e.target.value)
                  }
                  className="flex-grow"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default AddPujaForm;

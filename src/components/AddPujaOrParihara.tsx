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

interface PujaFormData {
  title: string;
  description: string;
  type: "Puja" | "Parihara";
  benefits: string[];
  process: string[];
  postPujaGuidelines: string[];
  whyAgraharam: string[];
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
  });

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
    const updated = [...form[field]];
    updated[index] = value;
    setForm({ ...form, [field]: updated });
  };

  const handleAddField = (field: keyof PujaFormData) => {
    setForm({ ...form, [field]: [...form[field], ""] });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add Puja / Parihara</h2>

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

        {(
          [
            "benefits",
            "process",
            "postPujaGuidelines",
            "whyAgraharam",
          ] as ArrayField[]
        ).map((field: ArrayField) => (
          <div key={field}>
            <label className="capitalize">{field}</label>
            {form[field].map((item: string, index: number) => (
              <div key={index} className="flex gap-2 my-2">
                <Input
                  value={item}
                  onChange={(e) =>
                    handleInputChange(field, index, e.target.value)
                  }
                  placeholder={`${field} ${index + 1}`}
                />
                {index === form[field].length - 1 && (
                  <Button type="button" onClick={() => handleAddField(field)}>
                    Add New
                  </Button>
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-end">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default AddPujaForm;

// src/components/AddPandith.tsx
import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

const AddPandith: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    pandith_name: "",
    experience: "",
    spoken: "",
    expertise: "",
    pandith_description: "",
    photo: "",
  });

  const handleSubmit = async () => {
    try {
      const spokenArray = form.spoken
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      await addDoc(collection(db, "pandiths"), {
        ...form,
        spoken: spokenArray,
      });

      alert("Pandith added successfully!");
      setForm({
        pandith_name: "",
        experience: "",
        spoken: "",
        expertise: "",
        pandith_description: "",
        photo: "",
      });
    } catch (error) {
      console.error("Error adding pandith:", error);
    }
  };

  const handleAddpujas = () => {
    navigate("/addpuja");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add Pandith</h2>

      {[
        "pandith_name",
        "experience",
        "expertise",
        "pandith_description",
        "photo",
      ].map((field) => (
        <div key={field} className="mb-4">
          <label className="block font-medium mb-1 capitalize">
            {field.replace("_", " ")}
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={(form as any)[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        </div>
      ))}

      <div className="mb-4">
        <label className="block font-medium mb-1">
          Spoken Languages (comma separated)
        </label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={form.spoken}
          onChange={(e) => setForm({ ...form, spoken: e.target.value })}
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Pandith
      </Button>
      <Button className="m-2" onClick={handleAddpujas}>
        {" "}
        Add pujas
      </Button>
    </div>
  );
};

export default AddPandith;

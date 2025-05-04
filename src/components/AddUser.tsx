// src/components/AddUser.tsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddUser: React.FC = () => {
  const [name, setName] = useState<string>("");

  const handleAdd = async () => {
    if (!name.trim()) return;

    try {
      await addDoc(collection(db, "users"), { name });
      setName(""); // Clear input after adding
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add User</h2>
      <input
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddUser;

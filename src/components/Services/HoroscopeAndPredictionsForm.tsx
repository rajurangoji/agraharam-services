import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Footer from "../Footer";
import React, { FormEvent } from "react";

const HoroscopePredictionForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Horoscope prediction details submitted!");
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#D8B4FE] drop-shadow-lg">
          Horoscope & Predictions
        </h1>
        <p className="text-lg text-white/80 mt-4">
          Fill in the details to get personalized predictions for service:{" "}
          <strong>{id}</strong>
        </p>
      </div>

      <Card className="max-w-4xl mx-auto bg-[#1A1A2E] p-10 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block mb-1 text-white/80">Full Name</label>
            <Input
              name="fullName"
              placeholder="Enter your full name"
              className="bg-gray-900 text-white/80 border-gray-600"
              required
            />
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 text-white/80">Date of Birth</label>
              <Input
                name="dob"
                type="date"
                className="bg-gray-900 text-white/80 border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Time of Birth</label>
              <Input
                name="birthTime"
                type="time"
                className="bg-gray-900 text-white/80 border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Place of Birth</label>
              <Input
                name="birthPlace"
                placeholder="City/Town, Country"
                className="bg-gray-900 text-white/80 border-gray-600"
                required
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-white/80">Gender</label>
              <select
                name="gender"
                className="w-full bg-gray-900 text-white/80 border-gray-600 rounded-md px-3 py-2"
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-white/80">Marital Status</label>
              <select
                name="maritalStatus"
                className="w-full bg-gray-900 text-white/80 border-gray-600 rounded-md px-3 py-2"
              >
                <option value="">Select your status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>

          
          <div>
            <label className="block mb-1 text-white/80">Current Location</label>
            <Input
              name="currentLocation"
              placeholder="City/Town, Country"
              className="bg-gray-900 text-white/80 border-gray-600"
            />
          </div>

          
          <div>
            <label className="block mb-1 text-white/80">Prediction Focus</label>
            <select
              name="focusArea"
              className="w-full bg-gray-900 text-white/80 border-gray-600 rounded-md px-3 py-2"
            >
              <option value="">Select prediction focus</option>
              <option value="general">General Daily Horoscope</option>
              <option value="career">Career & Finance</option>
              <option value="love">Love & Relationships</option>
              <option value="health">Health & Wellness</option>
              <option value="education">Education</option>
              <option value="marriage">Marriage</option>
              <option value="travel">Travel</option>
              <option value="spiritual">Spiritual Growth</option>
              <option value="custom">Custom Query</option>
            </select>
          </div>

          
          <div>
            <label className="block mb-1 text-white/80">
              Specific Question or Additional Info
            </label>
            <textarea
              name="customQuery"
              placeholder="Mention any specific concern or question"
              rows={4}
              className="w-full bg-gray-900 text-white/80 border-gray-600 rounded-md px-3 py-2"
            />
          </div>

          
          <div className="text-center">
            <Button type="submit" variant="glow" className="px-6">
              Get My Prediction
            </Button>
          </div>
        </form>
      </Card>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default HoroscopePredictionForm;
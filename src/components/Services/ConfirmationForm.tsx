import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Footer from "../Footer";
import React, { FormEvent } from "react";

const ConfirmationForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Booking confirmed!");
    
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#D8B4FE] drop-shadow-lg">
          Confirm Your Booking
        </h1>
        <p className="text-lg text-white/80 mt-4">
          Fill in the details to confirm your booking for service:{" "}
          <strong>{id}</strong>
        </p>
      </div>

      <Card className="max-w-xl mx-auto bg-[#1A1A2E] p-8 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-white/80">Full Name</label>
            <Input
              name="name"
              placeholder="Enter your full name"
              className="bg-gray-900 text-white/80 border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-white/80">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="bg-gray-900 text-white/80 border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-white/80">Phone Number</label>
            <Input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="bg-gray-900 text-white/80 border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-white/80">Location</label>
            <Input
              name="location"
              placeholder="Enter your location"
              className="bg-gray-900 text-white/80 border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          <Button type="submit" variant="glow" className="w-full">
            Confirm Booking
          </Button>
        </form>
      </Card>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ConfirmationForm;


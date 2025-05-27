import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Footer from "../Footer";
import React, { FormEvent } from "react";

const BrahminCateringForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Catering request submitted!");
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#D8B4FE] drop-shadow-lg">
          Brahmin Catering Request
        </h1>
        <p className="text-lg text-white/80 mt-4">
          Please fill the details to book catering service: <strong>{id}</strong>
        </p>
      </div>

      <Card className="max-w-4xl mx-auto bg-[#1A1A2E] p-10 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-white/80">Full Name</label>
              <Input name="fullName" placeholder="Your full name" required className="bg-gray-900 text-white/80 border-gray-600" />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Phone Number</label>
              <Input name="phone" type="tel" placeholder="Your phone number" required className="bg-gray-900 text-white/80 border-gray-600" />
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-white/80">Email Address</label>
              <Input name="email" type="email" placeholder="Your email (optional)" className="bg-gray-900 text-white/80 border-gray-600" />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Event Type</label>
              <select name="eventType" required className="w-full bg-gray-900 text-white/80 border-gray-600 rounded-md px-3 py-2 appearance-none">
                <option value="">Select</option>
                <option>Wedding</option>
                <option>Upanayanam</option>
                <option>Seemantham</option>
                <option>Housewarming</option>
                <option>Pooja</option>
                <option>Engagement</option>
                <option>Sathyanarayana Vratam</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-white/80">Event Date</label>
              <Input name="eventDate" type="date" required className="bg-gray-900 text-white/80 border-gray-600" />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Event Time</label>
              <Input name="eventTime" type="time" className="bg-gray-900 text-white/80 border-gray-600" />
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-white/80">Number of Guests</label>
              <Input name="guestCount" type="number" required min={10} placeholder="e.g., 100" className="bg-gray-900 text-white/80 border-gray-600" />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Meal Type</label>
              <select name="mealType" required className="w-full bg-gray-900 text-white/80 border-gray-600 rounded-md px-3 py-2 appearance-none">
                <option value="">Select</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>All-day Catering</option>
                <option>High Tea</option>
              </select>
            </div>
          </div>

         
          <div>
            <label className="block mb-1 text-white/80">Venue Address</label>
            <textarea name="venueAddress" required rows={3} placeholder="Enter full address" className="w-full bg-gray-900 text-white/80 border-gray-600 rounded-md px-3 py-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-white/80">City / Town</label>
              <Input name="city" required className="bg-gray-900 text-white/80 border-gray-600" />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Pin Code</label>
              <Input name="pinCode" className="bg-gray-900 text-white/80 border-gray-600" />
            </div>
          </div>

          
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
  <div>
    <label className="block mb-1 text-white/80">Food Type</label>
    <div className="flex flex-col gap-2 text-white/80">
      <label><input type="checkbox" name="foodType" value="Pure Vegetarian" /> Pure Vegetarian</label>
      <label><input type="checkbox" name="foodType" value="Saatvik" /> Saatvik (No Onion, No Garlic)</label>
      <label><input type="checkbox" name="foodType" value="Jain" /> Jain Food</label>
      <label><input type="checkbox" name="foodType" value="South Indian" /> South Indian Brahmin Style</label>
      <label><input type="checkbox" name="foodType" value="North Indian" /> North Indian Brahmin Style</label>
      <label><input type="checkbox" name="foodType" value="Custom" /> Custom Menu</label>
    </div>
  </div>

  
  <div>
    <label className="block mb-1 text-white/80">Additional Services</label>
    <div className="flex flex-col gap-2 text-white/80">
      <label><input type="checkbox" name="addons" value="Banana Leaf Service" /> Banana Leaf Service</label>
      <label><input type="checkbox" name="addons" value="Buffet Setup" /> Buffet Setup</label>
      <label><input type="checkbox" name="addons" value="Pooja Prasadam" /> Pooja Prasadam Preparation</label>
      <label><input type="checkbox" name="addons" value="Disposable Utensils" /> Disposable Plates/Utensils</label>
      <label><input type="checkbox" name="addons" value="Beverages" /> Water & Beverages</label>
      <label><input type="checkbox" name="addons" value="Cleaning Support" /> Cleaning Support</label>
      <label><input type="checkbox" name="addons" value="Wait Staff" /> Wait Staff</label>
    </div>
  </div>
</div>

          
          <div>
            <label className="text-white/80">
              <input type="checkbox" required className="mr-2" />
              I confirm that the above information is accurate and agree to the terms of service.
            </label>
          </div>

          <Button type="submit" variant="glow" className="w-full">
            Submit Catering Request
          </Button>
        </form>
      </Card>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default BrahminCateringForm;
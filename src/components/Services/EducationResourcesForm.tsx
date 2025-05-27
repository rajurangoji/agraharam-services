import React from "react";
import { Card } from "@/components/ui/card";
import Footer from "../Footer";

const EducationResourcesForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-6 md:px-12 lg:px-20 flex flex-col justify-between">
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-[#D8B4FE] drop-shadow-lg mb-6">
          Coming Soon
        </h1>
        <Card className="max-w-xl mx-auto bg-[#1A1A2E] p-8 rounded-3xl shadow-lg">
          <p className="text-lg text-white/80">
            More information will be available soon. We’re working on something exciting for you!
          </p>
          
        </Card>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default EducationResourcesForm;

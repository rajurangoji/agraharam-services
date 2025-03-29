import { useParams, useNavigate } from "react-router-dom";
import { services_types } from "@/config/services";
import { Button } from "@/components/ui/button";
import PandithProfile from "./PandithProfile";
import { Card } from "@/components/ui/card";
import Footer from "../Footer";

const BookingPage = () => {
  const { id, pujaType } = useParams();
  const navigate = useNavigate();

  const decodedServiceId = id ? decodeURIComponent(id) : null;
  const decodedPujaType = pujaType ? decodeURIComponent(pujaType) : null;

  const service = services_types.find((s) => s.path === decodedServiceId);
  if (!service) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold">
        Service Not Found
      </div>
    );
  }

  let selectedPuja = null;
  for (const category of service.category ?? []) {
    const foundPuja = category.types.find(
      (puja) => puja.puja_type === decodedPujaType
    );
    if (foundPuja) {
      selectedPuja = foundPuja;
      break;
    }
  }

  if (!selectedPuja) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold">
        Puja Not Found
      </div>
    );
  }

  const { details } = selectedPuja;

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#D8B4FE] drop-shadow-lg">
          {selectedPuja.puja_type}
        </h1>
        <p className="text-lg text-white/80 mt-4 max-w-3xl mx-auto">
          {selectedPuja.description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {/* Left Section */}
        <div className="grid grid-cols-1 gap-6">
          {/* Benefits */}
          <Card className="bg-[#1A1A2E] p-6 rounded-3xl">
            <h2 className="text-3xl font-semibold text-[#D8B4FE] mb-4">
              What are the benefits?
            </h2>
            <ul className="text-white/80 list-disc list-inside space-y-2">
              {details.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </Card>

          {/* Process */}
          <Card className="bg-[#1A1A2E] p-6 rounded-3xl">
            <h2 className="text-3xl font-semibold text-[#D8B4FE] mb-4">
              How will it happen?
            </h2>
            <ul className="text-white/80 list-disc list-inside space-y-2">
              {details.process.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </Card>

          {/* Post-Puja Guidelines */}
          <Card className="bg-[#1A1A2E] p-6 rounded-3xl">
            <h2 className="text-3xl font-semibold text-[#D8B4FE] mb-4">
              What should you do after Pooja to get maximum benefits?
            </h2>
            <ul className="text-white/80 list-disc list-inside space-y-2">
              {details.postPujaGuidelines.map((guideline, index) => (
                <li key={index}>{guideline}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 gap-6">
          {/* Why Agraharam */}
          <Card className="bg-[#2A2654] p-6 rounded-3xl ">
            <h2 className="text-3xl font-semibold text-[#D8B4FE] mb-4">
              Why Book with Agraharam?
            </h2>
            <ul className="text-white/80 list-disc list-inside space-y-2">
              {details.whyAgraharam.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </Card>

          {/* Pandit Details */}
          <div>
            <h2 className="text-3xl font-semibold text-[#D8B4FE] text-center">
              Available Pandits
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedPuja.pandith_details.map((pandith) => (
                <PandithProfile key={pandith.id} pandith={pandith} />
              ))}
            </div>
          </div>

          {/* Booking Button */}
          <div className="p-6 flex justify-center">
            <Button
              variant={"glow"}
              onClick={() => navigate(`/services/${id}/confirm`)}
            >
              Proceed to Confirm Booking
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
};

export default BookingPage;

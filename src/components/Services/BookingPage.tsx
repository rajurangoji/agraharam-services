import { useParams, useNavigate } from "react-router-dom";
import { services_types } from "@/config/services";
import { Button } from "@/components/ui/button";
import PandithProfile from "./PandithProfile";

const BookingPage = () => {
  const { id, pujaType } = useParams(); // Get selected service & puja type from URL
  const navigate = useNavigate();

  const decodedServiceId = id ? decodeURIComponent(id) : null;
  const decodedPujaType = pujaType ? decodeURIComponent(pujaType) : null;

  // Find the correct service category
  const service = services_types.find((s) => s.path === decodedServiceId);

  if (!service) {
    return <div className="text-center text-red-500">Service Not Found</div>;
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
    return <div className="text-center text-red-500">Puja Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold text-[#D8B4FE] text-center">
        Booking for {selectedPuja.puja_type}
      </h1>

      {/* Puja Description */}
      <div className="mt-6 text-center">
        <p className="text-lg text-white/80">{selectedPuja.description}</p>
      </div>

      {/* Pandit Details Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-[#D8B4FE] text-center">
          Available Pandits
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedPuja.pandith_details.map((pandith) => (
            <PandithProfile key={pandith.id} pandith={pandith} />
          ))}
        </div>
      </div>

      {/* Booking Button */}
      <div className="mt-8 flex justify-center">
        <Button
          className="bg-[#2A2654] hover:bg-[#3A3664] text-[#D8B4FE] border border-[#3A3664]"
          onClick={() => navigate(`/services/${id}/confirm`)}
        >
          Proceed to Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingPage;

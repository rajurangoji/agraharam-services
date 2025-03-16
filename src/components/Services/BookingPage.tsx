import { useParams, useNavigate } from "react-router-dom";
import { services_types } from "@/config/services";
import { Button } from "@/components/ui/button";
import PandithProfile from "./PandithProfile";
import { Card, CardContent } from "@/components/ui/card";

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

  const handleWhatsAppBooking = () => {
    const phoneNumber = "916305119377"; // Replace with the business's WhatsApp number
    const message = encodeURIComponent(
      `🔔 *New Puja Booking Request* 🔔\n\n` +
        `🔹 *Service:* ${service.title}\n` +
        `🔹 *Category:* ${selectedPuja.puja_type}\n` +
        `🔹 *Pandit Name:* ${selectedPuja.pandith_details[0]?.pandith_name}\n` +
        `🔹 *Experience:* ${selectedPuja.pandith_details[0]?.experience} years\n\n` +
        `📅 *Requested Booking Date:* (User needs to provide)\n` +
        `🕒 *Preferred Time:* (User needs to provide)\n\n` +
        `🙏 Please confirm my booking.`
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#D8B4FE] drop-shadow-lg">
          {selectedPuja.puja_type}
        </h1>
        <p className="text-lg text-white/80 mt-4 max-w-3xl mx-auto">
          {selectedPuja.description}
        </p>
      </div>

      <div className="mt-10 p-6 flex justify-center">
        <Button
          variant={"glow"}
          onClick={() => navigate(`/services/${id}/confirm`)}
        >
          Proceed to Confirm Booking
        </Button>
      </div>

      {/* Benefits Section */}
      <Card className="mt-10 bg-[#1A1A2E] p-6 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-semibold text-[#D8B4FE] mb-4">
          What are the benefits?
        </h2>
        <ul className="text-white/80 list-disc list-inside space-y-2">
          {details.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </Card>

      {/* Process Section */}
      <Card className="mt-10 bg-[#1A1A2E] p-6 rounded-3xl shadow-xl">
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
      <Card className="mt-10 bg-[#1A1A2E] p-6 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-semibold text-[#D8B4FE] mb-4">
          What should you do after Pooja to get maximum benefits?
        </h2>
        <ul className="text-white/80 list-disc list-inside space-y-2">
          {details.postPujaGuidelines.map((guideline, index) => (
            <li key={index}>{guideline}</li>
          ))}
        </ul>
      </Card>

      {/* Why Agraharam Section */}
      <Card className="mt-10 bg-[#2A2654] p-6 rounded-3xl shadow-xl">
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
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-[#D8B4FE] text-center">
          Available Pandits
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedPuja.pandith_details.map((pandith) => (
            <PandithProfile key={pandith.id} pandith={pandith} />
          ))}
        </div>
      </div>

      {/* Booking Button */}
      <div className="mt-10 p-6 flex justify-center">
        <Button variant={"glow"} onClick={handleWhatsAppBooking}>
          Proceed to Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingPage;

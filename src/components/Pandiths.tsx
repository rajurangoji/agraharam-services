import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Adjust path if needed

interface Pandith {
  id: string;
  pandith_name: string;
  pandith_description: string;
  experience: string;
  spoken: string[];
  expertise: string;
  photo: string;
}

function Pandiths() {
  const [pandiths, setPandiths] = useState<Pandith[]>([]);
  const [showDetails, setShowDetails] = useState<number | null>(null);

  useEffect(() => {
    const fetchPandiths = async () => {
      const snapshot = await getDocs(collection(db, "pandiths"));
      const pandithList: Pandith[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Pandith, "id">),
      }));
      //   console.log(` pandithList`, JSON.stringify(pandithList));
      setPandiths(pandithList);
    };
    fetchPandiths();
  }, []);

  return (
    <section id="pandiths" className="py-16 bg-[#13142e]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-center text-primary-voilet mb-12">
          Available Pandiths
        </h2>
        {pandiths.length === 0 ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pandiths.map((pandith, index) => (
              <div
                key={pandith.id}
                className="bg-gradient-to-b from-[#252376] to-[#13142e] p-6 rounded-2xl shadow-xl border border-[#252376] text-white relative"
              >
                <img
                  src={pandith.photo || "https://via.placeholder.com/100"}
                  alt={pandith.pandith_name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary-voilet object-cover"
                />
                <h3 className="text-2xl font-semibold text-center text-primary-voilet mb-2">
                  {pandith.pandith_name}
                </h3>
                <p className="text-gray-300 text-center mb-2">
                  <strong>Expertise:</strong> {pandith.expertise}
                </p>
                <p className="text-gray-300 text-center mb-2">
                  <strong>Experience:</strong> {pandith.experience}
                </p>
                <p className="text-gray-300 text-center mb-4">
                  <strong>Languages:</strong> {pandith.spoken.join(", ")}
                </p>
                <button
                  className="bg-primary-voilet text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition w-full"
                  onClick={() =>
                    setShowDetails(showDetails === index ? null : index)
                  }
                >
                  {showDetails === index ? "View Less" : "View More"}
                </button>

                {showDetails === index && (
                  <p className="text-gray-300 text-center mt-4">
                    {pandith.pandith_description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Pandiths;

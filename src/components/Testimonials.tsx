import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Dummy testimonials data
  const testimonials = [
    {
      name: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK_tOlfiqDOcSjABOkABNdU67X7IFuRBan9J5Mq4LahZAtuy0XSK87oZCR3V9F33IssM&usqp=CAU",
      shortTestimonial:
        "The services provided were excellent. I received accurate horoscope predictions.",
      fullTestimonial:
        "The horoscope predictions were spot on. The remedies recommended have really helped me with my daily life. I'm thankful for the personalized approach and insights shared.",
    },
    {
      name: "Jane Smith",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK_tOlfiqDOcSjABOkABNdU67X7IFuRBan9J5Mq4LahZAtuy0XSK87oZCR3V9F33IssM&usqp=CAU",
      shortTestimonial:
        "A great experience. The birth chart reading was detailed and insightful.",
      fullTestimonial:
        "The birth chart reading provided a clear understanding of my strengths and challenges in life. It helped me with my career and personal decisions. Highly recommend!",
    },
    {
      name: "Michael Brown",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK_tOlfiqDOcSjABOkABNdU67X7IFuRBan9J5Mq4LahZAtuy0XSK87oZCR3V9F33IssM&usqp=CAU",
      shortTestimonial:
        "The remedies were easy to follow, and I noticed a positive change in my life.",
      fullTestimonial:
        "The remedies and suggestions given by the astrologer were practical and effective. It has positively impacted my life. Thank you for your guidance!",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-[#13142e]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-center text-primary-voilet mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-b from-[#252376] to-[#13142e] p-8 rounded-2xl shadow-xl border border-[#252376] hover:shadow-2xl transition duration-300 text-white relative"
            >
              {/* Testimonial Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary-voilet"
              />

              {/* Name */}
              <h3 className="text-2xl font-semibold text-center text-primary-voilet mb-2">
                {testimonial.name}
              </h3>

              {/* Short Testimonial */}
              <p className="text-gray-300 text-center mb-4">
                {testimonial.shortTestimonial}
              </p>

              {/* View More Button */}
              <button
                className="bg-primary-voilet text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition w-full"
                onClick={() =>
                  setShowDetails(showDetails === index ? null : index)
                }
              >
                {showDetails === index ? "View Less" : "View More"}
              </button>

              {/* Full Testimonial - Only shown when View More is clicked */}
              {showDetails === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-300 text-center mt-4"
                >
                  {testimonial.fullTestimonial}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

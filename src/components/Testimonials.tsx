import { useState } from "react";

const Testimonials = () => {
  // Explicitly typing the state as number | null
  const [showDetails, setShowDetails] = useState<number | null>(null);

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

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Testimonial Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-6"
              />

              {/* Name */}
              <h3 className="text-2xl font-semibold text-center mb-4">
                {testimonial.name}
              </h3>

              {/* Short Testimonial */}
              <p className="text-gray-600 text-center mb-4">
                {testimonial.shortTestimonial}
              </p>

              {/* View More Button */}
              <button
                className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition w-full"
                onClick={() =>
                  setShowDetails(showDetails === index ? null : index)
                }
              >
                {showDetails === index ? "View Less" : "View More"}
              </button>

              {/* Full Testimonial - Only shown when View More is clicked */}
              {showDetails === index && (
                <p className="text-gray-600 text-center mt-4">
                  {testimonial.fullTestimonial}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

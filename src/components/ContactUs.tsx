import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ula87lq",    
        "template_2wmkwwu",    
        form.current,
        "oqw7aP2dyDq6jxo-f"        
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-10 px-4 sm:px-6"
    >
      <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center">
        <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 text-violet-400">
  Contact Us
</h2>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-violet-300">
              Get in Touch
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full mt-2 px-4 py-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-violet-500 text-white px-6 py-2 rounded-md hover:bg-violet-600 transition-all shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="bg-gray-800/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-violet-300">
                Our Contact Information
              </h3>
              <p className="text-base mb-3">
                <strong className="text-violet-400">Address:</strong> 123 Agraharam Street, Cityville, Country
              </p>
              <p className="text-base mb-3">
                <strong className="text-violet-400">Phone:</strong> +1 (234) 567-890
              </p>
              <p className="text-base mb-3">
                <strong className="text-violet-400">Email:</strong> agaraharamservices@gmail.com
              </p>
              <div className="flex space-x-5 mt-4 mb-6">
                {["facebook-f", "twitter", "instagram"].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-violet-400 hover:text-violet-500 text-xl transition-all"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-lg overflow-hidden shadow-md border border-gray-700 w-full">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4117022730927!2d78.47441831486994!3d17.38504408815198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913bd72fddaf%3A0x7f5a8963b61ebac2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1683066184497!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

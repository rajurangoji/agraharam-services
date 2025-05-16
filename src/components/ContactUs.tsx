import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ula87lq",     // Replace with your EmailJS service ID
        "template_2wmkwwu",    // Replace with your EmailJS template ID
        form.current,
        "oqw7aP2dyDq6jxo-f"         // Replace with your EmailJS public key (user ID)
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
                  required
                  className="w-full mt-2 px-4 py-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                  className="w-full mt-2 px-4 py-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
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

        </div>
      </div>
    </section>
  );
};

export default ContactUs;

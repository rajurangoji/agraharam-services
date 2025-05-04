const ContactUs = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0D0C1D] text-[#B4A5D0] py-12"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12 text-violet-400 font-iora">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-violet-300">
              Get in Touch
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-2 px-4 py-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full mt-2 px-4 py-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-violet-500 text-white px-6 py-3 rounded-md hover:bg-violet-600 transition-all shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-violet-300">
              Our Contact Information
            </h3>
            <p className="text-lg mb-4">
              <strong className="text-violet-400">Address:</strong> 123 Agraharam Street, Cityville, Country
            </p>
            <p className="text-lg mb-4">
              <strong className="text-violet-400">Phone:</strong> +1 (234) 567-890
            </p>
            <p className="text-lg mb-4">
              <strong className="text-violet-400">Email:</strong> info@agraharam.com
            </p>
            <div className="flex space-x-6 mt-6">
              {/* Social Media Links */}
              {["facebook-f", "twitter", "instagram"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-violet-400 hover:text-violet-500 text-2xl transition-all"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

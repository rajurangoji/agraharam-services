const ContactUs = () => {
    return (
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-semibold text-center mb-12">Contact Us</h2>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
  
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Our Contact Information</h3>
              <p className="text-lg mb-4">
                <strong>Address:</strong> 123 Agraharam Street, Cityville, Country
              </p>
              <p className="text-lg mb-4">
                <strong>Phone:</strong> +1 (234) 567-890
              </p>
              <p className="text-lg mb-4">
                <strong>Email:</strong> info@agraharam.com
              </p>
              <div className="flex space-x-6">
                {/* Social Media Links */}
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  
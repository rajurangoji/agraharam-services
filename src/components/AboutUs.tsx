const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-12 text-yellow-500">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section: Who We Are */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-yellow-500 mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Agraharam is a trusted platform offering astrology-based services
              and Brahmin catering services. Our offerings include horoscope
              predictions, personalized birth chart generation, spiritual
              remedies, and Brahmin catering for events. We aim to bring
              spiritual insights and authentic experiences to our customers
              through astrology, zodiac insights, and traditional food services.
            </p>
            <div className="mt-8">
              <img
                src="https://aahalaxmiganeshcaterers.com/assets/images/catering-services/banner-01.jpg"
                alt="Who We Are"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Section: Our Services */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-yellow-500 mb-6">
              Our Services
            </h3>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-center gap-3">
                <span className="bg-yellow-500 text-white rounded-full p-2">
                  🌟
                </span>
                Horoscope & Predictions
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-yellow-500 text-white rounded-full p-2">
                  🗓️
                </span>
                Birth Chart Generation
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-yellow-500 text-white rounded-full p-2">
                  🔮
                </span>
                Remedies and Pariharas
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-yellow-500 text-white rounded-full p-2">
                  🍽️
                </span>
                Brahmin Catering Services
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-yellow-500 text-white rounded-full p-2">
                  📚
                </span>
                Educational Resources
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

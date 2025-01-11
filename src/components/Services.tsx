const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Horoscope & Predictions */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Horoscope & Predictions
            </h3>
            <p>
              Daily, weekly, and monthly horoscopes tailored to individual
              zodiac signs. Personalized predictions based on your birth chart.
            </p>
          </div>

          {/* Service 2: Birth Chart Generation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Birth Chart Generation
            </h3>
            <p>
              Creation of detailed birth charts using your birth date, time, and
              location. Insights into personality traits and life paths based on
              astrological positions.
            </p>
          </div>

          {/* Service 3: Remedies and Pariharas */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Remedies and Pariharas
            </h3>
            <p>
              Recommendations for remedies to mitigate negative influences based
              on astrology. Suggestions for poojas, donations, and other
              spiritual practices.
            </p>
          </div>

          {/* Service 4: Brahmin Catering Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Brahmin Catering Services
            </h3>
            <p>
              Catering for special events such as weddings and housewarming
              ceremonies, provided by Brahmin chefs. Options for traditional
              dishes and services tailored to cultural practices.
            </p>
          </div>

          {/* Service 5: Educational Resources */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Educational Resources
            </h3>
            <p>
              Access to articles, videos, and guides about astrology, zodiac
              signs, and horoscopes. Information on compatibility analyses and
              career guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

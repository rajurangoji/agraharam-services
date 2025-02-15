const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#13142e] to-[#000000] text-primary-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-primary-voilet font-iora">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section: Who We Are */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-primary-voilet mb-6 font-iora">
              Who We Are
            </h3>
            <p className="text-lg text-neutral-200 leading-relaxed font-light">
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
            <h3 className="text-3xl font-semibold text-primary-voilet mb-6 font-iora">
              Our Services
            </h3>
            <ul className="space-y-4 text-lg text-neutral-200 font-light">
              {[
                { icon: "🌟", text: "Horoscope & Predictions" },
                { icon: "🗓️", text: "Birth Chart Generation" },
                { icon: "🔮", text: "Remedies and Pariharas" },
                { icon: "🍽️", text: "Brahmin Catering Services" },
                { icon: "📚", text: "Educational Resources" },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="bg-primary-peach text-primary-black rounded-full p-2 text-xl">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-[#13142e] text-primary-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-primary-voilet">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="mt-8 w-full lg:w-1/3 max-w-lg lg:mx-0 mx-auto">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WZby5BGTjEQ?si=wJi8DT29sGMzEJpk&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h3 className="text-4xl font-semibold text-primary-voilet mb-6 mt-8">
              Who We Are
            </h3>
            <p className="mb-4 text-lg text-neutral-200 leading-relaxed font-light text-justify">
              Agraharam Services is a trusted platform offering astrology-based services
              and Brahmin catering services. Our offerings include horoscope
              predictions, personalized birth chart generation, spiritual
              remedies, and Brahmin catering for events. We aim to bring
              spiritual insights and authentic experiences to our customers
              through astrology, zodiac insights, and traditional food services.
            </p>
            <p className="text-lg text-neutral-200 leading-relaxed font-light text-justify">
              With a deep respect for tradition and a commitment to authenticity, Agraharam Services bridges the gap between ancient wisdom and modern needs. Whether you're seeking guidance through Vedic astrology or planning a culturally rooted event, our services are designed to offer spiritual clarity and meaningful experiences. From detailed astrological consultations to pure vegetarian Brahmin meals, we uphold the values of purity, precision, and devotion in everything we do.
            </p>
            <Button className="mt-4 rounded-full text-black">Explore</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

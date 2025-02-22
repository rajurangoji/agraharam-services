import horoscope from "../assets/horoscope.jpg";
import Donations from "../assets/Donations.jpg";
import birth_chart from "../assets/birth_chart.jpg";
import Catering from "../assets/catring.jpg";
import education from "../assets/education.jpg";

export const services_types = [
  {
    id: "1",
    title: "Horoscope & Predictions",
    description:
      "Daily, weekly, and monthly horoscopes tailored to individual zodiac signs. Personalized predictions based on your birth chart.",
    image: horoscope,
  },
  {
    id: "2",
    title: "Birth Chart Generation",
    description:
      "Creation of detailed birth charts using your birth date, time, and location. Insights into personality traits and life paths based on astrological positions.",
    image: birth_chart,
  },
  {
    id: "3",
    title: "Remedies and Pariharas",
    description:
      "Recommendations for remedies to mitigate negative influences based on astrology. Suggestions for poojas, donations, and other spiritual practices.",
    image: Donations,
  },
  {
    id: "4",
    title: "Brahmin Catering Services",
    description:
      "Catering for special events such as weddings and housewarming ceremonies, provided by Brahmin chefs. Options for traditional dishes and services tailored to cultural practices.",
    image: Catering,
  },
  {
    id: "5",
    title: "Educational Resources",
    description:
      "Access to articles, videos, and guides about astrology, zodiac signs, and horoscopes. Information on compatibility analyses and career guidance.",
    image: education,
  },
];

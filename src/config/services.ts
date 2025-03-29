import horoscope from "../assets/horoscope.jpg";
import Donations from "../assets/donations.jpg";
import birth_chart from "../assets/birth_chart.jpg";
import Catering from "../assets/catring.jpg";
import education from "../assets/education.jpg";
import { pandiths } from "./pandiths";
import {
  Flame,
  Sun,
  Moon,
  Star,
  Sparkles,
  Flower,
  NotebookIcon as Lotus,
  Gem,
  Waves,
} from "lucide-react";
import ganapathiPuja from "./pujas/ganapathi_puja";
import navagrahaPuja from "./pujas/navagraha_puja";
import saraswatiPuja from "./pujas/saraswati_puja";
import lakshmiPuja from "./pujas/lakshmi_puja";
import durgaPuja from "./pujas/durga_puja";
import { kalaSarpaDoshaParihara, mangalDoshaParihara, pitruDoshaParihara, shaniDoshaParihara } from "./pariharas/pariharas";


export const services_types = [
  {
    id: "1",
    title: "Pujas and Pariharas",
    description:
      "Recommendations for remedies to mitigate negative influences based on astrology. Suggestions for Puja, donations, and other spiritual practices.",
    image: Donations,
    path: "Pujas and Pariharas",
    category: [
      {
        title: "Puja",
        types: [
          {
            id: "1",
            puja_type: "Ganapathi Puja",
            description:
              "Dedicated to Lord Ganesha, this puja removes obstacles and brings success to new beginnings. It's performed before starting any important venture or ceremony.",
            pandith_details: [pandiths.ratnakarRao, pandiths.nameRao],
            icon: Lotus,
            details: ganapathiPuja,
          },
          {
            id: "2",
            puja_type: "Navagraha Puja",
            description:
              "This puja is performed to appease the nine planetary deities to mitigate their negative influences and enhance positive effects in one's life and career.",
            pandith_details: [pandiths.nameHere],
            icon: Sun,
            details: navagrahaPuja,
          },
          {
            id: "3",
            puja_type: "Saraswati Puja",
            description:
              "Dedicated to Goddess Saraswati, this puja brings knowledge, wisdom, and excellence in education. Ideal for students and those seeking intellectual growth.",
            pandith_details: [pandiths.nameHere],
            icon: Flower,
            details: saraswatiPuja,
          },
          {
            id: "4",
            puja_type: "Lakshmi Puja",
            description:
              "This puja invokes Goddess Lakshmi to bring prosperity, wealth, and abundance. It's especially beneficial for business growth and financial stability.",
            pandith_details: [pandiths.ratnakarRao, pandiths.nameRao],
            icon: Sparkles,
            details: lakshmiPuja,
          },
          {
            id: "5",
            puja_type: "Durga Puja",
            description:
              "Honoring Goddess Durga, this powerful puja provides protection, removes negative energies, and gives strength to overcome life's challenges.",
            pandith_details: [pandiths.nameHere],
            icon: Flame,
            details: durgaPuja,
          },
        ],
      },
      {
        title: "Pariharas",
        types: [
          {
            id: "1",
            puja_type: "Kala Sarpa Dosha Parihara",
            description:
              "This ritual neutralizes the negative effects of Kala Sarpa Yoga, which occurs when all planets are positioned between Rahu and Ketu, causing obstacles in life.",
            pandith_details: [pandiths.ratnakarRao],
            icon: Waves,
            details: kalaSarpaDoshaParihara,
          },
          {
            id: "2",
            puja_type: "Mangal Dosha Parihara",
            description:
              "This parihara remedies the negative effects of Mars (Mangal) in the birth chart, which can affect marriage and relationships if unfavorably positioned.",
            pandith_details: [pandiths.ratnakarRao],
            icon: Star,
            details: mangalDoshaParihara,
          },
          {
            id: "3",
            puja_type: "Pitru Dosha Parihara",
            description:
              "This ritual appeases ancestral spirits and resolves issues caused by unfulfilled obligations to ancestors, bringing peace and removing obstacles.",
            pandith_details: [pandiths.ratnakarRao],
            icon: Moon,
            details: pitruDoshaParihara,
          },
          {
            id: "4",
            puja_type: "Shani Dosha Parihara",
            description:
              "This parihara mitigates the challenging effects of Saturn (Shani) in one's horoscope, reducing delays, hardships, and bringing stability to life.",
            pandith_details: [pandiths.ratnakarRao],
            icon: Gem,
            details: shaniDoshaParihara,
          },
        ],
      },
    ],
  },

  {
    id: "2",
    title: "Birth Chart Generation",
    description:
      "Creation of detailed birth charts using your birth date, time, and location. Insights into personality traits and life paths based on astrological positions.",
    image: birth_chart,
    path: "Birth Chart Generation",
  },
  {
    id: "3",
    title: "Brahmin Catering Services",
    description:
      "Catering for special events such as weddings and housewarming ceremonies, provided by Brahmin chefs. Options for traditional dishes and services tailored to cultural practices.",
    image: Catering,
    path: "Brahmin Catering Services",
  },
  {
    id: "4",
    title: "Horoscope & Predictions",
    description:
      "Daily, weekly, and monthly horoscopes tailored to individual zodiac signs. Personalized predictions based on your birth chart.",
    image: horoscope,
    path: "Horoscope & Predictions",
  },

  {
    id: "5",
    title: "Educational Resources",
    description:
      "Access to articles, videos, and guides about astrology, zodiac signs, and horoscopes. Information on compatibility analyses and career guidance.",
    image: education,
    path: "Educational Resources",
  },
];

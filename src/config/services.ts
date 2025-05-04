import horoscope from "../assets/horoscope.jpg";
import Donations from "../assets/donations_main.jpg";
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
import {
  kalaSarpaDoshaParihara,
  mangalDoshaParihara,
  pitruDoshaParihara,
  shaniDoshaParihara,
} from "./pariharas/pariharas";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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

export const allServices = [
  "Home",
  "Services",
  "About",
  "Testimonials",
  "Contact",
];

export const imagePositions = [
  { rotate: -25, x: "-90%", y: "10%", scale: 0.8, zIndex: 1 },
  { rotate: -10, x: "-50%", y: "0%", scale: 0.9, zIndex: 2 },
  { rotate: 0, x: "0%", y: "0%", scale: 1, zIndex: 3 }, // Center
  { rotate: 10, x: "50%", y: "0%", scale: 0.9, zIndex: 2 },
  { rotate: 25, x: "90%", y: "10%", scale: 0.8, zIndex: 1 },
];

export const testimonials = [
  {
    name: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK_tOlfiqDOcSjABOkABNdU67X7IFuRBan9J5Mq4LahZAtuy0XSK87oZCR3V9F33IssM&usqp=CAU",
    shortTestimonial:
      "The services provided were excellent. I received accurate horoscope predictions.",
    fullTestimonial:
      "The horoscope predictions were spot on. The remedies recommended have really helped me with my daily life. I'm thankful for the personalized approach and insights shared.",
  },
  {
    name: "Jane Smith",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK_tOlfiqDOcSjABOkABNdU67X7IFuRBan9J5Mq4LahZAtuy0XSK87oZCR3V9F33IssM&usqp=CAU",
    shortTestimonial:
      "A great experience. The birth chart reading was detailed and insightful.",
    fullTestimonial:
      "The birth chart reading provided a clear understanding of my strengths and challenges in life. It helped me with my career and personal decisions. Highly recommend!",
  },
  {
    name: "Michael Brown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK_tOlfiqDOcSjABOkABNdU67X7IFuRBan9J5Mq4LahZAtuy0XSK87oZCR3V9F33IssM&usqp=CAU",
    shortTestimonial:
      "The remedies were easy to follow, and I noticed a positive change in my life.",
    fullTestimonial:
      "The remedies and suggestions given by the astrologer were practical and effective. It has positively impacted my life. Thank you for your guidance!",
  },
];

export const socialMediaLinks = [
  {
    icon: FaFacebook,
    link: "https://facebook.com",
    color: "hover:text-blue-500",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com",
    color: "hover:text-blue-400",
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com",
    color: "hover:text-pink-500",
  },
  {
    icon: FaLinkedin,
    link: "https://linkedin.com",
    color: "hover:text-blue-700",
  },
];

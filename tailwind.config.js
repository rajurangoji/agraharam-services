/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#000000",
          voilet: "#B2AFFE",
          peach: "#F4EDD3",
          white: "#FFFFFF",
          red_error: "#EF5350",
          gray: "#EAEAEA",
        },
        secondary: {
          100: "#E0E7FF",
          500: "#3B82F6",
          900: "#1E3A8A",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        iora: ["Iora-Italic", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      zIndex: {
        modal: "1000",
        overlay: "900",
        dropdown: "800",
        header: "700",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
            },
            h2: {
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              fontWeight: "600",
              marginBottom: "0.75rem",
            },
            h3: {
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "600",
              marginBottom: "0.75rem",
            },
            p: {
              marginBottom: "1rem",
            },
            a: {
              color: "#3B82F6",
              "&:hover": {
                color: "#1E3A8A",
              },
            },
            ul: {
              listStyleType: "disc",
              marginLeft: "1.5rem",
              marginBottom: "1rem",
            },
            ol: {
              listStyleType: "decimal",
              marginLeft: "1.5rem",
              marginBottom: "1rem",
            },
          },
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 1.5s ease-in-out",
      slideUp: "slideUp 1.2s ease-in-out",
      bounceIn: "bounceIn 0.8s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      slideUp: {
        "0%": { transform: "translateY(30px)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      bounceIn: {
        "0%": { transform: "scale(0.9)", opacity: 0 },
        "50%": { transform: "scale(1.05)", opacity: 0.5 },
        "100%": { transform: "scale(1)", opacity: 1 },
      },
    },
  },
  plugins: [],
};

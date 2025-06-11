module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        redwood: {
          50: "#f5f0ec",
          100: "#e9e0d8",
          300: "#d0b8a4",
          500: "#8b4513",   // live‑edge bar
          700: "#4a2609",   // deep paneling
          forest: "#1f2d24", // stools / accents
        },
        goldaccent: "#b38b4e"
      },
      fontFamily: {
        serif: ["Georgia", "serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};



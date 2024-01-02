/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        delete: "var(--delete)",
      },
    },
  },
  plugins: [],
};

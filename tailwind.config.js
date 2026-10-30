/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0b0f0d", // تیره با ته‌مایه بسیار ملایم سبز-خاکستری
          card: "#121a16",
          border: "#1c2e24",
        },
        brand: {
          50: "#eefbf4",
          100: "#d6f5e3",
          400: "#34d399",
          500: "#10b981", // سبز اصلی
          600: "#059669", // هاور دکمه‌ها
          700: "#047857",
        },
      },
    },
  },
  plugins: [],
};

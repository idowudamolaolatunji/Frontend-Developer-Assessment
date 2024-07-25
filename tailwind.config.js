/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': "#F0F2F5",
        'opacity': "#01102c7d",

        "primary-50": "#F0F6FE",
        "primary-600": "#0D6EFD",

        "secondary-50": "#98A2B3",
        "neutral-400": "#94A3B8",

        "dark-gray": "#555",
        "bg-red": "#FBEAE9",
        "color-red": "#EB9B98"
      },

    },
  },
  plugins: [],
}
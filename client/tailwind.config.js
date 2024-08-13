const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Додај го Flowbite React content path
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Додај го Flowbite React plugin
    require("tailwind-scrollbar"),
  ],
};

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `./**/*.{js,ts,jsx,tsx}`,
    `**/*.{js,ts,jsx,tsx}`,
    `app/**/*.{js,ts,jsx,tsx}`,

    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};

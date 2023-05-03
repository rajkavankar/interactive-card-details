/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        errorRed: "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        lightGreyVoilet: "hsl(270, 3%, 87%)",
        darkGreyVoilet: "hsl(279, 6%, 55%)",
        veryDarkVoilet: "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}

//  screens: {
//         sm: "375px",
//         lg: "1440px",
//       },

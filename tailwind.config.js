/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        DarkBlue: "#0C1326",
        White: "#fefeff",
        LightGrey: "#b3b3b3",
        Primary: "#162246",
        SkyBlue: "#20d1fd",
        BlackPurple: "#332f3d",
        BlueBlack: "#070f1f",
        BlackLighter: "#212122",
        Gray: "#888",
        Black: "#000000",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

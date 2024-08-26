import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        grey: "#545353",
        orange: "#FF8933",
        grey50: "#F5F5F5",
        black90: "#181717",
        "dark-brown": "#5B3702",
        red:"#DB4444",
        grey10: "#F5F5F5",
      },
      colors: {
        grey: "#545353",
        grey10: "#F5F5F5",
         red:"#DB4444",
        orange: "#FF8933",
        grey50: "#F5F5F5",
        black90: "#181717",
        black10: "#282727",
        "dark-brown": "#5B3702",
        inputBG:"#F5F5F5"
      },
      boxShadow:{
        "shadow":"0px 0px 5px 0px rgba(0,0,0,0.2)",
        "shadow-2": "0px 0px 13px -5px rgba(0,0,0,0.1)",
        "shadow_md":"0px 0px 10px -3px rgba(0,0,0,0.3)",
      },
      screens:{
        m:"912px",
        s:"684px",
        xs:"434px",
      }
    },
  },
  plugins: [],
};
export default config;

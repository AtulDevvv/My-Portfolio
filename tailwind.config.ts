
import { motion } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xs:"330px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        sans:"var(--font-sans)",
        serif:"var(--font-serif)"
      },
      keyframes: { 

        'move-left':{
          '0%':{
            transform:"translateX(0%)"
          },
          '100%':{
            transform:"translateX(-50%)"

          }
        },
        'move-right':{
          '0%':{
            transform:"translateX(0%)"
          },
          '100%':{
            transform:"translateX(50%)"

          }
        }
      },
      animation: {
       
        'move-left':"move-left 200s linear infinite",
        'move-right':"move-right 200s linear infinite"
      },
      maskImage: {
        'radial-gradient-bottom-center': 'radial-gradient(50% 50% at bottom center, black, transparent)',
      },

      
    },
  },
  plugins: [],
};
export default config;

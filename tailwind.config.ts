import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'error':'#EB5528',
        'success':'#8CB242',
        'warning':'#F5BF59',
        'brandGray': {
          100: '#c8dfe3',
          200: '#91c0c8',
          300: '#5ba0ac',
          500: '#258090',
          600: '#1e6470',
        },
        'brandGreen':{
          200: '#f9f0eb',
          300: '#f1e0d7',
          400: '#e9d2c2',
          500: '#e2c3ae',
          600: '#ae9787',
        },
        'brandRuby':{
          200: '#edf6f6',
          300: '#ddebed',
          400: '#cde3e3',
          500: '#bbd9db',
          600: '#91a7a9',
        },
        'brandBrown':{
          200: '#fedbd8',
          300: '#fdb7b0',
          400: '#fc9389',
          500: '#fb6f61',
          600: '#c1584d',
        }
      }
    },
  },
  plugins: [],
};
export default config;

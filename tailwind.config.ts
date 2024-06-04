import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#FF914D',
        secondary: '#352CAB',
        tertiary: '#968CE4',
        fourth: '#FFBD59',
        fifth: '#3D0066',
      },
    },
  },
  plugins: [],
};

export default config;

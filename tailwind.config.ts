import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutron-violet': '#8A2BE2',
        'neutron-green': '#39FF14',
        'neutron-black': '#000000',
      },
    },
  },
  plugins: [],
};

export default config; 
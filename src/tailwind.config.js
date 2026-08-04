/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12181C",
        paper: "#F7F7F3",
        paperAlt: "#EFEFE9",
        circuit: "#0E3B2E",
        circuitLight: "#145B47",
        amber: "#F5A623",
        amberLight: "#FFB84D",
        line: "#DEDED6",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

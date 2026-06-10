/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chronicle: {
          bg: "#050816",
          surface: "#07111F",
          primary: "#38BDF8",
          text: "#FFFFFF",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Cascadia Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(56, 189, 248, 0.18)",
        panel: "0 28px 90px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

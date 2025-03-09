import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // deepRed: "var(--primary-color)", // 使用 CSS 变量
        // secondary: "var(--secondary-color)",
        // accent: "var(--accent-color)",
        "klein-900": "#002fa7",
        "klein-600": "#0050ff",
        whitish: "#fefefe",
        "stack-200": "#cacac5",
        "stack-400": "#898980",
        "canary-300": "#e8fe63",
        "canary-400": "#d5f526",
        "canary-500": "#b7db07",
        dark: "#252525",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
});

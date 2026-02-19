import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#123842",
          dark: "#0d2a32",
          pressed: "#091f26",
          soft: "rgba(18, 56, 66, 0.08)",
          "soft-hover": "rgba(18, 56, 66, 0.14)",
        },
        cream: {
          DEFAULT: "#efe3c7",
          soft: "rgba(239, 227, 199, 0.18)",
          border: "rgba(239, 227, 199, 0.65)",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F3F0EB",
        },
        text: {
          DEFAULT: "#111111",
          muted: "#5A6B7A",
          subtle: "#7A8B99",
        },
        border: {
          DEFAULT: "rgba(18, 56, 66, 0.12)",
          strong: "rgba(18, 56, 66, 0.24)",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-epilogue)", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        section: "20px",
      },
      boxShadow: {
        sm: "0 1px 4px rgba(18, 56, 66, 0.06)",
        card: "0 18px 50px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 18px 46px rgba(0, 0, 0, 0.08)",
        hero: "0 30px 70px rgba(18, 56, 66, 0.18)",
        button: "0 12px 26px rgba(18, 56, 66, 0.22)",
        "button-hover": "0 16px 36px rgba(18, 56, 66, 0.30)",
      },
      maxWidth: {
        page: "1200px",
        inner: "1120px",
        content: "900px",
      },
    },
  },
  plugins: [],
};

export default config;

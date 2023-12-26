/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green-3": "#f9fcfa",
        "main-stroke": "#dde1e6",
        "text-inactive-black-30": "#bbb",
        "main-green-100": "#2fa364",
        "main-white-100": "#fff",
        "text-primary-black-100": "#1c1c1c",
        "text-secondary-black-40": "#a4a4a4",
        "gray-500": "#667085",
        "gray-900": "#101828",
        "gray-200": "#eaecf0",
        "main-green-150": "#1d8c50",
        "main-green-10": "#eaf6ef",
        "main-badge": "#9d65c8",
      },
      spacing: {
        boundvariablesdata: "4px",
        boundvariablesdata2: "8px",
      },
      fontFamily: {
        "landing-h9-input-titles": "Rubik",
      },
      borderRadius: {
        "181xl": "200px",
        "81xl": "100px",
        "8xs": "5px",
        boundvariablesdata1: "8px",
        "radius-8": "8px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      xs: "0.75rem",
      xl: "1.25rem",
      "17xl": "2.25rem",
      lg: "1.13rem",
      "41xl": "3.75rem",
      inherit: "inherit",
    },
    screens: {
      md: {
        raw: "screen and (max-width: 600px)",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

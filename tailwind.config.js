/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: 'rgb(3 7 18)', /*  == bg-gray-900 */                /* '#000000' '#CED3D6' '#EAECE9' '#1c1c22' '#DADFE7' '#18181c' */
        primarytext: '#FFFFFF',
        accent: {
          DEFAULT: 'rgb(2 132 199)', /* rgb(2 132 199)  rgb(34, 211, 238) == bg-cyan-400 */          /* '#00bfff' '#0B0C0C' '#00ff99',  */ 
          hover: 'rgb(2 132 199)', /* rgb(34, 211, 238) == bg-cyan-400 */           /* '#00bfff' '#00e187', */
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
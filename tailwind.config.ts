import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEF3C7',
        secondary: '#FDE68A',
        tertiary: '#78350F',
        quaternary: '#0F172A',
        quinary: '#FFFBEB',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      boxShadow: {
        'shadowOne': '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
        'shadowTwo': '0px 25px 50px -12px rgba(255, 255, 255, 0.25)',
        'blackShadowOne': '0px 0px 10px 0px rgba(0, 0, 0, 0.07)',
        'blackShadowTwo': '0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;

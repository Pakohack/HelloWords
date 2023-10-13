/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      ex: '0',
      sm: '376px',
      'md-sm': '480px',
      'lg-sm': '576px',
      md: '768px',
      lg: '1024px',
      l: '1280px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        carouselBg: 'url("assets/hero-carousel/blue-bg.png")',
      },
      colors: {
        blue: '#0A86EF',
        'blue-20': 'rgba(10, 134, 239, 0.20)',
        'white-80': 'rgba(255, 255, 255, 0.80)',
        'white-60': 'rgba(255, 255, 255, 0.60)',
        'white-20': 'rgba(255, 255, 255, 0.20)',
        'white-8': 'rgba(255, 255, 255, 0.08)',
        white: '#ffffff',
        background: '#0A0E12',
        'background-80': 'rgba(10, 14, 18, 0.8)',
        'background-light': '#F2F2F2',
      },
    },
  },
  plugins: [],
};
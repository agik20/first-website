/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
      container: {
        center: true, 
        padding: '16px', 
      },
    extend: {
      colors: {
        primary: '#f59e0b',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};


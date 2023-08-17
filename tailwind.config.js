/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // primary
       moderateBlue : 'hsl(238, 40%, 52%)',
       softRed : 'hsl(358, 79%, 66%)',
       lightBlue : 'hsl(239, 57%, 85%)',
       paleRed : 'hsl(357, 100%, 86%)',
      
       //neutral
       darkBlue : 'hsl(212, 24%, 26%)',
       grayishBlue : 'hsl(211, 10%, 45%)',
       lightGray : 'hsl(223, 19%, 93%)',
       veryLightGray : 'hsl(228, 33%, 97%)',
       white: 'hsl(0, 0%, 100%)'
      },
    },
    screens: {      
      'xs': '350px',
      // => @media (min-width: 475px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
const { Poppins } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'ssm':'340',
        'sm': '360px',
        // => @media (min-width: 576px) { ... }
  
        'md': '612px',
        // => @media (min-width: 960px) { ... }
        'tab':'1450px',
        
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Baskervville:["Baskervville,sans-serif"],
        Poppins:["poppins,sans-serif"],
        Protest:["Protest Revolution", "sans-serif"],
        Pacifico:['Pacifico', 'cursive']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

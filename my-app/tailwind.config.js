/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-color': '#04152d',
        'yellow-dif': '#f9e98f',
        'new-gray': '#b0b0b0'
      },
      fontSize: {
        '2.5xl': '28px',  // Custom font size of 28px
      },
    },
  },
  plugins: [],
}


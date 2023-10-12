/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-gradient-from': '#9747FF',
        'bg-gradient-to': '#7D4BFF',
        
      },
      fontFamily: {
        custom: ['georama'],
      },
      fontWeight: {
        custom: 900, // Use the appropriate font weight value
      },
      fontSize: {
        'custom-large': '2rem',
        'custom-small': '1.5rem',
         // You can adjust the size as needed
      },
      textColor: {
        'custom-color': '#F7A579', // Change the color code to your desired color
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/typography') 
  ],
}

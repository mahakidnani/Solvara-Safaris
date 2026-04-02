/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0B0B0B',
          DEFAULT: '#111111',
          light: '#1A1A1A'
        },
        gold: {
          DEFAULT: '#C6A75E',
          rich: '#D4AF37',
          light: '#E5D3AF'
        },
        text: {
          primary: '#F5F1E8',
          secondary: '#CFC7B8',
          muted: '#8A8A8A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(11,11,11,0.2) 0%, rgba(11,11,11,0.8) 100%)',
      }
    },
  },
  plugins: [],
}

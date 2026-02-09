/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFD6E8',
          purple: '#E6D5FF',
          blue: '#D5E8FF',
          mint: '#D5FFE8',
          yellow: '#FFF5D5',
          lavender: '#F0E6FF',
        },
        magic: {
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          soft: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { opacity: '0.8' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        delhi: {
          maroon: {
            50: '#FDF2F4',
            100: '#FBE8EB',
            200: '#F7D0D7',
            600: '#9B1B30',
            700: '#7A1324',
            800: '#4A0E17',
            900: '#2D080E',
            DEFAULT: '#4A0E17',
          },
          saffron: {
            50: '#FFF8F0',
            100: '#FEEAD4',
            200: '#FDD5AA',
            500: '#F39C12',
            600: '#E67E22',
            700: '#D35400',
            DEFAULT: '#E67E22',
          },
          gold: {
            100: '#FCF8E3',
            200: '#F9F1C7',
            300: '#F3E28F',
            400: '#E6CB54',
            500: '#D4AF37',
            600: '#B89223',
            700: '#8C6C13',
            DEFAULT: '#D4AF37',
          },
          cream: {
            50: '#FFFFFF',
            100: '#FDFBF7',
            200: '#FAF6ED',
            300: '#F3EDE0',
            DEFAULT: '#FAF6ED',
          },
          green: {
            50: '#F0F7F4',
            100: '#DBEDE3',
            700: '#165B40',
            800: '#0F3E2B',
            900: '#09271B',
            DEFAULT: '#0F3E2B',
          },
          dark: {
            800: '#1F171A',
            900: '#140E10',
            950: '#0B0708',
            DEFAULT: '#140E10',
          }
        }
      },
      fontFamily: {
        heading: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        hindi: ['"Rozha One"', '"Yatra One"', 'serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #4A0E17 0%, #2D080E 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F3E28F 0%, #D4AF37 50%, #B89223 100%)',
        'saffron-gradient': 'linear-gradient(135deg, #F39C12 0%, #E67E22 50%, #D35400 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top, #7A1324 0%, #4A0E17 45%, #140E10 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'royal': '0 10px 30px -5px rgba(74, 14, 23, 0.3)',
        'gold': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.4)',
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

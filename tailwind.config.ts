import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal — tema light premium fotografia
        brand: {
          50:  '#fdf8f3',
          100: '#f9ede0',
          200: '#f0d5b8',
          300: '#e4b88a',
          400: '#d49460',
          500: '#c27a3f',   // Cognac/caramelo — cor principal
          600: '#a8612c',
          700: '#8b4c22',
          800: '#6f3b1b',
          900: '#4f2a12',
        },
        gold: {
          300: '#e8cc8a',
          400: '#d4af61',
          500: '#b8962a',   // Dourado editorial
          600: '#9a7d20',
        },
        stone: {
          50:  '#faf8f5',   // Background principal
          100: '#f2ede6',   // Surface cards
          200: '#e5ddd2',   // Borda sutil
          300: '#cfc3b3',
          400: '#b0a090',
          500: '#8c7d6e',
          600: '#6e6058',
          700: '#524840',
          800: '#38312a',
          900: '#1c1713',   // Texto principal
        },
        // Rose/blush para acentos florais
        blush: {
          100: '#fdf0f0',
          200: '#f9dede',
          300: '#f0bbbb',
          400: '#e09090',
          500: '#c96060',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm':  '0 2px 12px rgba(194, 122, 63, 0.12)',
        'warm-md':  '0 8px 30px rgba(194, 122, 63, 0.18)',
        'warm-lg':  '0 20px 60px rgba(194, 122, 63, 0.22)',
        'card':     '0 4px 24px rgba(28, 23, 19, 0.08)',
        'card-hover': '0 12px 40px rgba(28, 23, 19, 0.14)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out both',
        'fade-in':    'fadeIn 0.5s ease-out both',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
}

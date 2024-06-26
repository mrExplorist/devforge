/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    display: [
      'clamp(2.75rem, 4.25vw, 4.5rem)',
      {
        lineHeight: '96.5%',
        letterSpacing: '-3.5%',
        fontWeight: '700',
      },
    ],
    extend: {
      colors: {
        transparent: 'transparent',
        bg: '#0C0D0E',
        lightDark: '#131313',
        'dark-charcoal': '#101214',
        'super-dark-gray': '#1A1A1A',
        'dim-gray': '#555555',
        'light-gray': '#9ca3af',
        customGray: '#62646C',
        gray: '#D1D1D1',
        accent: '#F7F7F7',
        text: '#CCCCCC',
        primary: '#EFECE6',
        outline: '#D1D1D1',
        gradient: '#D0C7B3',
        gradient2: '#968A73',
        gradient3: '#675E4C',
        color: {
          1: '#AC6AFF',
          2: '#FFC876',
          3: '#FF776F',
          4: '#7ADB78',
          5: '#858DFF',
          6: '#FF98E2',
          dark: '#1b1b1b',
          light: '#fff',
          accent: '#7B00D3',
          accentBlue: '#4B8AFF',
          accentDark: '#ffdb4d',
          gray: '#747474',
        },
        light: {
          1: '#FCFAEF',
          2: '#CAFFEF',
          3: '#E3E3E3',
          'accent-blue': '#3042FB',
          5: '#A4FF00',
          6: '#C8C7C6',
          7: '#8F8F8F',
          8: '#6F6F6F',
          9: '#4D4D4D',
          10: '#333333',
          11: '#1E1E1E',
          12: '#0F0F0F',
          13: '#000000',
        },
        stroke: {
          1: '#26242C',
        },
        n: {
          1: '#FFFFFF',
          2: '#CAC6DD',
          3: '#ADA8C3',
          4: '#757185',
          5: '#3F3A52',
          6: '#252134',
          7: '#15131D',
          8: '#0E0C15',
          9: '#474060',
          10: '#43435C',
          11: '#1B1B2E',
          12: '#2E2A41',
          13: '#6C7275',
        },
      },
      fontFamily: {
        sans: ['var(--font-sora)'],
        grotesk: ['var(--font-grotesk)'],
        code: ['var(--font-code)'],
        in: ['var(--font-in)'],
      },
      animation: {
        roll: 'roll 24s linear infinite',
        gradient: 'gradient 6s linear infinite',
      },
      keyframes: {
        roll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'dot-white': 'radial-gradient(white 1px, transparent 1px)',
        'dot-black': 'radial-gradient(black 1px, transparent 1px)',
        'conic-gradient': 'conic-gradient(from 225deg, #D1D1D1, #79FFF7, #9F53FF, #FF98E2, #D1D1D1)',
      },
      lineHeight: {
        base: '150%',
      },
      letterSpacing: {
        tagline: '.15em',
      },
      opacity: {
        15: '.15',
      },
      spacing: {
        0.25: '0.0625rem',
        7.5: '1.875rem',
        15: '3.75rem',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'linear',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      borderWidth: {
        DEFAULT: '0.0625rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        '.container': {
          '@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]': {},
        },
        '.h1': {
          '@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]':
            {},
        },
        '.h2': {
          '@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight':
            {},
        },
        '.h3': {
          '@apply text-[2rem] leading-normal md:text-[2.5rem]': {},
        },
        '.h4': {
          '@apply text-[2rem] leading-normal': {},
        },
        '.h5': {
          '@apply text-2xl leading-normal': {},
        },
        '.h6': {
          '@apply font-semibold text-lg leading-8': {},
        },
        '.body-1': {
          '@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8':
            {},
        },
        '.body-2': {
          '@apply font-light text-[0.875rem] leading-6 md:text-base': {},
        },
        '.caption': {
          '@apply text-sm': {},
        },
        '.tagline': {
          '@apply font-grotesk font-light text-xs tracking-tagline uppercase': {},
        },
        '.quote': {
          '@apply font-code text-lg leading-normal': {},
        },
        '.button': {
          '@apply font-code text-xs font-bold uppercase tracking-wider': {},
        },
        '.gradient-text': {
          '@apply bg-clip-text text-transparent': {},
        },
      });
      addUtilities({
        '.tap-highlight-color': {
          '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        },
      });
    }),
    require('@tailwindcss/typography'),
  ],
};

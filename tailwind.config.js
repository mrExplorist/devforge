/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        light: '#fff',
        accent: '#7B00D3',
        accentDark: '#ffdb4d',
        gray: '#747474',
      },
      backgroundImage: {
        'dot-white': 'radial-gradient(white 1px, transparent 1px)',
        'dot-black': 'radial-gradient(black 1px, transparent 1px)',
      },
    },
    fontFamily: {
      mr: ['var(--font-mr)'],
      in: ['var(--font-inter)'],
      //   os: ['var(--font-os)'],
      //   inc: ['var(--font-inc)'],
      scp: ['var(--font-scp)'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

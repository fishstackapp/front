const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        0.5: '0.125rem',
        1.25: '0.3125rem',
        2.75: '0.6875rem',
        3.5: '0.875rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
        11: '2.75rem',
        15: '3.75rem',
        19: '4.75rem',
        49: '12.25rem',
        112: '28rem',
        224: '56rem',
      },
      borderWidth: {
        5: '5px',
      },
      maxWidth: {
        112: '28rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('child-path', '& path');
    }),
  ],
};

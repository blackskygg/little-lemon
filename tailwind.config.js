/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        'sub-title': ['40pt', {
          fontWeight: 700,
        }],
        'lead': ['18pt', {
          lineHeight: "1.5em",
          fontWeight: 500,
        }],
        'card-title': ['18pt', {
          fontWeight: 700,
        }],
        'paragraph': ['16pt', {
          lineHeight: "1.5em",
          fontWeight: 400,
        }],
        'highlight': ['16pt', {
          lineHeight: "1.5em",
          fontWeight: 500,
        }],
      },
      colors: {
        '1-d': '#495E57',
        '1-l': '#F4CE14',
        '2-d': '#EE9972',
        '2-l': '#FBDABB',
        'h-l': '#EDEFEE',
        'h-d': '#333333',
      }
    },
  },
  plugins: [],
}


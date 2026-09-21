/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace']
      },
      colors: {
        handy: {
          blue: '#1070e5',
          blueHover: '#0b5bbf',
          blueLight: '#eff6ff',
          blueDark: '#084898',
          teal: '#00a878',
          tealLight: '#e6f7f2',
          dark: '#1e293b',
          gray: '#64748b',
          lightGray: '#f8fafc',
          border: '#e2e8f0',
          accent: '#ff8a00'
        },
        corporate: {
          navy: '#0b1b33',
          navyDark: '#071224',
          navyLight: '#142a4d',
          blue: '#0062cc',
          blueHover: '#0052ad',
          blueLight: '#f0f6ff',
          gold: '#e6a100',
          goldLight: '#fff9e6',
          slate: '#334155',
          grayBg: '#f8fafc',
          border: '#e2e8f0'
        }
      },
      boxShadow: {
        'handy': '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'handy-hover': '0 12px 24px -6px rgba(16, 112, 229, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.06)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}

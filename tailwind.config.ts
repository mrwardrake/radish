import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rad: {
          bg:      '#000000',
          bgGreen: '#0a1a0a',
          text:    '#c0e8b0',
          accent:  '#50ff28',
          border:  '#2a5a1a',
          dim:     '#5a8a4a',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom palette from the source site's inline <style> block.
        sand: {
          100: '#f8f7f4',
          200: '#f1efe9',
          300: '#e5e2d8',
        },
      },
      fontFamily: {
        // Inter via next/font. `serif` is deliberately left at Tailwind's
        // default (ui-serif, Georgia, ...) because that is what `.font-serif`
        // elements actually render as on the source site — see DESIGN.md
        // §Typography (rendered font matrix).
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

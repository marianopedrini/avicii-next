import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#E0E0E0',
        black: '#070707',
        grey: '#242424',
        westar: '#E1DFDD',
        leather: '#977A58',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        md: '0'
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ff84',
        secondary: '#1a1f2d',
        dark: '#0f1219'
      }
    },
  },
  plugins: [],
}
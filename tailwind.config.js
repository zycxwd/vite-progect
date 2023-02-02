/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.25rem', '0.35rem'], //字体大小,行高
        sm: ['0.35rem', '0.45rem'], //字体大小,行高
        base: ['0.45rem', '0.55rem'], //字体大小,行高
        lg: ['0.55rem', '0.65rem'], //字体大小,行高
        xl: ['0.65rem', '0.75rem'] //字体大小,行高
      }
    }
  },
  plugins: []
}

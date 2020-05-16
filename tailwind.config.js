module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono:
          '"Iosevka Slab Web", "Menlo", "Monaco", "Lucida Console", "Liberation Mono", "DejaVu Sans Mono","Bitstream Vera Sans Mono", "Courier New", monospace',
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
      letterSpacing: {
        'mono-wide': '0.3em',
      },
      fontSize: {
        'mono-xs': '0.8rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.12)',
        large: '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        hv: { raw: '(hover: hover)' },
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
}

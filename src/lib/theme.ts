const theme = {
  breakpoints: {
    sm: '768px'
  },
  colors: {
    heading: '#222',
    body: '#555'
  },
  fontSizes: {
    root: '16px',
    rootNotSm: '20px'
  },
  fontFamilies: {
    sans: `"DM Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';`
  },
  maxWidths: {
    md: '32rem'
  },
  spaces: {
    0: 0,
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem'
  }
}

export type ThemeType = typeof theme

export default theme

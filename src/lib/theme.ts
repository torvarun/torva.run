const theme = {
  breakpoints: {
    sm: '768px'
  },
  colors: {
    heading: '#222',
    body: '#555',
    yellow: '#FFEB3B'
  },
  fontSizes: {
    root: '18px',
    rootNotSm: '20px',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.75rem',
    '4xl': '2rem',
    '5xl': '3rem',
    '6xl': '4rem'
  },
  letterSpacings: {
    tight: '-0.025em'
  },
  fontFamilies: {
    sans: `"DM Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';`
  },
  maxWidths: {
    md: '32rem'
  },
  spaces: {
    '-1': '-0.25rem',
    '-2': '-0.5rem',
    '-3': '-0.75rem',
    '-4': '-1rem',
    '-5': '-1.25rem',
    '-6': '-1.5rem',
    '-7': '-1.75rem',
    '-8': '-2rem',
    '-10': '-2.5rem',
    '-12': '-3rem',
    '-14': '-3.5rem',
    '-16': '-4rem',
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
    12: '3rem',
    14: '3.5rem',
    16: '4rem'
  }
}

export type ThemeType = typeof theme

export default theme

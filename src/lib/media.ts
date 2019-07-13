import theme from 'src/lib/theme'

const media = (t: typeof theme) => (
  breakpoint: keyof (typeof theme)['breakpoints']
) => `@media screen and (min-width: ${t.breakpoints[breakpoint]})`

export default media

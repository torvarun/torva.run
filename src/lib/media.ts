import { ThemeType } from 'src/lib/theme'

const media = (t: ThemeType) => (breakpoint: keyof ThemeType['breakpoints']) =>
  `@media screen and (min-width: ${t.breakpoints[breakpoint]})`

export default media

import { ThemeType } from 'src/lib/theme'

const media = (theme: ThemeType) => (
  breakpoint: keyof ThemeType['breakpoints']
) => `@media screen and (min-width: ${theme.breakpoints[breakpoint]})`

export default media

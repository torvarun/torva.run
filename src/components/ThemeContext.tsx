import { createContext } from 'react'
import theme, { ThemeType } from 'src/lib/theme'

const ThemeContext = createContext<ThemeType>(theme)

export default ThemeContext

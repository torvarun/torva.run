import { createContext } from 'react'
import theme from 'src/lib/theme'

const ThemeContext = createContext<typeof theme>(theme)

export default ThemeContext

import { useContext } from 'react'
import ThemeContext from 'src/components/ThemeContext'

export default function useThemeContext() {
  return useContext(ThemeContext)
}

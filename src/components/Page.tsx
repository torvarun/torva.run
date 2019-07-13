import React from 'react'
import GlobalStyles from 'src/components/GlobalStyles'
import ThemeContext from 'src/components/ThemeContext'
import theme from 'src/lib/theme'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyles>{children}</GlobalStyles>
    </ThemeContext.Provider>
  )
}

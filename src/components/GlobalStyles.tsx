/** @jsx jsx */
import { Global, jsx } from '@emotion/core'
import React from 'react'
import modernNormalize from 'src/lib/modernNormalize'
import globalStyles from 'src/lib/globalStyles'
import useThemeContext from 'src/hooks/useThemeContext'

export default function GlobalStyles({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useThemeContext()
  return (
    <>
      <Global styles={[modernNormalize, globalStyles(theme)]}></Global>
      {children}
    </>
  )
}

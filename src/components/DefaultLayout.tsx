/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useThemeContext from 'src/hooks/useThemeContext'

export default function DefaultLayout({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useThemeContext()
  return (
    <div
      css={css`
        max-width: ${theme.maxWidths.md};
        margin: ${theme.spaces[12]} auto;
        padding: 0 ${theme.spaces[4]};
      `}
    >
      {children}
    </div>
  )
}

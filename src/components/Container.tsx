/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useThemeContext from 'src/hooks/useThemeContext'
import { ThemeType } from 'src/lib/theme'

export default function Container({
  children,
  maxWidth
}: {
  children: React.ReactNode
  maxWidth: keyof ThemeType['maxWidths']
}) {
  const theme = useThemeContext()
  return (
    <div
      css={css`
        max-width: ${theme.maxWidths[maxWidth]};
        margin: 0 auto;
        padding: 0 ${theme.spaces[4]};
      `}
    >
      {children}
    </div>
  )
}

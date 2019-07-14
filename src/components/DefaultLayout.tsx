/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useThemeContext from 'src/hooks/useThemeContext'
import media from 'src/lib/media'
import LogoWrapper from 'src/components/LogoWrapper'

export default function DefaultLayout({
  children,
  useH1ForTitle
}: {
  children: React.ReactNode
  useH1ForTitle: boolean
}) {
  const theme = useThemeContext()
  const Title = useH1ForTitle ? 'h1' : 'h2'
  return (
    <div
      css={css`
        max-width: ${theme.maxWidths.md};
        margin: ${theme.spaces[12]} auto;
        padding: 0 ${theme.spaces[4]};

        ${media(theme)('sm')} {
          margin: ${theme.spaces[16]} auto;
        }
      `}
    >
      <Title
        css={css`
          font-size: ${theme.fontSizes['2xl']};
          margin: 0 0 ${theme.spaces[12]};
          color: ${theme.colors.heading};
        `}
      >
        <LogoWrapper />
      </Title>
      {children}
    </div>
  )
}

DefaultLayout.defaultProps = {
  useH1ForTitle: false
}

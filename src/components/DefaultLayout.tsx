/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useThemeContext from 'src/hooks/useThemeContext'
import media from 'src/lib/media'
import Container from 'src/components/Container'
import HeaderBar from 'src/components/HeaderBar'

export default function DefaultLayout({
  children,
  title
}: {
  children: React.ReactNode
  title: React.ReactNode
}) {
  const theme = useThemeContext()

  return (
    <div
      css={css`
        margin: ${theme.spaces[12]} 0;
        ${media(theme)('sm')} {
          margin: ${theme.spaces[16]} 0;
        }
      `}
    >
      <Container maxWidth="md">
        <HeaderBar useH1ForTitle={!title} />
        {title && (
          <h1
            css={css`
              margin: 0 0 ${theme.spaces[4]};
              font-size: ${theme.fontSizes['3xl']};
              letter-spacing: ${theme.letterSpacings.tight};
            `}
          >
            {title}
          </h1>
        )}
        {children}
      </Container>
    </div>
  )
}

DefaultLayout.defaultProps = {
  title: false
}

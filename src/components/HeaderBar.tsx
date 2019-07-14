/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useThemeContext from 'src/hooks/useThemeContext'
import LogoWrapper from 'src/components/LogoWrapper'

export default function HeaderBar({
  useH1ForTitle
}: {
  useH1ForTitle: boolean
}) {
  const theme = useThemeContext()
  const Title = useH1ForTitle ? 'h1' : 'h2'

  return (
    <div
      css={css`
        display: flex;
        margin: 0 0 ${theme.spaces[12]};
        align-items: center;
      `}
    >
      <Title
        css={css`
          font-size: ${theme.fontSizes['xl']};
          color: ${theme.colors.heading};
          flex-grow: 1;
          margin: 0;
        `}
      >
        <LogoWrapper />
      </Title>
      <a
        href="https://jp.chibicode.com"
        css={css`
          font-size: ${theme.fontSizes['sm']};
          color: ${theme.colors.heading};
          text-decoration: none;
          font-weight: bold;

          &:hover {
            background: ${theme.colors.yellow};
          }
        `}
      >
        日本語
      </a>
    </div>
  )
}

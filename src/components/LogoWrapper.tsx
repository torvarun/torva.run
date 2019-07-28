/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import useThemeContext from 'src/hooks/useThemeContext'
import Logo from 'src/components/Logo'

function LogoWrapper() {
  const theme = useThemeContext()

  return (
    <Link href="/" passHref>
      <a
        css={css`
          text-decoration: none;
          display: inline-block;
          line-height: 1;
          padding: ${theme.spaces[2]};
          margin: ${theme.spaces[-2]};
          border-radius: ${theme.radii.md};

          &:hover {
            background: ${theme.colors.yellow};
          }
        `}
      >
        <Logo
          css={css`
            position: relative;
            z-index: 1;
            height: 1.5em;
            vertical-align: middle;
          `}
        />
        <span
          css={css`
            vertical-align: middle;
            display: inline-block;
            padding-left: ${theme.spaces[2]};
          `}
        >
          Shu Uesugi
        </span>
      </a>
    </Link>
  )
}

export default LogoWrapper

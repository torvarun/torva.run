/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import Link from 'next/link'
import useThemeContext from 'src/hooks/useThemeContext'
import Logo from 'src/components/Logo'

function LogoWrapper() {
  const theme = useThemeContext()
  const [hover, setHover] = useState(false)
  const mouseEnter = () => {
    setHover(true)
  }
  const mouseLeave = () => {
    setHover(false)
  }

  return (
    <Link href="/" passHref>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onTouchStart={mouseEnter}
        onTouchCancel={mouseLeave}
        onTouchEnd={mouseLeave}
        css={css`
          text-decoration: none;
        `}
      >
        <Logo
          fill={hover ? theme.colors.yellow : 'none'}
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
            padding: 0 ${theme.spaces[2]} 0 ${theme.spaces[3]};
            margin-left: ${theme.spaces['-1']};
            background: ${hover ? theme.colors.yellow : 'none'};
          `}
        >
          Shu Uesugi
        </span>
      </a>
    </Link>
  )
}

export default LogoWrapper

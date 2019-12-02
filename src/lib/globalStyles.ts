import { css } from '@emotion/core'
import { ThemeType } from 'src/lib/theme'
import media from 'src/lib/media'

export default (theme: ThemeType) => css`
  html {
    font-size: ${theme.fontSizes.root};
    color: ${theme.colors.body};
    line-height: 1.6;
  }

  body {
    font-family: ${theme.fontFamilies.sans};
  }

  ${media(theme)('sm')} {
    html {
      font-size: ${theme.fontSizes.rootNotSm};
    }
  }

  a {
    color: inherit;
  }

  hr {
    border-top: none;
    border-bottom: 1px solid ${theme.colors.lightBorder};
    width: 25%;
    margin: 2rem auto;
  }

  h2 {
    margin: 2rem 0 1rem;
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.heading};
  }

  li {
    margin: 0.5rem 0;
  }

  img {
    width: 300px;
    max-width: 100%;
    display: block;
    margin: 2rem auto;
  }
`

import { css } from '@emotion/core'
import { ThemeType } from 'src/lib/theme'
import media from 'src/lib/media'

export default (theme: ThemeType) => css`
  html {
    font-size: ${theme.fontSizes.root};
    color: ${theme.colors.body};
    line-height: 1.5;
  }

  body {
    font-family: ${theme.fontFamilies.sans};
  }

  ${media(theme)('sm')} {
    html {
      font-size: ${theme.fontSizes.rootNotSm};
    }
  }
`

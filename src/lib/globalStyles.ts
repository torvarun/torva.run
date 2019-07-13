import { css } from '@emotion/core'
import theme from 'src/lib/theme'
import media from 'src/lib/media'

export default (t: typeof theme) => css`
  html {
    font-size: ${t.fontSizes.root};
  }

  ${media(t)('sm')} {
    html {
      font-size: ${t.fontSizes.rootNotSm};
    }
  }
`

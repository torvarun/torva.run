/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useThemeContext from 'src/hooks/useThemeContext'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'

function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const theme = useThemeContext()
  const { href, ...rest } = props
  const linkCss = css`
    &:hover {
      background: ${theme.colors.yellow};
    }
  `
  if (href && /^(http|mailto)/.exec(href)) {
    return <a css={linkCss} {...props} />
  } else {
    return (
      <Link href={href || '#'} passHref>
        <a css={linkCss} {...rest}></a>
      </Link>
    )
  }
}

const components = {
  a: A
}

export default function MDXWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

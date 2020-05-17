import React from 'react'
import cn from 'classnames'
import Link from 'src/components/Link'
import { Props as LayoutProps } from 'src/components/Layout'

type Props = {
  type: LayoutProps['type']
}

export default function Footer({ type }: Props) {
  return (
    <footer
      className={cn('pt-16 flex mono-styles', {
        'justify-center': type === 'home',
        'justify-between': type !== 'home',
      })}
    >
      {type !== 'home' && (
        <Link
          href="/"
          className="pb-1 hover-border-styles hv:hover:border-yellow-400"
        >
          ← Home
        </Link>
      )}
      {type !== 'about' && (
        <Link
          href="/about"
          className="pb-1 hover-border-styles hv:hover:border-yellow-400"
        >
          About
        </Link>
      )}
    </footer>
  )
}

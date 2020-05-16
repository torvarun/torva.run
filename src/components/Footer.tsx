import React from 'react'
import Link from 'src/components/Link'
import { Props as LayoutProps } from 'src/components/Layout'

type Props = {
  type: LayoutProps['type']
}

export default function Footer({ type }: Props) {
  return (
    <footer className="pt-16 flex justify-between mono-styles">
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

import React from 'react'
import Emoji from 'src/components/Emoji'
import Link from 'src/components/Link'
import cn from 'classnames'
import { Props as LayoutProps } from 'src/components/Layout'

type Props = {
  type: LayoutProps['type']
}

export default function Header({ type }: Props) {
  return (
    <header className="pb-4">
      {type === 'home' && (
        <div className="text-center pb-1 text-5xl">
          <Emoji className="pr-1">👞</Emoji>
          <Emoji className="pl-1">🥃</Emoji>
        </div>
      )}
      <div
        className={cn('flex', {
          'justify-center': type === 'home',
          'justify-between items-end': type !== 'home',
        })}
      >
        {type !== 'home' && (
          <Link href="/" className="group">
            <span className="block text-3xl pb-2">
              <Emoji className="pr-1">👞</Emoji>
              <Emoji className="pl-1">🥃</Emoji>
            </span>
            <span className="mono-styles block pb-1 hover-border-styles hv:group-hover:border-yellow-400">
              ← Home
            </span>
          </Link>
        )}
        <Link
          href="https://twitter.com/chibicode"
          className="hover-border-styles mono-styles inline-flex pb-1 hv:hover:border-yellow-400"
        >
          @chibicode
        </Link>
      </div>
    </header>
  )
}

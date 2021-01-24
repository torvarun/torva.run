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
    <header>
      {type === 'home' && (
        <>
          <div className="flex justify-between mb-12">
            <Link
              href="https://twitter.com/torvarun"
              className="hover-border-styles mono-styles inline-flex pb-1 hv:hover:border-green-400"
            >
              @torvarun
            </Link>
            <Link
              href="/about"
              className="hover-border-styles mono-styles inline-flex pb-1 hv:hover:border-green-400"
            >
              About
            </Link>
          </div>
          { /*
          <div className="text-center pb-2 text-5xl">
            <Emoji className="pr-1">🏃</Emoji>
            <Emoji className="pl-1">🥃</Emoji>
          </div>
             */ }
        </>
      )}
      <div
        className={cn('flex', {
          'justify-center': type === 'home',
          'justify-between items-end': type !== 'home',
        })}
      >
        {type !== 'home' && (
          <Link href="/" className="group">
            { /*
            <span className="block text-3xl pb-3">
              <Emoji className="pr-1">🏃</Emoji>
              <Emoji className="pl-1">🥃</Emoji>
            </span>
               */ }
            <span className="mono-styles block pb-1 hover-border-styles hv:group-hover:border-green-400">
              ← Home
            </span>
          </Link>
        )}
        {type === 'home' && <h1 className="inline-flex pb-1">Varun Venkataramanan</h1>}
        {type !== 'home' && type !== 'about' && (
          <Link
            href="/about"
            className="hover-border-styles mono-styles inline-flex pb-1 hv:hover:border-green-400"
          >
            About
          </Link>
        )}
      </div>
    </header>
  )
}

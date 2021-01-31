import React from 'react'
import Link from 'src/components/Link'
import cn from 'classnames'
import { Props as LayoutProps } from 'src/components/Layout'
import PostTitle from 'src/components/PostTitle'

type Props = {
  type: LayoutProps['type']
}

export default function Header({ type }: Props) {
  return (
    <header>
      {type === 'home' && (
        <>
          <div className="flex justify-between mb-3">
            <Link
              href="https://blog.torva.run"
              className="hover-border-styles mono-styles inline-flex pb-1 hv:hover:border-green-400"
            >
              blog
            </Link>
            <Link
              href="/android"
              className="hover-border-styles mono-styles inline-flex pb-1 hv:hover:border-green-400"
            >
              Android
            </Link>
            <Link
              href="/resume.pdf"
              className="hover-border-styles mono-styles inline-flex pb-1 hv:hover:border-green-400"
            >
              Resume
            </Link>
          </div>
        </>
      )}
        {type !== 'home' && (
          <div>
            <span className="block text-2xl pb-1">
              {type === 'android' && (
                <PostTitle>Android Portfolio</PostTitle>
              )}
              {type !== 'android' && (
                <PostTitle>Varun Venkataramanan</PostTitle>
              )}
            </span>
          </div>
        )}
      <div
        className={cn('flex', {
          'justify-center': type === 'home',
          'justify-between items-end': type !== 'home',
        })}
      >
        {type !== 'home' && (
          <div>
            <Link href="/" className="group">
              <span className="mono-styles block pb-1 hover-border-styles hv:group-hover:border-green-400">
                ← Home
              </span>
            </Link>
          </div>
        )}
        {type === 'home' && (
          <div className="text-center">
            <h1 className="inline-flex pb-1">
              <PostTitle>Varun Venkataramanan</PostTitle>
            </h1>
            <p>Android Developer • Writer • Distance Runner</p>
          </div>
        )}
        {type !== 'home' && type !== 'about' && (
          <Link
            href="/resume.pdf"
            className="hover-border-styles mono-styles inline-flex pb-1 hv:hover:border-green-400"
          >
            Resume
          </Link>
        )}
      </div>
    </header>
  )
}

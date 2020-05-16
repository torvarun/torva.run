import React from 'react'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import { EmojiToSvg } from 'src/hooks/useEmojiToSvg'
import { EmojiToSvgContext } from 'src/hooks/useEmojiToSvg'
import Meta from 'src/components/Meta'

export type Props = {
  children: React.ReactNode
  type: 'home' | 'post' | 'archive' | 'about'
  emojiToSvg: EmojiToSvg
}

export default function Layout({ children, type, emojiToSvg }: Props) {
  return (
    <EmojiToSvgContext.Provider value={emojiToSvg}>
      <div className="max-w-xl mx-auto px-4 py-16 text-gray-900">
        <Meta type={type} />
        <Header type={type} />
        {children}
        <Footer type={type} />
      </div>
    </EmojiToSvgContext.Provider>
  )
}

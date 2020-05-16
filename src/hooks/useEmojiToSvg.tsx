import { createContext, useContext } from 'react'

export type EmojiToSvg = {
  [key: string]: string | undefined
}

export const EmojiToSvgContext = createContext<EmojiToSvg>({})

export default function useEmojiToSvg(emoji: string) {
  const emojiToSvg = useContext(EmojiToSvgContext)
  return emojiToSvg[emoji] || ''
}

import { createContext, useContext } from 'react'

export const EmojiPrecomputeContext = createContext<(emoji: string) => void>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_) => undefined
)

export default function useEmojiPrecompute(emoji: string) {
  const addEmoji = useContext(EmojiPrecomputeContext)
  addEmoji(emoji)
}

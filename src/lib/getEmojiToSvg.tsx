import React from 'react'
import { renderToString } from 'react-dom/server'
import { EmojiPrecomputeContext } from 'src/hooks/useEmojiPrecompute'
import { EmojiToSvg } from 'src/hooks/useEmojiToSvg'
import { PostBaseProps } from 'src/lib/postGetStaticProps'

const vs16RegExp = /\uFE0F/g
// avoid using a string literal like '\u200D' here because minifiers expand it inline
const zeroWidthJoiner = String.fromCharCode(0x200d)

const removeVS16s = (rawEmoji: string) =>
  rawEmoji.indexOf(zeroWidthJoiner) < 0
    ? rawEmoji.replace(vs16RegExp, '')
    : rawEmoji

function toCodePoint(unicodeSurrogates: string) {
  const r: string[] = []
  let c = 0,
    p = 0,
    i = 0
  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++)
    if (p) {
      r.push((0x10000 + ((p - 0xd800) << 10) + (c - 0xdc00)).toString(16))
      p = 0
    } else if (0xd800 <= c && c <= 0xdbff) {
      p = c
    } else {
      r.push(c.toString(16))
    }
  }
  return r.join('-')
}

async function svgForEmoji(emoji: string) {
  const res = await fetch(
    `https://twemoji.maxcdn.com/v/latest/svg/${toCodePoint(
      removeVS16s(emoji)
    )}.svg`
  )
  return res.text()
}

export default async function getEmojiToSvg<
  Props extends { [key: string]: any }
>(Page: React.ComponentType<PostBaseProps & Props>, emptyProps: Props) {
  const emojis = new Set<string>()
  const addEmoji = (emoji: string) => emojis.add(emoji)
  renderToString(
    <EmojiPrecomputeContext.Provider value={addEmoji}>
      <Page emojiToSvg={{}} {...emptyProps} />
    </EmojiPrecomputeContext.Provider>
  )
  const emojiToSvg: EmojiToSvg = {}
  await Promise.all(
    Array.from(emojis).map(async (emoji) => {
      emojiToSvg[emoji] = await svgForEmoji(emoji)
    })
  )
  return emojiToSvg
}

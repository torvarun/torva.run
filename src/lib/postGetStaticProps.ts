import getEmojiToSvg from 'src/lib/getEmojiToSvg'
import { GetStaticProps } from 'next'
import { EmojiToSvg } from 'src/hooks/useEmojiToSvg'

export type PostBaseProps = {
  emojiToSvg: EmojiToSvg
}

const postGetStaticProps = (
  Page: React.ComponentType<{ emojiToSvg: EmojiToSvg }>
): GetStaticProps<PostBaseProps> => {
  return async () => {
    const emojiToSvg = await getEmojiToSvg(Page, { emojiToSvg: {} })
    return {
      props: {
        emojiToSvg,
      },
    }
  }
}

export default postGetStaticProps

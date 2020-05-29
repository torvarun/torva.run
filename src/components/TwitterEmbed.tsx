import React from 'react'
import { useRef, useState } from 'react'
import useInterval from 'src/hooks/useInterval'
import cn from 'classnames'

declare global {
  interface Window {
    twttr: any
    __twttr: any
  }
}

type Props = { id: string; hideCard?: boolean; hideConversation?: boolean }

const EMBED_DELAY = 500

const TwitterEmbed = ({ id, hideCard, hideConversation }: Props) => {
  const wrapperEl = useRef<HTMLDivElement>(null)
  const [twitterLoaded, setTwitterLoaded] = useState(false)
  useInterval(
    () => {
      if (
        window.twttr &&
        window.twttr.widgets &&
        window.twttr.widgets.createTweet &&
        wrapperEl.current &&
        !twitterLoaded
      ) {
        setTwitterLoaded(true)
        wrapperEl.current.innerHTML = ''
        window.twttr.widgets.createTweet(id, wrapperEl.current, {
          dnt: true,
          cards: hideCard ? 'hidden' : undefined,
          lang: 'ja',
          align: 'center',
          conversation: hideConversation ? 'none' : undefined,
        })
      }
    },
    twitterLoaded ? null : EMBED_DELAY
  )
  return (
    <div
      className={cn({
        'my-12': twitterLoaded,
      })}
      ref={wrapperEl}
    />
  )
}

export default TwitterEmbed

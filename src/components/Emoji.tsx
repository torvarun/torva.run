import React, { memo } from 'react'
import useEmojiToSvg from 'src/hooks/useEmojiToSvg'
import useEmojiPrecompute from 'src/hooks/useEmojiPrecompute'
import styles from 'src/components/Emoji.module.css'
import cn from 'classnames'

type Props = {
  children: string
  label?: string
  className?: string
}

function Emoji({ label, className, children }: Props) {
  const svg = useEmojiToSvg(children)
  useEmojiPrecompute(children)
  return svg ? (
    <span
      role="img"
      aria-label={label || 'Emoji'}
      className={cn(styles.emoji, 'inline-block', className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  ) : (
    <></>
  )
}

export default memo(Emoji)

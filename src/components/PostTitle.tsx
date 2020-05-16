import React from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function PostTitle({ className, children }: Props) {
  return (
    <span
      className={cn(
        'text-3xl leading-tight tracking-tighter font-sans font-bold',
        className
      )}
    >
      {children}
    </span>
  )
}

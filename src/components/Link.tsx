import React from 'react'
import NextLink from 'next/link'

function ExternalLink(props: JSX.IntrinsicElements['a']) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default function Link({
  href,
  old,
  ...props
}: { old?: boolean } & JSX.IntrinsicElements['a']) {
  if (old) {
    return <a href={href} {...props} />
  } else if (href && href.startsWith('/')) {
    return (
      <NextLink href={href}>
        <a {...props} />
      </NextLink>
    )
  } else {
    return <ExternalLink href={href} {...props} />
  }
}

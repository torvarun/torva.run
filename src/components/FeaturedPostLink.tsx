import React from 'react'
import Link from 'src/components/Link'
import PostTitle from 'src/components/PostTitle'
import Date from 'src/components/Date'

type Props = {
  title: string
  href: string
  description: string
  date: number[]
}

export default function FeaturedPostLink({
  title,
  href,
  description,
  date,
}: Props) {
  return (
    <Link href={href} className="block group py-4 my-12">
      <Date date={date} />
      <h2 className="mb-3">
        <PostTitle className="hover-border-styles hv:group-hover:border-yellow-400">
          {title}
        </PostTitle>
      </h2>
      <h4 className="leading-relaxed">{description}</h4>
    </Link>
  )
}

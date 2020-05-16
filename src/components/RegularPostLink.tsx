import React from 'react'
import Link from 'src/components/Link'
import Date from 'src/components/Date'

type Props = {
  title: string
  href: string
  date: number[]
  old?: boolean
}

export default function RegularPostLink({ title, href, date, old }: Props) {
  return (
    <Link old={old} href={href} className="block group py-3 my-6">
      <Date date={date} />
      <h2 className="mb-3">
        <span className="hover-border-styles hv:group-hover:border-yellow-400 text-xl leading-snug">
          {title}
        </span>
      </h2>
    </Link>
  )
}

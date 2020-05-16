import React from 'react'

type Props = {
  date: number[]
}

const zeroPad = (n: number) => (n >= 10 ? `${n}` : `0${n}`)

export default function Date({ date }: Props) {
  return (
    <time
      dateTime={`${date[0]}-${zeroPad(date[1])}-${zeroPad(date[2])}T09:00:00Z`}
      className="block mb-3 mono-styles"
    >
      {date[1]}/{date[2]}/{date[0]}
    </time>
  )
}

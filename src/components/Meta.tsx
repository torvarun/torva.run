import React from 'react'
import Head from 'next/head'
import { Props as LayoutProps } from 'src/components/Layout'
import { SITE_TITLE } from 'src/lib/constants'

type Props = {
  type: LayoutProps['type']
}

export default function Meta({ type }: Props) {
  return (
    <Head>
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:type"
        content={type === 'post' ? 'article' : 'website'}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chibicode" />
      <meta name="twitter:creator" content="@chibicode" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="fb:admins" content="1227210274" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#f6e05e"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#f6e05e" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  )
}

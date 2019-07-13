import React from 'react'
import Head from 'next/head'

// Favicon generated from https://realfavicongenerator.net
// Must change prefix inside site.webmanifest and browserconfig.xml
const faviconPrefix = `/static/favicon`
const faviconBgColor = '#ffffff'

const Favicon = () => (
  <Head>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${faviconPrefix}/apple-touch-icon.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${faviconPrefix}/favicon-32x32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${faviconPrefix}/favicon-16x16.png`}
    />
    <link rel="manifest" href={`${faviconPrefix}/site.webmanifest`} />
    <link
      rel="mask-icon"
      href={`${faviconPrefix}/safari-pinned-tab.svg`}
      color={faviconBgColor}
    />
    <meta name="msapplication-TileColor" content={faviconBgColor} />
    <meta name="theme-color" content={faviconBgColor} />
  </Head>
)

export default Favicon

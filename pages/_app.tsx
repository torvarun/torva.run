import React from 'react'
import Router from 'next/router'
import 'src/styles/iosevka.css'
import 'src/styles/global.css'
import { AppProps } from 'next/app'
import reloadTwitterScript from 'src/lib/reloadTwitterScript'
import { pageview } from 'src/lib/gtag'

Router.events.on('routeChangeStart', () => {
  reloadTwitterScript()
})

Router.events.on('routeChangeComplete', (path: string) => {
  pageview(path)
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

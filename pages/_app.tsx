import React from 'react'
import 'src/styles/iosevka.css'
import 'src/styles/inter.css'
import 'src/styles/global.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

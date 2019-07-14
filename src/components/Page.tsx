import React from 'react'
import Head from 'next/head'
import GlobalStyles from 'src/components/GlobalStyles'
import ThemeContext from 'src/components/ThemeContext'
import theme from 'src/lib/theme'
import Favicon from 'src/components/Favicon'
import { GA_TRACKING_ID } from 'src/lib/gtag'

const defaultTitle = 'Shu Uesugi'
const ogImageUrl = 'https://chibicode.com/static/images/shu-logo-og-image.png'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyles>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });`
            }}
          />
          <script async src="https://platform.twitter.com/widgets.js" />
          <link
            href="https://fonts.googleapis.com/css?family=DM+Sans:400,400i,700&display=optional"
            rel="stylesheet"
          ></link>
          <title>{defaultTitle}</title>
          <meta property="og:title" content={defaultTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:image:width" content="2400" />
          <meta property="og:image:height" content="1260" />
        </Head>
        <Favicon />
        {children}
      </GlobalStyles>
    </ThemeContext.Provider>
  )
}

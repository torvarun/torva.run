import React from 'react'
import Layout from 'src/components/Layout'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import { P } from 'src/components/Tags'
import GravityChart from 'src/components/d3/GravityChart'

export default function Page() {
  return (
    <Layout type="data">
      <Head>
        <title key="title">Data Viz — {SITE_TITLE}</title>
        <meta property="og:title" content="Data Viz" />
        <meta property="og:url" content={`${SITE_URL}/archive`} />
        <link rel="canonical" href={`${SITE_URL}/archive`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/og.png`} />
        {/* Preload */}
        <link
          rel="preload"
          href="/inter/Inter-Bold.woff2?3.13"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/inter/Inter-Regular.woff2?3.13"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/iosevka/woff2/iosevka-slab-regular.woff2"
          as="font"
          type="font/woff2"
        />
        {/* Prefetch */}
        <link
          rel="prefetch"
          href="/inter/Inter-Italic.woff2?3.13"
          as="font"
          type="font/woff2"
        />
        <link
          rel="prefetch"
          href="/iosevka/woff2/iosevka-slab-bold.woff2"
          as="font"
          type="font/woff2"
        />
      </Head>
      <section className="leading-relaxed">
        <div id="intro">
          <P>The following are miscellaneous data visualizations I have worked on over the past few years. I tend to design my charts in a similar fashion to those featured in FiveThrityEight, The Ringer, or New York Times.</P>
          <P>Technologies: D3.js, R (ggplot2), Python</P>
        </div>
        <GravityChart data={gravityData} width="700"/>
      </section>
    </Layout>
  )
}

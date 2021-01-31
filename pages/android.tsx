import React from 'react'
import Layout from 'src/components/Layout'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import { P, H3, Img } from 'src/components/Tags'
import PostTitle from 'src/components/PostTitle'

export default function Page() {
  return (
    <Layout type="about">
      <Head>
        <title key="title">Android — {SITE_TITLE}</title>
        <meta property="og:title" content="Android" />
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
        <h1>
          <PostTitle>Android Portfolio</PostTitle>
        </h1>
        <div id="nature-relaxation">
          <H3>Nature Relaxation TV</H3>
          <P>
            10,000+ installations across Android TV and Amazon TV.
          </P>
          <Img
            src="/images/natureTV.png"
            alt="Nature Relaxation Android TV"
            width="md"
            caption="At request of the client, this app is no longer listed on the Google Play Store but remains available on the Amazon TV Store."
          />
          <P><i>At request of the client, this app is no longer listed on the Google Play Store but remains available on the Amazon TV Store.</i></P>
          <P>I developed this app for Nature Relaxation&trade; as part of my work at App Mastery Inc. The app allows users to browse the video library, play videos (using exoplayer), and perform in-app purhcases.</P>
          <P>Libraries: RxAndroid, ExoPlayer, Retrofit, OkHttp, Picasso, Moshi, Leanback</P>
        </div>
      </section>
    </Layout>
  )
}

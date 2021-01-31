import React from 'react'
import Layout from 'src/components/Layout'
import postGetStaticProps, { PostBaseProps } from 'src/lib/postGetStaticProps'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import { E, A, H3, Ul, Li } from 'src/components/Tags'
import PostTitle from 'src/components/PostTitle'

export const getStaticProps = postGetStaticProps(Page)

export default function Page({ emojiToSvg }: PostBaseProps) {
  return (
    <Layout type="about" emojiToSvg={emojiToSvg}>
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
          <p>
            10,000+ installations across Android TV and Amazon TV.
          </p>
          <img
            src="/images/natureTV.png"
            alt="Nature Relaxation Android TV"
            className="block mx-auto shadow-soft"
          />
          <p><i>At request of the client, this app is no longer listed on the Google Play Store but remains available on the Amazon TV Store.</i></p>
          <p>I developed this app for Nature Relaxation&trade; as part of my work at App Mastery Inc. The app allows users to browse the video library, play videos (using exoplayer), and perform in-app purhcases.</p>
          <p>Libraries: RxAndroid, ExoPlayer, Retrofit, OkHttp, Picasso, Moshi, Leanback</p>
        </div>
      </section>
    </Layout>
  )
}

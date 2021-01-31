import React from 'react'
import Layout from 'src/components/Layout'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import { A, P, H3, Img } from 'src/components/Tags'

export default function Page() {
  return (
    <Layout type="android">
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
        <div id="tv">
          <div id="nature-relaxation">
            <H3 smallBottomMargin>
              <A href="https://www.amazon.com/David-Huting-Nature-Relaxation-Demand/dp/B01JD8ZLBC">
                Nature Relaxation TV
              </A>
            </H3>
            <P className="text-base">
              10,000+ installations across Android TV and Amazon TV
            </P>
            <Img
              src="/images/natureTV.png"
              alt="Nature Relaxation Android TV"
              width="md"
              caption="At request of the client, this app is no longer listed on the Google Play Store but remains available on the Amazon TV Store."
            />
            <P>I developed this app for Nature Relaxation&trade; as part of my work at App Mastery Inc. The app allows users to browse the video library, play videos (using exoplayer), and perform in-app purhcases.</P>
            <P>Libraries: RxAndroid, ExoPlayer, Retrofit, OkHttp, Picasso, Moshi, Leanback</P>
          </div>
          <div id="dekkoo">
            <H3 smallBottomMargin>
              <A href="https://play.google.com/store/apps/details?id=co.appmastery.dekkooandroid">
                Dekkoo TV
              </A>
            </H3>
            <P className="text-base">
              500+ installations
            </P>
            <Img
              src="/images/dekkoo.png"
              alt="Dekkoo Android TV"
              width="md"
            />
            <P>I developed this app for Dekkoo.com as part of my work at App Mastery Inc. The app allows users to browse, search, and play videos from Dekkoo's video library. It supports adaptive playback using the ExoPlayer library.</P>
            <P>Libraries: Retrofit, OkHttp, Picasso, Moshi, ExoPlayer, Leanback</P>
          </div>
        </div>
        <div id="mobile">
          <div id="reckoner">
            <H3 smallBottomMargin>
              <A href="https://play.google.com/store/apps/details?id=ca.thereckoner.thereckoner">
                The Reckoner for Android
              </A>
            </H3>
            <P className="text-base">
              100+ installations with a 4.8 Star rating
            </P>
            <Img
              src="/images/reckoner_android.png"
              alt="Reckoner for Android"
              width="md"
            />
            <P>I developed this application for my high school newspaper, The Reckoner of MGCI, which allows users to browse and read articles published to <A href="https://www.thereckoner.ca" target="_blank">The Reckoner's website</A>. It fetches data from the site using Wordpress's REST API (wp-rest). Articles are displayed in a list of CardViews; individual articles are rendered by displaying formatted HTML in a ScrollView.</P>
            <P>Libraries: Gson, Firebase, Picasso, OkHttp, Butterkinife</P>
          </div>
        </div>
      </section>
    </Layout>
  )
}

import React from 'react'
import Layout from 'src/components/Layout'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import { A, H3, Ul, Li } from 'src/components/Tags'

export default function Page() {
  return (
    <Layout type="home">
      <Head>
        <title key="title">{SITE_TITLE}</title>
        <meta property="og:title" content={SITE_TITLE} />
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
        <div className="my-4">
          <img
            src="/images/me.jpg"
            alt="Varun Venkataramanan"
            className="rounded-full w-56 h-56 block mx-auto shadow-soft"
          />
        </div>
        <Ul>
          <Li>
            CS & English Literature at UWaterloo
          </Li>
          {/*
          <Li>
            Bylines in <i>Macleans</i>, <i>Imprint</i>
          </Li>
          */}
          <Li>
            Currently building out <A href="https://play.google.com/store/apps/details?id=com.splunk.android.alerts">mobile data visualizations</A> at Splunk
          </Li>
          <Li>
            Previously worked on <A href="https://source.android.com/devices/automotive/start/what_automotive">Android Automotive</A> at Ford, <A href="https://source.android.com/security/trusty">Trusty TEE</A>{" at Huawei, "}
            <A href="https://www.qualcomm.com/products/snapdragon-865-5g-mobile-platform">Snapdragon</A>{" at Qualcomm, "}
            <A href="https://github.com/torvarun/gr-pv">software defined radios</A>{" at Per Vices "}
          </Li>
        </Ul>
        <H3 smallBottomMargin>Links</H3>
        <Ul>
          <Li>
            Email:{' '}
            <A href="mailto:varun.venkataramanan@uwaterloo.ca">varun.venkataramanan@uwaterloo.ca</A>
          </Li>
          <Li>
            Twitter:{' '}
            <A href="https://twitter.com/torvarun">@torvarun</A>
          </Li>
          <Li>
            GitHub:{' '}
            <A href="https://github.com/torvarun">@torvarun</A>
          </Li>
          <Li>
            LinkedIn:{' '}
            <A href="https://ca.linkedin.com/in/torvarun">/in/torvarun</A>
          </Li>
        </Ul>
      </section>
    </Layout>
  )
}

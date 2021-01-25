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
        <title key="title">About — {SITE_TITLE}</title>
        <meta property="og:title" content="About" />
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
        <div className="my-16">
          <img
            src="/images/me.jpg"
            alt="Varun Venkataramanan"
            className="rounded-full w-56 h-56 block mx-auto shadow-soft"
          />
        </div>
        <h1>
          <PostTitle>Varun Venkataramanan</PostTitle>
        </h1>
        <Ul>
          <Li>
            CS & English Literature at UWaterloo
          </Li>
          <Li>
            Bylines in <i>Macleans</i>, <i>Imprint</i>
          </Li>
          <Li>
            Currently building out <A href="https://source.android.com/devices/automotive/start/what_automotive">Android Automotive</A> at Ford
          </Li>
          <Li>
            Previously worked on <A href="https://source.android.com/security/trusty">Trusty TEE</A>{" at Huawei, "}
            <A href="https://www.qualcomm.com/products/snapdragon-865-5g-mobile-platform">Snapdragon</A>{" at Qualcomm, "}
            <A href="https://github.com/torvarun/gr-pv">radios</A>{" at Per Vices "}
          </Li>
        </Ul>
        <H3>Links</H3>
        <Ul>
          <Li>
            <strong>email:</strong>{' '}
            <A href="mailto:varun.venkataramanan@uwaterloo.ca">varun.venkataramanan@uwaterloo.ca</A>
          </Li>
          <Li>
            <strong>twitter:</strong>{' '}
            <A href="https://twitter.com/torvarun">@torvarun</A>
          </Li>
          <Li>
            <strong>github:</strong>{' '}
            <A href="https://github.com/torvarun">@torvarun</A>
          </Li>
          <Li>
            <strong>linkedin:</strong>{' '}
            <A href="https://linkedin.com/in/torvarun">/in/torvarun</A>
          </Li>
        </Ul>
        <H3>Meta</H3>
        <Ul>
          <Li>
            This site is built with <A href="https://nextjs.org/">Next.js</A>{' '}
            and is a derivative of <A href="https://github.com/chibicode/cc">chibicode</A>
          </Li>
          <Li>
            This site uses{' '}
            <A href="https://github.com/twitter/twemoji">Twemoji</A> by Twitter
            (CC-BY 4.0).
          </Li>
          <Li>
            The source code is available on{' '}
            <A href="https://github.com/torvarun/torva.run">GitHub</A>.
          </Li>
          <Li>
            License for the posts: ©2020 Varun Venkataramanan. All Rights Reserved.
          </Li>
        </Ul>
      </section>
    </Layout>
  )
}

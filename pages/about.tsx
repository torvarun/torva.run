import React from 'react'
import Layout from 'src/components/Layout'
import FeaturedPostLink from 'src/components/FeaturedPostLink'
import posts from 'src/contents/postsTyped'
import postData from 'src/contents/postDataTyped'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'

export default function Page() {
  return (
    <Layout type="about">
      <Head>
        <title key="title">About - {SITE_TITLE}</title>
        <meta property="og:title" content="About" />
        <meta property="og:url" content={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />
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
      {posts.map(({ href }) => (
        <FeaturedPostLink
          key={href}
          href={href}
          title={postData[href]['title']}
          description={postData[href]['description'] || ''}
          date={postData[href]['date']}
        ></FeaturedPostLink>
      ))}
    </Layout>
  )
}

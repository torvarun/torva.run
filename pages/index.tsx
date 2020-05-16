import React from 'react'
import Layout from 'src/components/Layout'
import postGetStaticProps, { PostBaseProps } from 'src/lib/postGetStaticProps'
import FeaturedPostLink from 'src/components/FeaturedPostLink'
import posts from 'src/contents/postsTyped'
import postData from 'src/contents/postDataTyped'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'

export const getStaticProps = postGetStaticProps(Page)

export default function Page({ emojiToSvg }: PostBaseProps) {
  return (
    <Layout type="home" emojiToSvg={emojiToSvg}>
      <Head>
        <title key="title">{SITE_TITLE}</title>
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:url" content={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/og.png`} />
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

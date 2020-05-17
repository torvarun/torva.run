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
      </Head>
      <section className="leading-relaxed">
        <div className="my-16">
          <img
            src="/images/chibicode.jpg"
            alt="Shu Uesugi"
            className="rounded-full w-56 block mx-auto shadow-soft"
          />
        </div>
        <h1>
          <PostTitle>Shu Uesugi</PostTitle>
        </h1>
        <Ul>
          <Li>
            Product Engineer at <A href="https://vercel.com">Vercel</A>.
          </Li>
          <Li>
            Co-translator (EN → JP) for{' '}
            <A href="https://www.amazon.com/Factfulness-Reasons-World-Things-Better/dp/1250107814">
              “Factfulness”
            </A>{' '}
            by Hans Rosling, et al.
          </Li>
          <Li>
            Ex-lead engineer at <A href="https://www.edsurge.com/">EdSurge</A>.
          </Li>
          <Li>
            Featured work:{' '}
            <A href="https://ycombinator.chibicode.com">
              Y Combinator for Non-programmers
            </A>
            .
          </Li>
        </Ul>
        <H3>Links</H3>
        <Ul>
          <Li>
            <strong>Email:</strong>{' '}
            <A href="mailto:shu@chibicode.com">shu@chibicode.com</A>
          </Li>
          <Li>
            <strong>Twitter:</strong>{' '}
            <A href="https://twitter.com/chibicode">@chibicode</A>
          </Li>
          <Li>
            <strong>GitHub:</strong>{' '}
            <A href="https://github.com/chibicode">@chibicode</A>
          </Li>
          <Li>
            <strong>LinkedIn:</strong>{' '}
            <A href="https://linkedin.com/in/chibicode">Shu Uesugi</A>
          </Li>
          <Li>
            <strong>Japanese Website:</strong>{' '}
            <A href="https://jp.chibicode.com">jp.chibicode.com</A>
          </Li>
        </Ul>
        <H3>Colophon</H3>
        <Ul>
          <Li>
            <E>👞</E> <E>🥃</E> means “Shoe” (Shu) and “Whiskey” (Uesugi).
          </Li>
          <Li>
            This site is built with <A href="https://nextjs.org/">Next.js</A>{' '}
            and deployed to <A href="https://vercel.com/">Vercel</A>.
          </Li>
          <Li>
            This site uses{' '}
            <A href="https://github.com/twitter/twemoji">Twemoji</A> by Twitter
            (CC-BY 4.0).
          </Li>
          <Li>
            The source code is available on{' '}
            <A href="https://github.com/chibicode/cc">GitHub</A>.
          </Li>
          <Li>
            License for the posts: ©2020 Shusaku Uesugi. All Rights Reserved.
          </Li>
        </Ul>
      </section>
    </Layout>
  )
}

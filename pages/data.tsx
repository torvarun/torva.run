import React from 'react'
import Layout from 'src/components/Layout'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import { P, A, H3, Img } from 'src/components/Tags'
import GravityChart from 'src/components/d3/GravityChart'
import LeafsLines from 'src/components/d3/LeafsLines'

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
        <div id="sports">
          <H3 smallBottomMargin>Sports</H3>
          <div id="shot_chart">
            <P>Developed for a <A href="www.thereckoner.ca/demar-derozan-underrated-never-overlooked/">Reckoner article</A>, the first visualization is a shot chart of DeMar DeRozan from halfway through the 2016-17 NBA season. It was created with R (ggplot2), using data scraped (using the Python library BeautifulSoup) from the NBA Stats website. Shot location charts us to see where an offensive player takes (and makes) most of their shots; with this visualization, it's easy to see how proficient DeRozan is at the midrange shot, a rarity in today's NBA. Furthermore, the single-coordinate rug plots allows us to see that he is most successful at creating shots along the baseline.
            </P>
            <Img
              src="/images/derozan_shot_chart.png"
              alt="DeMar DeRozan shot chart"
            />
          </div>
          <div id="gravity">
            <P>This scatter plot created using D3.js shows the change in regular-season performace with/without Steph Curry for players on the 2017-18 Golden State Warriors. The was created to showcase <A href="https://thereckoner.ca/the-gravity-score/">Curry's 'gravity'</A>, his ability to create space (and therefore more favourable scoring chances) for teammates when on the floor.</P>
            <P><A href="https://thereckoner.ca/the-gravity-score/">Featured Article</A></P>
            <GravityChart width={600}/>
          </div>
          <div id="force">
            <P>The following force graph shows the common line pairings between Toronto Maple Leafs forwards during rhe first two months of the 2016-17 season. The size of the cirlce is proportional to a player's average time on ice, while the thickness of the lines is indicative of the lines represents the average time on ice a pair of players spend on the ice together. Colours represent the most common line pairings. It was developed using D3.js with data from Daily Faceoff.</P>
            <LeafsLines width={800}/>
          </div>
          <div id="rpm">
            <P>The following chart was created using R (ggplot2) and displays the real plus-minus (RPM) broken down by offensive (OPM) and defensive plus-minus (DPM) of players comparable to the Raptors' Serge Ibaka. It was developed for an article in <A href="https://www.thereckoner.ca/serge-ibaka-missing-in-action/">The Reckoner of MGCI.</A></P>
            <Img
              src="/images/rpm-chart.svg"
              alt="RPM bar chart"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

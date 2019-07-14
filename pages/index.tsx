import React from 'react'
import Page from 'src/components/Page'
import DefaultLayout from 'src/components/DefaultLayout'
import About from 'src/contents/About.mdx'
import MDXWrapper from 'src/components/MDXWrapper'

export default function Index() {
  return (
    <Page>
      <DefaultLayout>
        <MDXWrapper>
          <About />
        </MDXWrapper>
      </DefaultLayout>
    </Page>
  )
}

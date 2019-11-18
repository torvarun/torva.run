import React from 'react'
import Page from 'src/components/Page'
import DefaultLayout from 'src/components/DefaultLayout'
import Index from 'src/contents/Index.mdx'
import MDXWrapper from 'src/components/MDXWrapper'

export default function IndexPage() {
  return (
    <Page>
      <DefaultLayout>
        <MDXWrapper>
          <Index />
        </MDXWrapper>
      </DefaultLayout>
    </Page>
  )
}

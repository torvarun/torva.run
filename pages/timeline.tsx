import React from 'react'
import Page from 'src/components/Page'
import DefaultLayout from 'src/components/DefaultLayout'
import Timeline from 'src/contents/TimelinePage.mdx'
import MDXWrapper from 'src/components/MDXWrapper'

export default function TimelinePage() {
  return (
    <Page>
      <DefaultLayout>
        <MDXWrapper>
          <Timeline />
        </MDXWrapper>
      </DefaultLayout>
    </Page>
  )
}

import React from 'react'
import Page from 'src/components/Page'
import DefaultLayout from 'src/components/DefaultLayout'
import MDXWrapper from 'src/components/MDXWrapper'
import NotFound from 'src/contents/NotFound.mdx'

export default function Error() {
  return (
    <Page>
      <DefaultLayout title="Page Not Found">
        <MDXWrapper>
          <NotFound />
        </MDXWrapper>
      </DefaultLayout>
    </Page>
  )
}

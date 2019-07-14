declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

declare module '@mdx-js/react' {
  // React must be imported here - if you have import outside it will fail:
  // https://stackoverflow.com/a/42702089/114157
  import React, { ComponentType, StyleHTMLAttributes } from 'react'
  interface MDXProps {
    children: React.ReactNode
    components: { [t: string]: React.ReactNode }
  }
  export class MDXProvider extends React.Component<MDXProps> {}
}

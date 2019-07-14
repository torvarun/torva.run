import App from 'next/app'
import Router from 'next/router'
import { pageview } from 'src/lib/gtag'
import reloadTwitterScript from 'src/lib/reloadTwitterScript'

Router.events.on('routeChangeStart', () => {
  reloadTwitterScript()
})

Router.events.on('routeChangeComplete', (path: string) => {
  pageview(path)
})

export default App

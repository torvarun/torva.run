const { createWriteStream } = require('fs')
const { SitemapStream } = require('sitemap')
const posts = require('../src/contents/posts.json')

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://chibicode.com' })

const writeStream = createWriteStream('./public/sitemap.xml')
sitemap.pipe(writeStream)
posts
  .filter(({ href }) => href.startsWith('/'))
  .forEach(({ href }) => {
    sitemap.write(href)
  })

sitemap.end()

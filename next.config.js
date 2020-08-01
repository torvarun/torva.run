module.exports = {
  async redirects() {
    return [
      // Linked from https://www.kalzumeus.com/2014/11/07/doing-business-in-japan/
      {
        source: '/doing-business-in-japan{/}?',
        permanent: true,
        destination: 'https://jp.chibicode.com/doing-business-in-japan',
      },
    ]
  },
}

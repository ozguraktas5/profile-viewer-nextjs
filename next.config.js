const nextConfig = {
  async redirects() {
    return [
      {
        source: '/user/:slug', 
        destination: '/user/[slug]', 
        permanent: true, 
      },
    ]
  },
}

module.exports = nextConfig;

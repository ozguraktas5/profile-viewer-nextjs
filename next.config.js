module.exports = {
  async redirects() {
    return [
      {
        source: '/user/:slug', 
        destination: '/user/[slug]', 
        permanent: true, 
      },
    ];
  },
};

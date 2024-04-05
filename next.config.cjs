module.exports = {
  async redirects() {
    return [
      
      {
        source: "/user",
        destination: "/",
        permanent: true,
      },
      
      {
        source: "/user/john-doe",
        destination: "/user/john-doe",
        permanent: true,
      },
    ];
  },
};

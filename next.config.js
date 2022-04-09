/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bets/create',
        permanent: true,
      },
      {
        source: '/bets/create',
        destination: '/bets/closed',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

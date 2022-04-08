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
    ]
  },
}

module.exports = nextConfig

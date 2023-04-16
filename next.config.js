/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.deschide.local']
  },
  reactStrictMode: true,
  i18n: {
    locales: ['ro', 'ru', 'en'],
    defaultLocale: 'ro'
  },
  trailingSlash: true,
}

module.exports = nextConfig

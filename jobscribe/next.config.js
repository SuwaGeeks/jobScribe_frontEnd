/** @type {import('next').nextConfig} */
const withPWA = require("next-pwa")({
  dest: 'public'
})
const nextConfig = withPWA({
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true,
})

module.exports = nextConfig

/** @type {import('next').nextConfig} */
const withPWA = require("next-pwa")({
  dest: 'public'
})
const nextConfig = withPWA({
  reactStrictMode: true,
})

module.exports = nextConfig

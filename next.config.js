/** @type {import('next').NextConfig} */

module.exports = {
  output: 'standalone',
  experimental: {
    images: {
      allowFutureImage: true,
    }
  }
}
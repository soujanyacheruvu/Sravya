/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = withContentlayer({ ...nextConfig });

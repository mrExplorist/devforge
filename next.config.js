/** @type {import('next').NextConfig} */

// Next Contentlayer Setup

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
          },
          {
            protocol: 'https',
            hostname: 'api.producthunt.com',
          },
        ],
      },
};

module.exports = withContentlayer({ ...nextConfig });

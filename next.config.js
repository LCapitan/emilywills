/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  // target: 'experimental-serverless-trace',
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "https://res.cloudinary.com",
      "via.placeholder.com",
    ],
  },
};

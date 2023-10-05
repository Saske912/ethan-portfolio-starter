/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    const path = require('path');

    // Добавьте алиас для корневой директории
    config.resolve.alias['@'] = path.join(__dirname);

    // Можете также добавить другие алиасы по вашему усмотрению
    // config.resolve.alias['components'] = path.join(__dirname, 'components');

    return config;
  },
}

module.exports = nextConfig

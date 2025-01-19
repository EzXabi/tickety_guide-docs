/** @type {import('next').NextConfig} */
import nextra from "nextra";

const withNextra = nextra({
  /*theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',*/
});

export default withNextra({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/embed/avatars/*',
      },
    ],
  },
});
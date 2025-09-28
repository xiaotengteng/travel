/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "assets.bucketlistly.blog",
      "cdn.educba.com",
      "fullsuitcase.com",
      "www.lszyxy.edu.cn",
      "wildlandtrekking.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.bucketlistly.blog",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.educba.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fullsuitcase.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.lszyxy.edu.cn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wildlandtrekking.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

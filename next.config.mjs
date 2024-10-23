/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.hizliresim.com",
      },
    ],
  },
};

export default nextConfig;

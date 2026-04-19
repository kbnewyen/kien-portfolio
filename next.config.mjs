/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/ecapital-checkout",
        destination: "/work/checkout",
        permanent: true,
      },
      {
        source: "/payments",
        destination: "/work/payments",
        permanent: true,
      },
      {
        source: "/mitchell",
        destination: "/work/mitchell",
        permanent: true,
      },
    ]
  },
}

export default nextConfig

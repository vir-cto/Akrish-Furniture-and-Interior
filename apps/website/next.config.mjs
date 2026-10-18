// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "plus.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "firebasestorage.googleapis.com",
//       },
//     ],
//   },

//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "plus.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "firebasestorage.googleapis.com",
//       },
//     ],
//   },

//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },

//   async rewrites() {
//     return [
//       {
//         source: "/erp",
//         destination: "http://localhost:3001/erp",
//       },
//       {
//         source: "/erp/:path*",
//         destination: "http://localhost:3001/erp/:path*",
//       },
//     ];
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

  async rewrites() {
    return [
      {
        source: "/erp",
        destination: "http://localhost:3001/erp",
      },
      {
        source: "/erp/:path*",
        destination: "http://localhost:3001/erp/:path*",
      },
    ];
  },
};

export default nextConfig;

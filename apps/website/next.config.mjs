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

// Local: ERP on 3001 | Production: full URL of the ERP deployment
const ERP_ORIGIN =
  process.env.ERP_INTERNAL_URL || "http://localhost:3001";

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "akrish-collective-erp.firebasestorage.app" },
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
        destination: `${ERP_ORIGIN}/erp`,
      },
      {
        source: "/erp/:path*",
        destination: `${ERP_ORIGIN}/erp/:path*`,
      },
    ];
  },
};

export default nextConfig;

// next.config.mjs

export default {
  reactStrictMode: true,
  // No need for custom webpack configuration related to babel-loader
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.mjs
// import { defineConfig } from "next/config"; // ESM import

// export default {
//   reactStrictMode: true,
//   webpack(config, { isServer }) {
//     if (!isServer) {
//       config.module.rules.push({
//         test: /\.js$/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["next/babel"],
//           },
//         },
//       });
//     }
//     return config;
//   },
// };

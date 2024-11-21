// next.config.mjs

import transpileModules from 'next-transpile-modules';

const withTM = transpileModules([
  'antd',
  '@ant-design/icons',
  'rc-util',
  'rc-pagination',
  'rc-picker',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withTM(nextConfig);


// export default {
//   reactStrictMode: true,
//   // No need for custom webpack configuration related to babel-loader
// };

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

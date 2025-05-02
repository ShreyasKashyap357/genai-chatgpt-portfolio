/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio-certificates" : "",
  assetPrefix: isProd ? "/portfolio-certificates/" : "",
};

export default nextConfig;
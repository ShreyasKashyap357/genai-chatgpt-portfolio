/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/genai-chatgpt-portfolio" : "",
  assetPrefix: isProd ? "/genai-chatgpt-portfolio/" : "",
};

export default nextConfig;
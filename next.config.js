/** @type {import('next').NextConfig} */

const result = require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: result.parsed,
};

module.exports = nextConfig;

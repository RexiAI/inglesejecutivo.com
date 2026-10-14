import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Standalone output keeps the production Docker image minimal (see Dockerfile).
  output: 'standalone',
  // Pin tracing to this repo: a stray lockfile in a parent directory would
  // otherwise make Next infer the wrong workspace root (breaks standalone).
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;

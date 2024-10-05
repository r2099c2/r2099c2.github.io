/** @type {import('next').NextConfig} */

// next.config.js 配置：
// 允许 nextJs 识别 mdx 并作为组件处理
import nextMdx from '@next/mdx';

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    /* otherOptions… */
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
  output: 'export',
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
});

export default nextConfig;

// 允许 nextJs 识别 mdx 并作为组件处理
import nextMdx from '@next/mdx';

const withMdx = nextMdx({
  options: {
    /* otherOptions… */
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  output: 'export',
});

export default nextConfig;

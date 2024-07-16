// 允许 nextJs 识别 mdx 并作为组件处理
const withMdx = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMdx(nextConfig);

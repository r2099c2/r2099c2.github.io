import MDXComponents from '@/components/MDXComponent';
import { getPosts } from '@/utils/tools';
import { MDXRemote } from 'next-mdx-remote/rsc';

const PostDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const { posts } = await getPosts();

  const post = posts.find((post) => post.data.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-row w-full pt-12">
        <div className="w-full md:w-3/5 px-6">
          <div>未找到文章</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-12 bg-sky-900">
      {/* 左侧文章切换 */}
      <div className="hidden md:block">
        {posts.map((post) => (
          <a key={post.slug} className="text-sm" href={`/post/${post.slug}`}>
            {post.title} - {post.month}
          </a>
        ))}
      </div>
      {/* 中间当前文章 */}
      <div className="mx-auto w-full md:w-4/5 lg:w-3/5 px-6">
        <article id="article">
          <h1>{post.data.title}</h1>
          <MDXRemote source={post.content} components={MDXComponents} />
        </article>
      </div>
      {/* 右侧文章目录 */}
    </div>
  );
};

/**
 * Generate static paths for the post detail page.
 * https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export const generateStaticParams = async () => {
  const { posts } = await getPosts();

  return posts.map((post) => ({
    slug: post.data.slug,
  }));
};

export default PostDetail;

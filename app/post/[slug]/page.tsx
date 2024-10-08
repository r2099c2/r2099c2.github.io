import MDXComponents from '@/components/MDXComponent';
import { getPosts } from '@/utils/tools';
import clsx from 'clsx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const { posts } = await getPosts();

  const post = posts.find((post) => post.data.slug === slug);

  return {
    title: post?.data.title,
    description: post?.data.description,
  };
}

const PostDetail = async ({ params }: Props) => {
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
    <div className="max-w-screen min-h-screen max-auto pt-12 px-4 sm:px-6 md:px-8">
      {/* 左侧文章切换 */}
      <ul className="hidden lg:block w-[12rem] xl:w-[18rem] fixed space-y-6 lg:space-y-2 border-l border-slate-400">
        {posts.map((post) => (
          <li key={post.slug}>
            <a
              className={clsx('text-sm block pl-3 -ml-px', {
                'border-l border-current font-semibold': post.slug === slug,
              })}
              href={`/post/${post.slug}`}
            >
              {post.title} - {post.month}
            </a>
          </li>
        ))}
      </ul>
      {/* 中间当前文章 */}
      <div className="lg:pl-[12rem] xl:pl-[18rem] 2xl:pl-0">
        <article
          id="article"
          className="px-4 max-w-4xl mx-auto overflow-hidden"
        >
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

import { getPosts } from '@/lib/helper';
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
    <div className="flex flex-row w-full pt-12">
      <div className="w-full md:w-3/5 px-6">
        <article id="article">
          <h1>{post.data.title}</h1>
          <MDXRemote source={post.content} />
        </article>
      </div>
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

import { getPosts } from '@/utils/tools';

export default async function Home() {
  const { posts } = await getPosts();
  console.log('🚀 ~ Home ~ posts:', posts);

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {/* 列表 */}
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/post/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

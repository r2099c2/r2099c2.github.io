import { getPosts } from '@/utils/tools';

export default async function Home() {
  const { posts } = await getPosts();
  console.log('🚀 ~ Home ~ posts:', posts);

  return (
    <main>
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

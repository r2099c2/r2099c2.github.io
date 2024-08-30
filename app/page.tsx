import { getPosts } from '@/utils/tools';

export default async function Home() {
  const posts = await getPosts();
  console.log('🚀 ~ Home ~ posts:', posts);

  return (
    <main>
      {/* 列表 */}
      <ul>
        <li>
          <a href="/posts/hello-world">Hello, World!</a>
        </li>
        <li>
          <a href="/posts/another-post">Another Post</a>
        </li>
      </ul>
    </main>
  );
}

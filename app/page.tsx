import { getPosts } from '@/utils/tools';

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div className="w-screen h-screen bg-sky-900">
      <main className="mx-auto pt-10 px-5">
        {/* 列表 */}
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <a
                className="hover:bg-slate-400/30 p-5 rounded-xl"
                href={`/post/${post.slug}`}
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

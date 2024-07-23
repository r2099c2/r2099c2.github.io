import { getPost } from '@/lib/helper';

export default async function Home() {
  const { posts, postsByMonth } = await getPost();

  console.log(posts);

  return (
    <main className="flex flex-row w-full pt-12">
      <div className="hidden md:block md:w-1/5 pl-6"></div>
      <div className="w-full md:w-3/5 px-6"></div>
    </main>
  );
}

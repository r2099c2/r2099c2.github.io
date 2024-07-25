import { getPosts } from '@/lib/helper';
import NavList from './components/NavList';
import TimeLine from './components/TimeLine';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '播客首页',
};

export default async function Home() {
  const { posts, postsByMonth } = await getPosts();

  return (
    <>
      <main className="flex flex-row w-full pt-12">
        <div className="hidden md:block md:w-1/5 pl-6"></div>
        <div className="w-full md:w-3/5 px-6">
          <NavList posts={posts} />
        </div>
        <div className="hidden md:flex justify-end md:w-1/5 pr-6 text-right">
          <TimeLine postsByMonth={postsByMonth} />
        </div>
      </main>
    </>
  );
}

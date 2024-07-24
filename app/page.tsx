import { getPost } from '@/lib/helper';
import NavList from './components/NavList';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '播客首页',
};

export default async function Home() {
  const { posts, postsByMonth } = await getPost();

  return (
    <>
      <main className="flex flex-row w-full pt-12">
        <div className="hidden md:block md:w-1/5 pl-6"></div>
        <div className="w-full md:w-3/5 px-6">
          <NavList posts={posts} />
        </div>
      </main>
    </>
  );
}

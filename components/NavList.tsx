import { Post } from '@/types/post';
import dayjs from 'dayjs';
import Link from 'next/link';

const NavList = async ({ posts }: { posts: Post[] }) => (
  <ul className="flex flex-col gap-4">
    {posts.map((post) => (
      <li
        key={post.data.slug}
        id={post.filePath}
        className="flex flex-col sm:flex-row gap-4 items-start"
      >
        <span className="text-[#8585a8] min-w-28">
          {dayjs(post.data.date).format('YYYY-MM-DD')}
        </span>
        <Link
          href={`/post/${post.data.slug}`}
          className="link-default truncate transition-colors duration-500 ease-in-out"
        >
          {post.data.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default NavList;

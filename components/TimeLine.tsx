import { PostByMonth } from '@/types/post';
import Link from 'next/link';

const TimeLine = async ({ postsByMonth }: { postsByMonth: PostByMonth }) => (
  <div>
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">
        <Link href="/">时间线</Link>
      </h4>
      {Object.keys(postsByMonth).map((month) => (
        <div key={month}>
          <Link href={`#${month}`}>{month}</Link>
          <div className="border-b border-gray-300 my-2"></div>
        </div>
      ))}
    </div>
  </div>
);

export default TimeLine;

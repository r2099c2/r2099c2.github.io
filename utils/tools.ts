import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import { Post, PostByMonth } from '@/types/post';

/**
 * 从 content 目录获取所有文章，并组合数据
 */
export const getPosts = async () => {
  const postDirectory = path.join(process.cwd(), 'posts');
  const filenames = (await fs.promises.readdir(postDirectory)).reverse();

  const posts: Post[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postDirectory, filename);
      const fileContent = await fs.promises.readFile(filePath, 'utf8');

      const { data, content } = matter(fileContent);

      const month = dayjs(data.date).format('YYYY-MM-DD').slice(0, 7);

      return {
        month,
        filePath,
        data,
        content,
      };
    })
  );

  const postsByMonth = posts.reduce((acc: PostByMonth, post: Post) => {
    const month = dayjs(post.data.date).format('YYYY-MM-DD').slice(0, 7);
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(post);
    return acc;
  }, {});

  return {
    posts,
    postsByMonth,
  };
};

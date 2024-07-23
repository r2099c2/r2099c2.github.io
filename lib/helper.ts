import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import dayjs from 'dayjs';

export const getPost = async () => {
  const postDirectory = path.join(process.cwd(), 'content');
  const filenames = (await fs.promises.readdir(postDirectory)).reverse();

  const posts = await Promise.all(
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

  const postsByMonth = posts.reduce((acc, post) => {
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

/**
 * 帖子类型
 */
export interface Post {
  month: string;
  filePath: string;
  data: {
    [key: string]: string;
  };
  content: string;
}

/**
 * 按月份分组的帖子
 */
export interface PostByMonth {
  [key: string]: Post[];
}

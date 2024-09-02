/**
 * 帖子类型
 */
export interface Post {
  /** 名称 */
  title: string;
  /** 月份 */
  month: string;
  /** 最后更新时间 */
  lastUpdated?: string;
  /** 发帖时间 */
  postDate: string;
  /** slug */
  slug: string;
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

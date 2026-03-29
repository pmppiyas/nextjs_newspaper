export interface ICategory {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface INews {
  news: INews;
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  publishedAt: string;
  updatedAt: string;
  viewCount: number;
  authorId: string;
  categoryId: string;
  category: ICategory;
  tags?: string[];
}

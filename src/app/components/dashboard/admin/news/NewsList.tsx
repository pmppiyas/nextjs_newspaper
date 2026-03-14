import NewsCard from '@/app/components/dashboard/admin/news/NewsCard';
import Pagination from '@/app/components/shared/Pagination';
import { INews } from '@/interfaces/news.Interface';
import getAllNews from '@/services/news/get.allNews';

interface NewsListProps {
  params: Record<string, string | undefined>;
}

const NewsListWrapper = async ({ params }: NewsListProps) => {
  const result = await getAllNews(params);

  const { news: allNews = [], meta } = result || {};
  const { total, limit } = meta;

  return (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        {allNews.map((news: INews) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      <Pagination total={total} limit={limit} />
    </div>
  );
};

export default NewsListWrapper;

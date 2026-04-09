import NewsCard from '@/app/components/dashboard/admin/allNews/NewsCard';
import Empty from '@/app/components/shared/Empty';
import { INews } from '@/interfaces/news.Interface';
import { myNews } from '@/services/news/get.myNews';

const MyArticlesWrapper = async () => {
  const { allNews, count } = await myNews();

  return (
    <div>
      <div className="flex flex-col gap-4">
        {count === 0 && <Empty />}
        {allNews.map((news: INews) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default MyArticlesWrapper;

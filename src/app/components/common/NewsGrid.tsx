import Empty from '@/app/components/shared/Empty';
import NewsCard from './NewsCard';
import { INews } from '@/interfaces/news.Interface';

interface NewsGridProps {
  newsList: INews[];
}

const NewsGrid = ({ newsList }: NewsGridProps) => {
  if (newsList.length === 0) {
    return <Empty />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {newsList.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsGrid;

import { INews } from '@/interfaces/news.Interface';
import NewsGrid from '@/app/components/common/NewsGrid';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/app/components/shared/Header';

interface IProps {
  title: string;
  news: INews[];
  categoryId: string;
}

const CategorySection = ({ title, news, categoryId }: IProps) => {
  const filteredNews = news
    .filter((item) => item.categoryId === categoryId)
    .slice(0, 10);

  if (filteredNews.length === 0) return null;

  return (
    <div className="my-10 w-full  flex flex-col  justify-center">
      <Header title={title} />

      <NewsGrid newsList={filteredNews} />

      <div className=" flex item-center justify-center mt-10">
        <Link
          href={`/${title}`}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline  "
        >
          আরও দেখুন <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;

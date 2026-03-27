import { getAllCategories } from '@/services/category/get.allCategory';
import NotFoundPage from '@/app/components/shared/NotFound';
import getAllNews from '@/services/news/get.allNews';
import NewsGrid from '@/app/components/common/NewsGrid';
import { INews } from '@/interfaces/news.Interface';

export default async function CategoryContent({
  categoryName,
}: {
  categoryName: string;
}) {
  const { data: categories } = await getAllCategories();

  const category = categories.find(
    (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  if (!category) return <NotFoundPage />;

  const { news }: { news: INews[] } = await getAllNews();

  const filteredNews = news.filter((item) => item.categoryId === category.id);

  return (
    <div className="mt-8  px-4 md:px-8 lg:px-12 ">
      <NewsGrid newsList={filteredNews} />
    </div>
  );
}

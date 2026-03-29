import { getAllCategories } from '@/services/category/get.allCategory';
import NotFoundPage from '@/app/components/shared/NotFound';
import getAllNews from '@/services/news/get.allNews';
import NewsGrid from '@/app/components/common/NewsGrid';
import { ICategory, INews } from '@/interfaces/news.Interface';

export default async function CategoryContent({
  categoryName,
}: {
  categoryName: string;
}) {
  const { categories }: { categories: ICategory[] } = await getAllCategories();

  const category = categories.find(
    (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  if (!category) return <NotFoundPage />;

  const { news }: { news: INews[] } = await getAllNews();

  const filteredNews = news.filter((item) => item.categoryId === category.id);

  return (
    <div className="mt-8   ">
      <NewsGrid newsList={filteredNews} />
    </div>
  );
}

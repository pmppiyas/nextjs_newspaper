import CategorySection from '@/app/components/common/[category]/CategorySection';
import { ICategory, INews } from '@/interfaces/news.Interface';

const CommonPageContent = ({
  categories,
  news,
}: {
  categories: ICategory[];
  news: INews[];
}) => {
  return (
    <div>
      <div>
        {categories.map((category: ICategory) => (
          <CategorySection
            key={category.id}
            title={category.name}
            categoryId={category.id}
            news={news}
          />
        ))}
      </div>
    </div>
  );
};

export default CommonPageContent;

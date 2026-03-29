import CommonPageContent from '@/app/components/common/CommonPageContent';
import { getAllCategories } from '@/services/category/get.allCategory';
import getAllNews from '@/services/news/get.allNews';

const CommonPageWrapper = async () => {
  const { categories } = await getAllCategories();
  const { news } = await getAllNews();

  return (
    <div>
      <CommonPageContent categories={categories} news={news} />
    </div>
  );
};

export default CommonPageWrapper;

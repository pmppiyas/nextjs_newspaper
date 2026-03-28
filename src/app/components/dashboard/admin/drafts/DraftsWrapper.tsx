import NewsForm from '@/app/components/dashboard/admin/drafts/NewsForm';
import { getAllCategories } from '@/services/category/get.allCategory';

const DraftsWrapper = async () => {
  const { categories } = await getAllCategories();

  return (
    <>
      <NewsForm categories={categories} />
    </>
  );
};

export default DraftsWrapper;

import NewsForm from '@/app/components/dashboard/admin/drafts/NewsForm';
import { getAllCategories } from '@/services/category/get.allCategory';

const DraftsWrapper = async () => {
  const { data } = await getAllCategories();

  return (
    <>
      <NewsForm categories={data} />
    </>
  );
};

export default DraftsWrapper;

import CategoryList from '@/app/components/dashboard/admin/category/CategoryList';
import { getAllCategories } from '@/services/category/get.allCategory';

const CategoryWrapper = async () => {
  const { data } = await getAllCategories();

  return (
    <div>
      <CategoryList categories={data} />
    </div>
  );
};

export default CategoryWrapper;

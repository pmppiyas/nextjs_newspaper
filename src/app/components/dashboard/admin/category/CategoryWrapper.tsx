import CategoryList from '@/app/components/dashboard/admin/category/CategoryList';
import { getAllCategories } from '@/services/category/get.allCategory';

const CategoryWrapper = async () => {
  const { categories } = await getAllCategories();

  return <CategoryList categories={categories} />;
};

export default CategoryWrapper;

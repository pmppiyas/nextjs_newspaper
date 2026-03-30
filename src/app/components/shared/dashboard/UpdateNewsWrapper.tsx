import UpdateNewsForm from '@/app/components/shared/dashboard/UpdateNewsForm';
import NotFound from '@/app/components/shared/NotFound';
import { getMe } from '@/services/auth/getMe';
import { getAllCategories } from '@/services/category/get.allCategory';
import { getNewsById } from '@/services/news/get.ById';

const UpdateNewsWrapper = async ({ newsId }: { newsId: string }) => {
  const { news } = await getNewsById(newsId);

  if (!news.id) {
    return <NotFound />;
  }
  const { categories } = await getAllCategories();
  const userInfo = await getMe();

  return (
    <UpdateNewsForm news={news} categories={categories} role={userInfo?.role} />
  );
};

export default UpdateNewsWrapper;

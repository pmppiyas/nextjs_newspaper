import { Suspense } from 'react';
import NewsCardSkeleton from '@/app/components/shared/news/NewsCardSeletonX';
import NewsListWrapper from '@/app/components/dashboard/admin/allNews/NewsListWrapper';

type TSearchParams = Promise<Record<string, string | undefined>>;

const ArticlesPage = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const params = await searchParams;

  return (
    <div className="lg:p-6">
      <Suspense fallback={<NewsCardSkeleton />}>
        <NewsListWrapper params={params} />
      </Suspense>
    </div>
  );
};

export default ArticlesPage;

import UpdateNewsWrapper from '@/app/components/shared/dashboard/UpdateNewsWrapper';
import HeaderSkeleton from '@/app/components/shared/skeleton/HeaderSkeleton';
import UpdateNewsSkeleton from '@/app/components/shared/skeleton/UpdateNewsSkeleton';
import { Suspense } from 'react';

interface IProps {
  params: Promise<{ newsId: string }>;
}

const page = async ({ params }: IProps) => {
  const { newsId } = await params;

  return (
    <Suspense
      fallback={
        <>
          <HeaderSkeleton />
          <UpdateNewsSkeleton />
        </>
      }
    >
      <UpdateNewsWrapper newsId={newsId} />
    </Suspense>
  );
};

export default page;

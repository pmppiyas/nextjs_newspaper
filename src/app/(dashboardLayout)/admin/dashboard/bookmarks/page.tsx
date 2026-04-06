import BookmarkHeader from '@/app/components/dashboard/reader/bookmarks/BookmarkHeader';
import BookmarksWrapper from '@/app/components/dashboard/reader/bookmarks/BookmarksWrapper';
import SquareNewsCardSkeleton from '@/app/components/shared/skeleton/SquareNewsCardSkeleton';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <BookmarkHeader />
      <Suspense fallback={<SquareNewsCardSkeleton />}>
        <BookmarksWrapper />
      </Suspense>
    </div>
  );
};

export default page;

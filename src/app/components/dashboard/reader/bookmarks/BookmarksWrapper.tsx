import NewsGrid from '@/app/components/common/NewsGrid';
import { getMyBookmarks } from '@/services/bookmarks/getMyBookmarks';

const BookmarksWrapper = async () => {
  const { bookmarks } = await getMyBookmarks();

  return (
    <div>
      <NewsGrid newsList={bookmarks} />
    </div>
  );
};

export default BookmarksWrapper;

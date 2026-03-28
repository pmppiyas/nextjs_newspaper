import { StatsCard } from '@/app/components/shared/dashboard/StatsCard';
import { IReaderStats } from '@/interfaces/dashboard.interface';
import { BookOpen, Bookmark, MessageSquare, History } from 'lucide-react';

const ReaderDashboardStats = ({ stats }: { stats: IReaderStats }) => {
  const { readNews, bookmarks, comments } = stats;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard
        label="পঠিত সংবাদ"
        value={readNews}
        icon={<BookOpen className="w-5 h-5" />}
        color="text-blue-600 bg-blue-100"
      />
      <StatsCard
        label="বুকমার্ক করা"
        value={bookmarks}
        icon={<Bookmark className="w-5 h-5" />}
        color="text-amber-600 bg-amber-100"
      />
      <StatsCard
        label="মোট মন্তব্য"
        value={comments}
        icon={<MessageSquare className="w-5 h-5" />}
        color="text-emerald-600 bg-emerald-100"
      />
      {/* <StatsCard
        label="পড়ার সময় (ঘণ্টা)"
        value={readingHours || 0}
        icon={<History className="w-5 h-5" />}
        color="text-indigo-600 bg-indigo-100"
      /> */}
    </div>
  );
};

export default ReaderDashboardStats;

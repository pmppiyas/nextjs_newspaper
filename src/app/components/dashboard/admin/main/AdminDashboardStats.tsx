import { StatsCard } from '@/app/components/shared/dashboard/StatsCard';
import { IAdminStats } from '@/interfaces/dashboard.interface';
import { Clock, Eye, Newspaper, Users } from 'lucide-react';

const AdminDashboardStats = ({ data }: { data: IAdminStats }) => {
  const { news, reader, views, pendingJournalist } = data;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        label="মোট সংবাদ"
        value={news}
        icon={<Newspaper className="w-5 h-5" />}
        color="text-blue-600 bg-blue-100"
      />
      <StatsCard
        label="মোট পাঠক"
        value={reader}
        icon={<Users className="w-5 h-5" />}
        color="text-purple-600 bg-purple-100"
      />
      <StatsCard
        label="মোট ভিউ"
        value={views}
        icon={<Eye className="w-5 h-5" />}
        color="text-emerald-600 bg-emerald-100"
      />
      <StatsCard
        label="পেন্ডিং জার্নালিস্ট"
        value={pendingJournalist}
        icon={<Clock className="w-5 h-5" />}
        color="text-red-600 bg-red-100"
      />
    </div>
  );
};

export default AdminDashboardStats;

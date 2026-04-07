import { StatsCard } from '@/app/components/shared/dashboard/StatsCard';
import { IJournalistStats } from '@/interfaces/dashboard.interface';
import { FileText, Eye, CheckCircle, Clock, XCircle } from 'lucide-react';

const JournalistDashboardStats = ({ stats }: { stats: IJournalistStats }) => {
  const { total, approve, pending, reject, views } = stats;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        label="মোট নিউজ"
        value={total}
        icon={<FileText className="w-5 h-5" />}
        color="text-blue-600 bg-blue-100"
      />

      <StatsCard
        label="পাবলিশ হয়েছে"
        value={approve}
        icon={<CheckCircle className="w-5 h-5" />}
        color="text-emerald-600 bg-emerald-100"
      />

      <StatsCard
        label="অপেক্ষমান"
        value={pending}
        icon={<Clock className="w-5 h-5" />}
        color="text-amber-600 bg-amber-100"
      />

      <StatsCard
        label="বাতিল (Rejected)"
        value={reject}
        icon={<XCircle className="w-5 h-5" />}
        color="text-red-600 bg-red-100"
      />

      <StatsCard
        label="মোট ভিউ"
        value={views}
        icon={<Eye className="w-5 h-5" />}
        color="text-indigo-600 bg-indigo-100"
      />
    </div>
  );
};

export default JournalistDashboardStats;

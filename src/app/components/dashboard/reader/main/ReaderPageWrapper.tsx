import ReaderDashboardStats from '@/app/components/dashboard/reader/main/ReaderDashboardStats';
import { getReaderStats } from '@/services/meta/get.ReaderStats';

const ReaderPageWrapper = async () => {
  const stats = await getReaderStats();

  return (
    <div>
      <ReaderDashboardStats stats={stats} />
    </div>
  );
};

export default ReaderPageWrapper;

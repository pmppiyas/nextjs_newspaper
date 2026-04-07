import JournalistDashboardStats from '@/app/components/dashboard/journalist/main/JournalistDashboardStats';
import { getJournalistStats } from '@/services/meta/getJournalistStats';

const JournalistPageWrapper = async () => {
  const stats = await getJournalistStats();

  return (
    <div>
      <JournalistDashboardStats stats={stats} />
    </div>
  );
};

export default JournalistPageWrapper;

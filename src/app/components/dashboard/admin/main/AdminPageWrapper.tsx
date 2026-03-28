import AdminDashboardStats from '@/app/components/dashboard/admin/main/AdminDashboardStats';
import { getAdminStats } from '@/services/meta/get.AdminStats';

const AdminPageWrapper = async () => {
  const data = await getAdminStats();

  return (
    <div>
      <AdminDashboardStats data={data} />
    </div>
  );
};

export default AdminPageWrapper;

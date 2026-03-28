'use client';
import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { LayoutDashboard, Plus, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AdminPageHeader = () => {
  const router = useRouter();
  return (
    <ReusableHeader
      icon={<LayoutDashboard className="w-5 h-5" />}
      title="অ্যাডমিন ড্যাশবোর্ড"
      description="আপনার নিউজ পোর্টালের সার্বিক অবস্থা এবং সবশেষ আপডেট এখান থেকে পরিচালনা করুন"
      actions={[
        {
          label: 'নতুন সংবাদ',
          onClick: () => router.push('dashboard/drafts'),
          icon: <Plus className="w-4 h-4" />,
        },
        {
          label: 'রিপোর্ট দেখুন',
          variant: 'ghost',
          onClick: () => router.push('dashboard/stats'),
          icon: <FileText className="w-4 h-4" />,
        },
      ]}
    />
  );
};

export default AdminPageHeader;

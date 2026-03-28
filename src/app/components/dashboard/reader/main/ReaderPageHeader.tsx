'use client';
import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { Bookmark, History, UserCircle, LayoutDashboard } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ReaderPageHeader = () => {
  const router = useRouter();

  return (
    <ReusableHeader
      icon={<LayoutDashboard className="w-5 h-5" />}
      title="আমার ড্যাশবোর্ড"
      description="আপনার পছন্দের নিউজ এবং বুকমার্ক করা সংবাদগুলো এখানে পাবেন"
      actions={[
        {
          label: 'বুকমার্কস',
          variant: 'default',
          onClick: () => router.push('/dashboard/bookmarks'),
          icon: <Bookmark className="w-4 h-4" />,
        },
        {
          label: 'পড়ার ইতিহাস',
          variant: 'outline',
          onClick: () => router.push('/dashboard/history'),
          icon: <History className="w-4 h-4" />,
        },
        {
          label: 'প্রোফাইল',
          variant: 'ghost',
          onClick: () => router.push('/dashboard/profile'),
          icon: <UserCircle className="w-4 h-4" />,
        },
      ]}
    />
  );
};

export default ReaderPageHeader;

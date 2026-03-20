'use client';

import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { Newspaper, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NewsHeader = () => {
  const router = useRouter();

  return (
    <div>
      <ReusableHeader
        icon={<Newspaper className="w-5 h-5 " />}
        title="খবর ব্যবস্থাপনা"
        description="এখানে আপনি সব খবর তৈরি, সম্পাদনা এবং আপনার নিউজ পোর্টালের কন্টেন্ট পরিচালনা করতে পারবেন"
        actions={[
          {
            label: 'নতুন খবর',
            onClick: () => router.push('/admin/dashboard/drafts'),
            icon: <Plus className="w-4 h-4" />,
          },
        ]}
      />
    </div>
  );
};

export default NewsHeader;

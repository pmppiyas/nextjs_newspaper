'use client';

import CategoryDialog from '@/app/components/dashboard/admin/category/CategoryDialog';
import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CategoryHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div>
      <ReusableHeader
        icon={<Plus className="w-5 h-5" />}
        title="ক্যাটাগরি ম্যানেজমেন্ট"
        description="এখানে আপনি সব ক্যাটাগরি তৈরি, সম্পাদনা ও পরিচালনা করতে পারবেন"
        actions={[
          {
            label: 'নতুন ক্যাটাগরি',
            onClick: () => setIsDialogOpen(true),
            icon: <Plus className="w-4 h-4" />,
          },
        ]}
      />

      <CategoryDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={() => {
          setIsDialogOpen(false);
          handleRefresh();
        }}
      />
    </div>
  );
};

export default CategoryHeader;

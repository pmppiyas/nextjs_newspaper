'use client';

import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { Bookmark, Trash2, RotateCw } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BookmarkHeader = () => {
  const router = useRouter();

  return (
    <div className="mb-8">
      <ReusableHeader
        icon={<Bookmark className="w-5 h-5" />}
        title="আমার বুকমার্কস"
        description="আপনার সংরক্ষিত সংবাদগুলো এখানে খুঁজে পাবেন এবং পরিচালনা করতে পারবেন"
        actions={[
          {
            label: 'রিফ্রেশ করুন',
            onClick: () => router.refresh(),
            icon: <RotateCw className="w-4 h-4" />,
          },
          {
            label: 'সব মুছুন',
            onClick: () => {
              if (confirm('আপনি কি সব বুকমার্ক মুছে ফেলতে চান?')) {
              }
            },
            icon: <Trash2 className="w-4 h-4" />,
          },
        ]}
      />
    </div>
  );
};

export default BookmarkHeader;

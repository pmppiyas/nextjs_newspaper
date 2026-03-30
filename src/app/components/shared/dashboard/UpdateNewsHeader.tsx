'use client';

import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { Edit3, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const UpdateNewsHeader = ({ role }: { role: string }) => {
  const router = useRouter();

  return (
    <div>
      <ReusableHeader
        icon={<Edit3 className="w-5 h-5 " />}
        title="খবর আপডেট করুন"
        description="খবরের শিরোনাম, কন্টেন্ট, ক্যাটাগরি বা ট্যাগ পরিবর্তন করে আপডেট সম্পন্ন করুন"
        actions={[
          {
            label: 'তালিকায় ফিরুন',
            onClick: () =>
              router.push(`/${role.toLowerCase()}/dashboard/articles`),
            icon: <ArrowLeft className="w-4 h-4" />,
            variant: 'outline',
          },
        ]}
      />
    </div>
  );
};

export default UpdateNewsHeader;

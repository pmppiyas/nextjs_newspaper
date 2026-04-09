'use client';

import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { PlusCircle, Filter, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MyArticlesHeader = () => {
  const router = useRouter();

  return (
    <ReusableHeader
      icon={<FileText className="w-5 h-5" />}
      title="আমার সংবাদসমূহ"
      description="আপনার তৈরিকৃত সকল নিউজের তালিকা এবং সেগুলোর বর্তমান অবস্থা এখান থেকে দেখুন।"
      actions={[
        {
          label: 'নতুন নিউজ লিখুন',
          variant: 'default',
          onClick: () => router.push('/journalist/dashboard/create'),
          icon: <PlusCircle className="w-4 h-4" />,
        },
        {
          label: 'ফিল্টার করুন',
          variant: 'outline',
          onClick: () => {
            console.log('Filter clicked');
          },
          icon: <Filter className="w-4 h-4" />,
        },
      ]}
    />
  );
};

export default MyArticlesHeader;

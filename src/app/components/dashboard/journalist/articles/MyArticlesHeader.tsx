'use client';

import ReusableHeader from '@/app/components/shared/ReusableHeader';
import {
  PlusCircle,
  FileText,
  Clock,
  XCircle,
  CheckCircle,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const MyArticlesHeader = ({ status }: { status?: string }) => {
  const router = useRouter();

  const headerContent = {
    PENDING: {
      title: 'অপেক্ষমাণ সংবাদসমূহ',
      description:
        'আপনার পাঠানো যে সংবাদগুলো বর্তমানে পর্যালোচনার অপেক্ষায় আছে।',
      icon: <Clock className="w-5 h-5" />,
    },
    REJECTED: {
      title: 'বাতিলকৃত সংবাদসমূহ',
      description:
        'নীতিমালা বা তথ্যের ঘাটতির কারণে যে সংবাদগুলো গ্রহণ করা হয়নি।',
      icon: <XCircle className="w-5 h-5" />,
    },
    APPROVED: {
      title: 'প্রকাশিত সংবাদসমূহ',
      description: 'আপনার সফলভাবে প্রকাশিত সংবাদগুলোর তালিকা এখান থেকে দেখুন।',
      icon: <CheckCircle className="w-5 h-5" />,
    },
    DEFAULT: {
      title: 'আমার সংবাদসমূহ',
      description: 'আপনার তৈরিকৃত সকল নিউজের তালিকা এবং বর্তমান অবস্থা দেখুন।',
      icon: <FileText className="w-5 h-5" />,
    },
  };

  const currentStatus = status?.toUpperCase() as keyof typeof headerContent;

  const { title, description, icon } =
    headerContent[currentStatus] || headerContent.DEFAULT;

  return (
    <div className="relative">
      <ReusableHeader
        currentStatus={currentStatus}
        icon={icon}
        title={title}
        description={description}
        actions={[
          {
            label: 'নতুন নিউজ লিখুন',
            variant: 'default',
            onClick: () => router.push('/journalist/dashboard/create'),
            icon: <PlusCircle className="w-4 h-4" />,
          },
        ]}
      />
    </div>
  );
};

export default MyArticlesHeader;

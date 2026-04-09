'use client';
import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { PenTool, BookOpen, Clock, LayoutDashboard } from 'lucide-react';
import { useRouter } from 'next/navigation';

const JournalistPageHeader = () => {
  const router = useRouter();

  return (
    <ReusableHeader
      icon={<LayoutDashboard className="w-5 h-5 " />}
      title="সাংবাদিক প্যানেল"
      description="আপনার লেখা সংবাদগুলো ম্যানেজ করুন এবং নতুন রিপোর্ট তৈরি করুন"
      actions={[
        {
          label: 'নিউজ লিখুন',
          variant: 'default',
          onClick: () => router.push('/journalist/dashboard/create'),
          icon: <PenTool className="w-4 h-4" />,
        },
        {
          label: 'আমার সংবাদ',
          variant: 'outline',
          onClick: () => router.push('/journalist/dashboard/articles'),
          icon: <BookOpen className="w-4 h-4" />,
        },
        {
          label: 'পেন্ডিং সংবাদ',
          variant: 'ghost',
          onClick: () => router.push('/journalist/dashboard/pending'),
          icon: <Clock className="w-4 h-4" />,
        },
      ]}
    />
  );
};

export default JournalistPageHeader;

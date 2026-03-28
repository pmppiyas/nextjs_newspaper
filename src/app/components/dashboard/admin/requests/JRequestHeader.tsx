'use client';

import React from 'react';
import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { UserCheck, ArrowLeft, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';

const JRequestHeader = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <ReusableHeader
        icon={<UserCheck className="w-5 h-5" />}
        title="জার্নালিস্ট রেজিস্ট্রেশন রিকোয়েস্ট"
        description="নতুন জার্নালিস্টদের আবেদনগুলো পর্যালোচনা করুন এবং তাদের প্রোফাইল এপ্রুভ বা রিজেক্ট করুন।"
        actions={[
          {
            label: 'জার্নালিস্ট লিস্টে ফিরুন',
            onClick: () => router.push('/admin/dashboard/journalists'),
            icon: <ArrowLeft className="w-4 h-4" />,
          },
        ]}
      />

      <div className="flex items-start gap-3 px-4 py-3 mb-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800 rounded-lg max-w-7xl mx-auto">
        <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
        <div className="text-sm text-amber-800 dark:text-amber-300">
          <strong>মনে রাখবেন:</strong> যেকোনো রিকোয়েস্ট এপ্রুভ করার আগে
          জার্নালিস্টের দেওয়া তথ্য এবং ডকুমেন্টগুলো ভালোভাবে যাচাই করে নিন।
          একবার এপ্রুভ হয়ে গেলে তারা নিউজ পাবলিশ করার এক্সেস পাবে।
        </div>
      </div>
    </div>
  );
};

export default JRequestHeader;

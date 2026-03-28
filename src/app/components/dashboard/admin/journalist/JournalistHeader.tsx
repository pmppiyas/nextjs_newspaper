'use client';

import ReusableHeader from '@/app/components/shared/ReusableHeader';
import { Users, Bell, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

interface IJournalistHeaderProps {
  requestCount?: number;
}

const JournalistHeader = ({ requestCount = 0 }: IJournalistHeaderProps) => {
  const router = useRouter();

  return (
    <div className="w-full">
      <ReusableHeader
        icon={<Users className="w-5 h-5" />}
        title="জার্নালিস্ট ম্যানেজমেন্ট"
        description="প্ল্যাটফর্মের সকল জার্নালিস্টদের প্রোফাইল এবং তাদের রিকোয়েস্ট স্ট্যাটাস পরিচালনা করুন"
        actions={[
          {
            label: (
              <div className="flex items-center gap-2">
                <span>রিকোয়েস্ট লিস্ট</span>
                {requestCount > 0 && (
                  <Badge className="bg-destructive text-destructive-foreground px-1.5 py-0.5 rounded-full text-[10px] font-bold animate-pulse border-none">
                    {requestCount}
                  </Badge>
                )}
                <ArrowRight className="w-3.5 h-3.5 opacity-70" />
              </div>
            ) as unknown as string,
            onClick: () => router.push('/admin/dashboard/journalists/requests'),
            icon: <Bell className="w-4 h-4" />,
          },
        ]}
      />

      <div className="flex items-center gap-3 px-1 mb-4">
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider">
            পেন্ডিং রিকোয়েস্ট: {requestCount} জন
          </span>
        </div>
      </div>
    </div>
  );
};

export default JournalistHeader;

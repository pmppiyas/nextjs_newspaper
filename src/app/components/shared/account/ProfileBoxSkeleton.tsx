import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ProfileBoxSkeleton = () => {
  return (
    <div className="w-full mx-auto">
      <Card className="border border-border bg-card shadow-sm overflow-hidden">
        {/* উপরের প্রাইমারি কালার বার এর স্কেলিটন */}
        <Skeleton className="h-2 w-full rounded-none" />

        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* অ্যাভাটার স্কেলিটন */}
            <Skeleton className="h-28 w-28 rounded-xl shadow-sm" />

            <div className="space-y-3 flex-1">
              {/* নাম এর স্কেলিটন */}
              <Skeleton className="h-9 w-[250px] md:w-[350px]" />
              {/* ব্যাজ এর স্কেলিটন */}
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* ব্যক্তিগত তথ্য সেকশন স্কেলিটন */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>

              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-lg" />
                    <div className="space-y-2">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* অ্যাকাউন্ট স্ট্যাটাস সেকশন স্কেলিটন */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>

              {/* স্ট্যাটাস বক্স স্কেলিটন */}
              <div className="p-5 rounded-xl border border-border">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[40%]" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileBoxSkeleton;

import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const UpdateNewsSkeleton = () => {
  return (
    <Card className="max-w-4xl mx-auto shadow-lg border-primary/10">
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" /> {/* Label */}
          <Skeleton className="h-12 w-full rounded-md" /> {/* Input */}
        </div>

        {/* ক্যাটাগরি এবং ট্যাগ গ্রিড (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Selector Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Tags Input Skeleton */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" /> {/* Tag Icon */}
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        {/* ইমেজ প্রিভিউ সেকশন */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>

        {/* মূল খবর (Content) Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[95%]" />
            <Skeleton className="h-40 w-full rounded-md" />
          </div>
        </div>

        <div className="flex justify-end gap-4 border-t pt-6">
          <Skeleton className="h-10 w-24 rounded-md" /> {/* Cancel Button */}
          <Skeleton className="h-10 w-36 rounded-md" /> {/* Update Button */}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpdateNewsSkeleton;

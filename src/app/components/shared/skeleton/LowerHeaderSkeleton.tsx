import { Skeleton } from '@/components/ui/skeleton';

const LowerHeaderSkeleton = () => {
  return (
    <nav className="border-b border-border hidden md:block bg-primary text-background">
      <div className="max-w-7xl mx-auto px-8 py-3">
        <div className="flex items-center justify-between h-14">
          <ul className="flex items-center gap-6">
            <li>
              <Skeleton className="h-6 w-6 rounded-full bg-white/20" />
            </li>

            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i}>
                <Skeleton className="h-5 w-16 bg-white/20 rounded" />
              </li>
            ))}
            <li>
              <Skeleton className="h-5 w-10 bg-white/20 rounded" />
            </li>
          </ul>

          <div className="flex items-center gap-2 w-55">
            <Skeleton className="h-5 w-5 bg-white/20 rounded-full" />
            <Skeleton className="h-8 w-full bg-white/10 rounded-md border border-white/20" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LowerHeaderSkeleton;

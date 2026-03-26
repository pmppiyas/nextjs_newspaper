const NewsCardSkeleton = () => {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm animate-pulse w-full">
      <div className="w-full h-48 bg-muted rounded-md mb-4"></div>

      <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>

      <div className="h-4 bg-muted rounded w-full mb-1"></div>
      <div className="h-4 bg-muted rounded w-5/6 mb-3"></div>

      <div className="flex justify-between items-center mt-4">
        <div className="h-4 bg-muted rounded w-1/4"></div>
        <div className="h-6 bg-muted rounded-full w-20"></div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;

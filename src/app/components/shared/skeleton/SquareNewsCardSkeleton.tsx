const SquareNewsCardSkeleton = () => {
  const skeletonCards = Array.from({ length: 3 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="rounded-lg border bg-card p-4 shadow-sm animate-pulse w-full flex flex-col h-full"
        >
          <div className="w-full h-48 bg-muted rounded-md mb-4" />

          <div className="h-6 bg-muted rounded w-3/4 mb-4" />

          <div className="flex justify-between items-center mt-auto">
            <div className="h-4 bg-muted rounded w-1/4" />
            <div className="h-6 bg-muted rounded-full w-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SquareNewsCardSkeleton;

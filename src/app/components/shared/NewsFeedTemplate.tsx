import React from 'react';

const NewsFeedTemplate = ({
  children,
  aside,
  ads,
}: {
  children: React.ReactNode;
  aside?: React.ReactNode[];
  ads?: React.ReactNode;
}) => {
  return (
    <div className="flex  flex-col min-h-screen items-center max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-6 ">
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-6 w-full ">
        {/* Left Column: Main + secondary news */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full">
          {children}
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {aside}

          {/* Ads or Social Widgets */}
          {ads}
        </aside>
      </div>
    </div>
  );
};

export default NewsFeedTemplate;

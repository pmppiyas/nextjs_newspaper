import React from 'react';

const NewsFeedTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  flex-col min-h-screen items-center max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-6 ">
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-6 w-full ">
        {/* Left Column: Main + secondary news */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full">
          {children}
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Latest News */}
          <div className="bg-card p-4 rounded shadow-sm">
            <h3 className="font-bold mb-3 text-lg">সর্বশেষ সংবাদ</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-primary cursor-pointer transition">
                নতুন নীতি প্রকাশ
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                আন্তর্জাতিক সম্মেলন শুরু
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                অর্থনীতি: বড় পরিবর্তন
              </li>
            </ul>
          </div>

          {/* Popular / Trending */}
          <div className="bg-card p-4 rounded shadow-sm">
            <h3 className="font-bold mb-3 text-lg">জনপ্রিয়</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-primary cursor-pointer transition">
                বিনোদন: নতুন সিনেমা মুক্তি
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                খেলাধুলা: সুপার লীগ আপডেট
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                ইসলামী বিশ্ব খবর
              </li>
            </ul>
          </div>

          {/* Ads or Social Widgets */}
          <div className="bg-card p-4 rounded shadow-sm text-center">
            <p className="text-sm text-muted-foreground">
              Advertisement / Widget
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsFeedTemplate;

import SidebarAds from '@/app/components/shared/ads/SidebarAds';
import Footer from '@/app/components/shared/Footer';
import Navbar from '@/app/components/shared/navbar/Navbar';
import AsideLatestNews from '@/app/components/shared/news/aside/AsideLatestNews';
import AsideMoreRelatedNews from '@/app/components/shared/news/aside/AsideMoreRelatedNews';
import AsidePopulerNews from '@/app/components/shared/news/aside/AsidePopulerNews';
import NewsFeedTemplate from '@/app/components/shared/NewsFeedTemplate';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <NewsFeedTemplate
        aside={[
          <AsideMoreRelatedNews key="related" />,
          <AsideLatestNews key="latest" />,
          <AsidePopulerNews key="populer" />,
        ]}
        ads={<SidebarAds />}
      >
        {children}
      </NewsFeedTemplate>
      <Footer />
    </div>
  );
};
export default layout;

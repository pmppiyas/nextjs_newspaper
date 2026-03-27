import Footer from '@/app/components/shared/Footer';
import Navbar from '@/app/components/shared/navbar/Navbar';
import NewsFeedTemplate from '@/app/components/shared/NewsFeedTemplate';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <NewsFeedTemplate>{children}</NewsFeedTemplate>
      <Footer />
    </div>
  );
};
export default layout;

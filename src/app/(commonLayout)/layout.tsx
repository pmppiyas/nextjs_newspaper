import Footer from '@/app/components/shared/Footer';
import Navbar from '@/app/components/shared/navbar/Navbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;

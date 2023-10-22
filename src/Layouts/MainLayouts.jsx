import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLayouts = () => {
  return (
    <div className=' max-w-5xl mx-auto'>
      <div className=' fixed left-0 right-0  top-0 max-w-5xl mx-auto z-50'>
        <Navbar />
      </div>
      <div className='py-10'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
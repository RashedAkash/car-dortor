import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLayouts = () => {
  return (
    <div className=' max-w-5xl mx-auto'>
      <Navbar />
      <div className='py-10'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Service = ({ service }) => {
  console.log(service);
  const { title, img, price } = service;
  return (
    <div>
      <div className="card h-[350px] bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
          <h2 className="card-title">{ title}</h2>
          <div className=' flex justify-between text-red-500'>
            <p className='text-start'>price : ${price }</p>
    <button > <FaArrowRight /></button>
          </div>
  </div>
</div>
    </div>
  );
};

export default Service;
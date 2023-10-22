import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/service.json')
      .then(res => res.json())
    .then(data=>setServices(data))
  },[])

  return (
    <div>
      <div className=' text-center space-y-2'>
        <h4 className=' text-xl text-red-500 font-medium'>Service</h4>
      <h2 className=' text-3xl font-semibold'>Our Service Area</h2>
      <p className=' w-1/2 mx-auto  '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
       <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        services?.map(service=> <Service key={service._id} service={service}/>)
     }
    </div>
   </div>
  );
};

export default Services;
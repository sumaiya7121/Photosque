import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://photosque-server.vercel.app/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div>
            <div className='text-center mt-5 mb-5'>
                <h2 className='text-3xl text-orange-600 font-bold mb-1 p-2'>
                     We Provide The Best Services
                </h2>
                <p>You're about to throw the most epic party for your friends and family? We will be your ride or die. Our job is to catch every second, so you and your loved ones can just let go and live in the moment. You feel like we could vibe? Leave us a message and let’s get this party started.</p>
               
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 '>
          {
            services.map(service=>
            <ServiceCard 
            key={service._id}
            service={service}
            ></ServiceCard>)
          }
            </div>
<div className='flex justify-center p-10'>
    
         <Link to='/allservices'> <button type="button" className="px-8 py-3 text-center font-semibold rounded-full bg-orange-600 text-white">See More</button></Link>
</div>
        </div>
    );
};

export default Services;
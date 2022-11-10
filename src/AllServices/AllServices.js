import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServicecard from './AllServicecard';

const AllServices = () => {
    const services = useLoaderData()
    return (
        <div>
            <div>
               <h2 className='text-3xl font-bold text-center text-orange-600'> All Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20'>
{
    services.map(service=><AllServicecard
    key={service._id}
    service={service}
    >


    </AllServicecard>)
}

            </div>

        </div>
    );
};

export default AllServices;
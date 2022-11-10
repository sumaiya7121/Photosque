import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../Assets/hero.png';

const Banner = () => {
    return (
        <div>
             <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
				<span className="text-orange-600">Emotions through </span>photos
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Capturing moments from today…Creating memories for a lifetime
			
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link t0='/register' rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold hover:bg-orange-600 hover:text-white border rounded ">Register</Link>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img  src={hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-140 2xl:h-128 " />
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;
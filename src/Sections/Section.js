import React from 'react';
import about from '../Assets/about.png';

const Section = () => {
    return (
<div>        <div className='flex flex-col lg:flex-row bg-orange-100 mb-12'>
            <div className='w-1/2'>
<img src={about} alt="" />
            </div>
            <div className='w-1/2 p-20'>
                <h2 className='text-3xl text-orange-600 font-bold'>About Me!</h2>
<p>
Working with brands and people to create striking imagery for print or online use. Photography is a near limitless and collaborative medium, let me help you take your ideas and translate them into stunning high quality media in the studio or out.</p>
            </div>
            
        </div>
        <div>

            <div>

<h2 className='text-3xl font-bold text-orange-600 text-center'>Photo Gallary</h2>
            </div>

            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://i.ibb.co/TRK0nLV/road-g8b0e36dcf-640.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/KWWTqvx/woman-g1a6db33cc-1280.jpg" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Jy6Xpjr/baby-ga06310b92-640.jpg" />


		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/QYWsgnj/trees-gc2c8ddafa-640.jpg" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/r2hkmDs/baby-gc02aa4916-640.jpg" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/ftWHybX/goldfinch-g7506055e0-640.jpg" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/3kWKvwk/relationship-g2173f5152-1280.jpg" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/qD9drsZ/duck-g71b96656c-640.jpg" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/prT5Nqk/black-forest-g58fd72f16-640.jpg" />

		<img src="https://i.ibb.co/grjk1rS/coffee-gb266d7490-640.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
        </div>
        
        
        </div>
        
    );
};

export default Section;
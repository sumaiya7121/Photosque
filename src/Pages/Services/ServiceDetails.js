import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import reviewimg from '../../Assets/reviewimg.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useTitle } from "../../Hooks/UseTitle";
import SingleService from '../Services/SingleService';
	 

const ServiceDetails = () => {
useTitle("Service Details");

  const {user} =useContext(AuthContext)
   const {title,price,description,img,_id}  = useLoaderData();

   const[review,setReview] =useState([]);
   useEffect(()=>{
   fetch('https://photosque-server.vercel.app/reviews')
   .then(res=>res.json())
   .then(data=>setReview(data))


   },[])

  //  console.log(review);

   const selectedService = review.filter(rv => rv.service === _id)
   console.log(selectedService);

   
  const handleReview =(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=user?.email || 'unregistered'
    const textarea=form.textarea.value;
    const image= form.image.value || 'not found'
    
    const review ={
    service:_id,
    createdTime: new Date().toISOString(),
    serviceName: title,
    email,
    name,
    textarea,
    image


    }
    fetch('https://photosque-server.vercel.app/myreviews',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(review)

    }

    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            toast.success('Review submitted successfully!');
            form.reset();
        }
        else{
            toast.error('Somwthing went wrong! ')
        }
        })
    .catch(err=>console.log(err))


    

  }

    return (
    <div>   
      
       <div className="card card-side bg-base-100 shadow-xl grid grid-col-1">
<img src={img} className='px-6 rounded-xl' alt="Movie"/>
  <div className="card-body">
    <h2 className="card-title text-orange-600 text-center"> {title} </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <p className='text-orange-600'>Price: {price}</p>
    </div>
  </div>
</div>
<div>

    {/* review section */}

<div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">

    {
selectedService.map(service => <SingleService
key={_id}
service={service}

>

</SingleService>




)

    }
 
  </div>
</div>

<div className=" grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Review!</h2>
			<div className="dark:text-gray-400">Review our services</div>
		</div>
		<img src={reviewimg} alt="" className="p-6 " />
	</div>

  <div>
    
>


</div>
 {
user?.email ? 
 <form className='mt-20' onSubmit={handleReview} >

	
			<input name='name' id="name" type="text" placeholder="Your Name" className=" input input-bordered w-full p-3 mb-2 rounded border-amber-600" required/>
		
			<input name='email' id="email" type="email" placeholder='your Email' className="w-full input input-bordered p-3 rounded mb-2 border-amber-600" defaultValue={user?.email} readOnly />

      <input name='image' id="image" type="url" placeholder='Your Photo URL' className="w-full input input-bordered p-3 rounded mb-2 border-amber-600"  />

			<textarea name='textarea' id="message" rows="3" placeholder='Your review'  className="input input-bordered  w-full p-3 h-300 rounded border-amber-600" required></textarea>
	
		<div className='flex justify-center p-10'>
    
    <button type="submit" className="px-8 py-3 text-center font-semibold rounded-full bg-orange-600 text-white">Submit Review</button>

    </div>
    
	</form>
  :

 <div className='text-3xl text-center' > 
  <h2>Please Log in For Review!<Link className='btn mt-3' to='/login'> Login</Link> </h2>
 </div>


 }
</div>


</div>

</div>
    );
};

export default ServiceDetails;
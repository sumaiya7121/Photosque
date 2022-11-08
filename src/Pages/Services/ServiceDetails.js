import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const ServiceDetails = () => {
   const {title,price,description,img,_id}  = useLoaderData();
   const {user} =useContext(AuthContext);
   
  const handleReview =(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const textarea=form.name.value;
    const image= user?.img || 'not found'
    
    const review ={
    service:_id,
    serviceNme: title,
    reviewer:name,
    message: textarea,
    image


    }
    fetch('http://localhost:5000/myreviews',{
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
    <div>    <div className="card card-side bg-base-100 shadow-xl grid grid-col-1">
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
<form onSubmit={handleReview}>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-10 mt-5'>
   <div>
     <div className='flex flex-evenly'>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
        <div><input name='name' type="text" placeholder="Your Name" className="input input-bordered border-orange-500 w-4/2 mb-2 required" /></div>

        <input name='email' type="email" placeholder="email" className="input input-bordered border-orange-500 w-4/2 mb-2 required" />

   </div>
	
<div className='text-center'>
       <textarea name='textarea' className="textarea  border-orange-500 w-ful text-center" placeholder="Write Your Review required">

       </textarea>
</div>
<button className="btn btn-outline border-orange-500 hover:bg-orange-700 hover:text-white px-20">Submit review</button>
</div>
</form>

</div>
</div>
    );
};

export default ServiceDetails;
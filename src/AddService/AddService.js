import React from 'react';
import { toast } from 'react-toastify';
import { useTitle } from "../Hooks/UseTitle";


const AddService = () => {
 useTitle("Add Services");
const handleAddService = e =>{
    e.preventDefault();
    const form= e.target;
    const img= form.img.value;
    const name=form.name.value;
    const description=form.description.value;
    const price = form.price.value;

    const service ={
       img,
       name,
       description,
       price 
    }

fetch('https://photosque-server.vercel.app/services',{
    method:'POST',
    headers:{
        'content-type':'application/json'

    },
    body:JSON.stringify(service)
})
.then(res=>res.json())
.then(data=>{
    toast.success('Your service added successfully!')
    console.log(data)})
.catch(err=>{
    toast.warning('Something went wrong!')
    console.log(err)})


}


    return (
        <div>
            <h2 className='text-3xl font-bold text-orange-600 text-center'>Please Add a New Service</h2>
<div>

<form onSubmit={handleAddService} className='grid grid-cols-1  gap-4 mb-60 mt-20'>
    <input type='url' name='img' placeholder='Service image(Please provide a valid image url)' className='input input-bordered w-full' required></input>

        <input type='text' name='name' placeholder='Name of service' className='input input-bordered w-full' required></input>

      <input type='text' name='description' placeholder='Description of service' className='input input-bordered w-full' min="0" max="300" step="10" required ></input>



    <input type='text' name='price' placeholder='Price of the service' className='input input-bordered w-full' required></input>

    <div className='flex justify-center'>
        <input className='btn' type='submit' ></input>
    </div>


</form>
    
</div>
                        
        </div>
    );
};

export default AddService;
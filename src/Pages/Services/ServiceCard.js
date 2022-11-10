import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const{img,price,title,description,_id}=service;
     
     const truncateString=(str,num)=>{
        if(str.length>num){
            return str.slice(0, num)+ "..."
        }
        else {
            return str;
        }
     }

    return (
       <div className="card w-96 bg-base-100 shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="/" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <p>{truncateString(description,100)}</p>
    
    <div className="card-actions">
     <Link to={`/services/${_id}`}>
          <button type="button" className="px-8 py-3 font-semibold rounded bg-orange-600 text-white">See Details</button>
        </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
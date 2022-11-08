import React from 'react';

const ServiceCard = ({service}) => {
    const{img,price,title,description}=service;
    return (
       <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="/" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <p>{description}</p>
    
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { useTitle } from "../Hooks/UseTitle";

const AllServicecard = ({service}) => {
   useTitle("All services");

    const{_id,img,price,description,title} = service;
    return (
       <div className="card w-96 bg-base-100 shadow-2xl">
  <figure className="px-10 pt-10">
 <PhotoProvider>
    <PhotoView src={img}>
    <img src={img} alt="/" className="rounded-xl" />
    </PhotoView>
</PhotoProvider>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <p>{description}</p>
    
    <div className="card-actions">
     <Link to={`/services/${_id}`}>
        <button type="button" className="px-8 py-3 font-semibold rounded bg-orange-600 text-white">See Details</button>
        </Link>
    </div>
  </div>
</div>
    );
};

export default AllServicecard;
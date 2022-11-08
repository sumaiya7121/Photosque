import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user}= useContext(AuthContext);
    const[review,setReview]=useState({})



useEffect(() => {
        fetch(`http://localhost:5000/myreviews?name=${user?.name}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.name])


 
    return (
         <div>
            <h2 className="text-5xl">You have {review.length} Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;
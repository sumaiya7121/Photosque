
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import AllReviews from './AllReviews';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('Review Deleted!')
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }


    return (
        <div>
            <h2 className="text-5xl">You have {reviews.length} Review</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                 Remove Review</th>
                               
                            <th>Reviewer</th>
                            <th>Name of service</th>
                            <th>Review</th>
                     
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <AllReviews
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                               
                            ></AllReviews>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;



import React from 'react';

	

const AllReviews = ({ review, handleDelete, handleStatusUpdate }) => {
    console.log(review)
    const { _id,name,serviceName,textarea } = review;
  

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
             {name}
            </td>
          
            <td>
                {serviceName}
               
            </td>
            <td>{textarea}</td>
          
        </tr>
    );
};

export default AllReviews;

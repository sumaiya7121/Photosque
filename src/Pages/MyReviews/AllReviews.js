

import React from 'react';

const OrderRow = ({ review, handleDelete, handleStatusUpdate }) => {
    console.log(review)
    const { _id, email,image,name,serviceName,textarea } = review;
  

    

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

export default OrderRow;

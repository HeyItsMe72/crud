import React from 'react';

const CrudTableRow = ({el}) => {
    return ( 
        <tr>
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
     );
}
 
export default CrudTableRow;
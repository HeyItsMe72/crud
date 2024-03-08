import React, { useState } from 'react';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const CrudApi = () => {
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) =>{
        data.id = Date.now()
        setDb([...db, data]);
    }

    const updateData = (data) => {
        let newData = db.map(el=> el.id === data.id ? data : el);
        setDb(newData);
    }

    const deleteData = (data) => {}


    return ( 
        <div>
            <h2>CRUD App</h2>
            <CrudForm updateData={updateData} createData={createData} deleteData={deleteData} 
            dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
     );
}
 
export default CrudApi;